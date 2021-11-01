const { project, project_milestone } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  post: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { projectId } = req.params;
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      const projectInfo = await project.findOne({ where: { id: projectId } });
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { title, goalDate } = req.body;
      if (!title || !goalDate) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      /**
       *
       * [신규 계획 항목 생성]
       *
       */

      // 새로운 계획 항목을 생성한다.
      const newMilestone = await project_milestone.create({
        project_id: projectId,
        title,
        goal_date: goalDate
      });

      // 새로 생성한 계획 항목의 아이디를 반환한다.
      res.status(201).json({ id: newMilestone.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  patch: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { projectId, milestoneId } = req.params;
      if (isNaN(projectId) || isNaN(milestoneId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const milestoneInfo = await project_milestone.findOne({
        where: { id: milestoneId }
      });

      // 프로젝트 또는 계획 항목이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !milestoneInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 프로젝트와 계획 항목이 연관없는 경우 다음을 리턴한다.
      if (projectInfo.id !== milestoneInfo.project_id) {
        return res.status(403).json({
          message: 'Bad Request! - Project and milestone are not connected.'
        });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      /**
       *
       * [프로젝트 계획 항목 정보 수정]
       *
       */

      const { title, goalDate } = req.body;

      // 계획 항목 정보를 업데이트한다.
      await project_milestone.update(
        {
          title: title
            ? title
            : milestoneInfo.title
            ? milestoneInfo.title
            : null,
          goal_date: goalDate
            ? goalDate
            : milestoneInfo.goal_date
            ? milestoneInfo.goal_date
            : null
        },
        { where: { id: milestoneId } }
      );

      // 업데이트한 계획 항목 정보를 조회한다.
      const newMilestoneInfo = await project_milestone.findOne({
        where: { id: milestoneId },
        attributes: ['id', 'title', 'goal_date']
      });

      // 업데이트한 계획 항목 정보를 반환한다.
      res.status(200).json({ project_milestones: newMilestoneInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  delete: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { projectId, milestoneId } = req.params;
      if (isNaN(projectId) || isNaN(milestoneId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const milestoneInfo = await project_milestone.findOne({
        where: { id: milestoneId }
      });

      // 프로젝트 또는 계획 항목이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !milestoneInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 프로젝트와 계획 항목이 연관없는 경우 다음을 리턴한다.
      if (projectInfo.id !== milestoneInfo.project_id) {
        return res.status(403).json({
          message: 'Bad Request! - Project and budget item are not connected.'
        });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      /**
       *
       * [프로젝트 계획 항목 삭제]
       *
       */

      // 계획 항목 레코드를 삭제한다.
      await project_milestone.destroy({ where: { id: milestoneId } });

      // 삭제된 계획 항목 아이디를 반환한다.
      res.status(200).json({ id: milestoneId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
