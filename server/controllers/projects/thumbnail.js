const { project } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  validation: async (req, res, next) => {
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
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      // 현재 유저가 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (projectInfo.user_id !== userInfo.id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다. (프로필 변경 불가능)
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      // 다음 작업(이미지 업로드)을 진행한다.
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  upload: async (req, res) => {
    try {
      /**
       *
       * [프로젝트 썸네일 정보 업로드]
       *
       */

      // profile URL과 projectId를 추출한다.
      const imageURL = req.file.key;
      const { projectId } = req.params;

      // 프로젝트의 프로필 정보를 업데이트한다.
      await project.update(
        { thumbnail_url: '/' + imageURL },
        { where: { id: projectId } }
      );

      // 업로드한 프로젝트 썸네일 이미지 URL 을 리턴한다.
      return res.status(201).json({ thumbnail_url: '/' + imageURL });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
