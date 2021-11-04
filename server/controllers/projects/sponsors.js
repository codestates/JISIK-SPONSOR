const { user, project, project_sponsor } = require('../../models');
module.exports = {
  get: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { projectId } = req.params;
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      const projectInfo = await project.findOne({ where: { id: projectId } });
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      /**
       *
       * [특정 프로젝트의 후원자 목록 조회]
       *
       */

      const sponsors = await project_sponsor.findAndCountAll({
        where: { project_id: projectId },
        include: [
          {
            model: user, // users 테이블 조인
            attributes: ['name', 'nickname', 'bio', 'profile_url']
          }
        ]
      });

      return res.status(200).json({ sponsors });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
