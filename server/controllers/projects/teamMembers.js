const { project, project_team, project_team_member } = require('../../models');
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
      const { projectId, teamId } = req.params;
      if (isNaN(projectId) || isNaN(teamId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const teamInfo = await project_team.findOne({ where: { id: teamId } });

      // 프로젝트 또는 팀이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !teamInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 프로젝트와 팀이 연관없는 경우 다음을 리턴한다.
      if (projectInfo.id !== teamInfo.project_id) {
        return res.status(403).json({
          message: 'Bad Request! - Project and team are not connected.'
        });
      }

      // 현재 회원이 프로젝트 팀을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== teamInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { name, bio } = req.body;
      if (!name || !bio) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      /**
       *
       * [신규 팀원 생성]
       *
       */

      // 새로운 팀원을 생성한다.
      const newMember = await project_team_member.create({
        project_id: projectId,
        project_team_id: teamId,
        name,
        bio
      });

      // 새로 생성한 팀원의 아이디를 반환한다.
      res.status(201).json({ id: newMember.id });
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
      const { projectId, teamId, memberId } = req.params;
      if (isNaN(projectId) || isNaN(teamId) || isNaN(memberId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const teamInfo = await project_team.findOne({ where: { id: teamId } });
      const memberInfo = await project_team_member.findOne({
        where: { id: memberId }
      });

      // 프로젝트, 팀 또는 팀원이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !teamInfo || !memberInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 프로젝트, 팀과 팀원이 연관없는 경우 다음을 리턴한다.
      if (
        projectInfo.id !== teamInfo.project_id ||
        projectInfo.id !== memberInfo.project_id ||
        teamInfo.id !== memberInfo.project_team_id
      ) {
        return res.status(403).json({
          message:
            'Bad Request! - Project, team and team member are not connected.'
        });
      }

      // 현재 회원이 프로젝트 팀을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== teamInfo.user_id && userInfo.role_id !== 1) {
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
       * [프로젝트 팀원 정보 수정]
       *
       */

      const { name, bio } = req.body;

      // 팀원 정보를 업데이트한다.
      await project_team_member.update(
        {
          name: name ? name : memberInfo.name ? memberInfo.name : null,
          bio: bio ? bio : memberInfo.bio ? memberInfo.bio : null
        },
        { where: { id: memberId } }
      );

      // 업데이트한 팀원 정보를 조회한다.
      const newMemberInfo = await project_team_member.findOne({
        where: { id: memberId },
        attributes: ['id', 'name', 'bio']
      });

      // 업데이트한 팀원 정보를 반환한다.
      res.status(200).json({ project_team_members: newMemberInfo });
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
      const { projectId, teamId, memberId } = req.params;
      if (isNaN(projectId) || isNaN(teamId) || isNaN(memberId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const teamInfo = await project_team.findOne({ where: { id: teamId } });
      const memberInfo = await project_team_member.findOne({
        where: { id: memberId }
      });

      // 프로젝트, 팀 또는 팀원이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !teamInfo || !memberInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 프로젝트, 팀과 팀원이 연관없는 경우 다음을 리턴한다.
      if (
        projectInfo.id !== teamInfo.project_id ||
        projectInfo.id !== memberInfo.project_id ||
        teamInfo.id !== memberInfo.project_team_id
      ) {
        return res.status(403).json({
          message: 'Bad Request! - Project and team are not connected.'
        });
      }

      // 현재 회원이 프로젝트 팀을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== teamInfo.user_id && userInfo.role_id !== 1) {
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
       * [프로젝트 팀원 삭제]
       *
       */

      // 팀원 레코드를 삭제한다.
      await project_team_member.destroy({ where: { id: memberId } });

      // 삭제된 팀원 아이디를 반환한다.
      res.status(200).json({ id: memberId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
