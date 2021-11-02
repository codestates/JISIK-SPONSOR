const { project, project_team } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
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

      /**
       *
       * [프로젝트 팀 정보 수정]
       *
       */

      const { teamName, teamDescription } = req.body;

      // 팀 정보를 업데이트한다.
      await project_team.update(
        {
          team_name: teamName
            ? teamName
            : teamInfo.team_name
            ? teamInfo.team_name
            : null,
          team_description: teamDescription
            ? teamDescription
            : teamInfo.team_description
            ? teamInfo.team_description
            : null
        },
        { where: { id: teamInfo.id } }
      );

      // 업데이트한 팀 정보를 조회한다.
      const newTeamInfo = await project_team.findOne({
        where: { id: teamInfo.id }
      });

      // 업데이트한 팀 정보를 반환한다.
      res.status(200).json({ project_team: newTeamInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
