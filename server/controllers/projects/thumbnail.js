const { project } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  validation: async (req, res, next) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      let projectId = req.params.projectId;
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      projectId = Number(projectId);
      const projectInfo = await project.findOne({ where: { id: projectId } });

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 유저가 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  upload: async (req, res) => {
    try {
      // profile URL과 projectId를 추출한다.
      const imageURL = req.file.key;
      const { projectId } = req.params;

      // 프로젝트의 프로필 정보를 업데이트한다.
      await project.update(
        { thumbnail_url: '/' + imageURL },
        { where: { id: projectId } }
      );
      return res.status(200).json({ thumbnail_url: '/' + imageURL });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
