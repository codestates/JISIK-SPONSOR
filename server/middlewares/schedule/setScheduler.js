const schedule = require('node-schedule');
const cancelSchedule = require('./cancelSchedule');
const {
  inProgressProjects,
  achievedProjects,
  canceledProjects
} = require('./scheduleJop');

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
        // [프로젝트 펀딩 시작]
        inProgressProjects();
        // [프로젝트 펀딩 종료] - 펀딩 성공
        achievedProjects();
        //  [프로젝트 펀딩 종료] - 펀딩 실패
        canceledProjects();
      } catch (err) {
        console.error(err);
      }
    });

    changeProjectStatusOJB = job;
  }
};
