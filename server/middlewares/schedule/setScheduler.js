const { project, user, project_sponsor } = require('../../models');
const { Op } = require('sequelize');
const schedule = require('node-schedule');
const cancelSchedule = require('./cancelSchedule');
const {
  fundingStart,
  fundingSuccess,
  fundingCanceled,
  fundingSuccessToSponsor,
  fundingCanceledToSponsor
} = require('../email/email-content');
const emailSend = require('../email/email-send');

let changeProjectStatusOJB = null;

module.exports = {
  changeProjectStatus: (s) => {
    cancelSchedule(changeProjectStatusOJB);
    console.log('프로젝트 상태 변경 스켸쥴이 예약되었습니다.');

    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek;
    rule.hour = s.hour;
    rule.minute = s.minute;

    const job = schedule.scheduleJob(rule, async () => {
      try {
        console.log('예약된 작업 실행!');

        /**
         *
         * [프로젝트 펀딩 시작]
         *
         */

        // 진행중 상태로 변경할 프로젝트 찾기 => 이메일 전송
        const inProgressProjects = await project.findAndCountAll({
          where: {
            [Op.and]: [
              { status: 'approved' }, // 승인된 경우 (즉, 프로젝트 펀딩 대기중)
              { start_date: { [Op.lte]: new Date() } } // 시작 날짜가 현재 시간보다 같거나 적은 경우
            ]
          },
          include: [
            {
              model: user, // users 테이블 조인
              as: 'author',
              attributes: ['name', 'nickname', 'email']
            }
          ]
        });

        if (inProgressProjects.count) {
          // 펀딩 시작 상태로 변경
          await project.update(
            { status: 'inprogress' },
            {
              where: {
                [Op.and]: [
                  { status: 'approved' }, // 승인된 경우 (즉, 프로젝트 펀딩 대기중)
                  { start_date: { [Op.lte]: new Date() } } // 시작 날짜가 현재 시간보다 같거나 적은 경우
                ]
              }
            }
          );
          // 펀딩 시작된 프로젝트에 시작 이메일 전송
          for (let i = 0; i < inProgressProjects.count; i++) {
            const emailContent = fundingStart(
              inProgressProjects.rows[i].author.email,
              inProgressProjects.rows[i].author.name,
              inProgressProjects.rows[i]
            );
            emailSend(emailContent);
          }
        }

        /**
         *
         * [프로젝트 펀딩 종료] - 펀딩 성공
         *
         */

        // 성사됨 상태로 변경할 프로젝트 찾기 => 이메일 전송
        const achievedProjects = await project.findAndCountAll({
          where: {
            [Op.and]: [
              { status: 'inprogress' }, // 진행중인 경우
              { remainder: { [Op.eq]: 0 } }, // 성공까지 남은 금액이 0인 경우 (성공인 경우)
              { end_date: { [Op.lte]: new Date() } } // 종료 날짜가 현재 시간보다 같거나 적은 경우
            ]
          },
          include: [
            {
              model: user, // users 테이블 조인
              as: 'author',
              attributes: ['name', 'nickname', 'email']
            }
          ]
        });

        if (achievedProjects.count) {
          // 성사됨 상태로 변경
          await project.update(
            { status: 'achieved' },
            {
              where: {
                [Op.and]: [
                  { status: 'inprogress' }, // 진행중인 경우
                  { remainder: { [Op.eq]: 0 } }, // 성공까지 남은 금액이 0인 경우 (성공인 경우)
                  { end_date: { [Op.lte]: new Date() } } // 종료 날짜가 현재 시간보다 같거나 적은 경우
                ]
              }
            }
          );
          // 성사된 프로젝트에 성사 이메일 전송
          for (let i = 0; i < achievedProjects.count; i++) {
            const emailContent = fundingSuccess(
              achievedProjects.rows[i].author.email,
              achievedProjects.rows[i].author.name,
              achievedProjects.rows[i]
            );
            emailSend(emailContent);
            // 후원자들 찾기
            const sponsors = await project_sponsor.findAndCountAll({
              where: { project_id: achievedProjects.rows[i].id },
              include: [{ model: user }]
            });
            // 후원자들 이메일 추출
            const sponsorsEmail = sponsors.rows.map((el) => {
              return el.user.email;
            });
            // 후원자들에게 메일 전송
            console.log(sponsorsEmail);
            const sponsorEmailContent = fundingSuccessToSponsor(
              sponsorsEmail,
              achievedProjects.rows[i]
            );
            emailSend(sponsorEmailContent);
          }
        }

        /**
         *
         * [프로젝트 펀딩 종료] - 펀딩 실패
         *
         */

        // 취소됨 상태로 변경할 프로젝트 찾기 => 이메일 전송
        const canceledProjects = await project.findAndCountAll({
          where: {
            [Op.and]: [
              { status: 'inprogress' }, // 진행중인 경우
              { remainder: { [Op.gt]: 0 } }, // 성공까지 남은 금액이 0인 경우 (성공인 경우)
              { end_date: { [Op.lte]: new Date() } } // 종료 날짜가 현재 시간보다 같거나 적은 경우
            ]
          },
          include: [
            {
              model: user, // users 테이블 조인
              as: 'author',
              attributes: ['name', 'nickname', 'email']
            }
          ]
        });

        if (canceledProjects.count) {
          // 취소됨 상태로 변경
          await project.update(
            { status: 'canceled' },
            {
              where: {
                [Op.and]: [
                  { status: 'inprogress' }, // 진행중인 경우
                  { remainder: { [Op.gt]: 0 } }, // 성공까지 남은 금액이 0보다 큰 경우 (실패인 경우)
                  { end_date: { [Op.lte]: new Date() } } // 종료 날짜가 현재 시간보다 같거나 적은 경우
                ]
              }
            }
          );
          // 성사된 프로젝트에 성사 이메일 전송
          for (let i = 0; i < canceledProjects.count; i++) {
            const emailContent = fundingCanceled(
              canceledProjects.rows[i].author.email,
              canceledProjects.rows[i].author.name,
              canceledProjects.rows[i]
            );
            emailSend(emailContent);
            // 후원자들 찾기
            const sponsors = await project_sponsor.findAndCountAll({
              where: { project_id: canceledProjects.rows[i].id },
              include: [{ model: user }]
            });
            // 후원자들 이메일 추출
            const sponsorsEmail = sponsors.rows.map((el) => {
              return el.user.email;
            });
            // 후원자들에게 메일 전송
            console.log(sponsorsEmail);
            const sponsorEmailContent = fundingCanceledToSponsor(
              sponsorsEmail,
              achievedProjects.rows[i]
            );
            emailSend(sponsorEmailContent);
          }
        }
      } catch (err) {
        console.error(err);
      }
    });

    changeProjectStatusOJB = job;
  }
};
