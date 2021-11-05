const { project, wish } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  get: async (req, res) => {
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

    const wishInfo = await wish.findOne({
      where: { user_id: userInfo.id, project_id: projectInfo.id }
    });

    // 찜하기가 존재하면 true를 존재하지 않는 경우 false를 리턴한다.
    if (!wishInfo) return res.status(200).json({ state: false });
    res.status(200).json({ state: true });
  },
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
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      const wishInfo = await wish.findOne({
        where: { user_id: userInfo.id, project_id: projectInfo.id }
      });

      // 현재 프로젝트가 "작성중"이면 다음을 리턴한다.
      if (projectInfo.status === 'draft') {
        return res
          .status(403)
          .json({ message: 'This project status is "draft" !' });
      }

      // 이미 해당 프로젝트에 좋아요를 누른 경우 다음을 리턴한다.
      if (wishInfo) {
        return res.status(400).json({ message: 'Already wished it!' });
      }

      /**
       *
       * [찜하기 생성]
       *
       */

      // wishs 테이블에 레코드 생성한다.
      const newWishInfo = await wish.create({
        user_id: userInfo.id,
        project_id: projectInfo.id
      });

      // 프로젝트에 찜하기 수를 + 1 한다.
      await project.update(
        { wishes: projectInfo.wishes + 1 },
        { where: { id: projectId } }
      );

      // 생성된 찜하기 아이디를 리턴한다.
      return res.status(201).json({ id: newWishInfo.id });
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
      const { projectId } = req.params;
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      const projectInfo = await project.findOne({ where: { id: projectId } });
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      const wishInfo = await wish.findOne({
        where: { user_id: userInfo.id, project_id: projectInfo.id }
      });

      // 해당 프로젝트에 찜하기를 누르지 않은 경우 다음을 리턴한다.
      if (!wishInfo) {
        return res.status(400).json({ message: "Didn't wish it!" });
      }

      // wishs 테이블에 레코드 삭제한다.
      await wish.destroy({ where: { id: wishInfo.id } });

      // 프로젝트에 찜하기 수를 - 1 한다.
      await project.update(
        { wishes: projectInfo.wishes - 1 },
        { where: { id: projectId } }
      );

      // 삭제한 찜하기 아이디를 리턴한다.
      res.status(200).json({ id: wishInfo.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
