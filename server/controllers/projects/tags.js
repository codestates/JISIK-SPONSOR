const { project, tag, project_tag } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

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
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      /**
       *
       * [특정 프로젝트의 모든 태그 조회]
       *
       */

      let tags = await project_tag.findAll({
        where: { project_id: projectId },
        attributes: ['id'],
        include: [
          {
            model: tag, // tags 테이블 조인
            attributes: ['name']
          }
        ],
        raw: true
      });

      tags = tags.map((el) => {
        return { id: el.id, name: el['tag.name'] };
      });

      // 모든 프로젝트의 태그를 반환한다.
      res.status(200).json({ tags });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
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
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== 'draft') {
        return res
          .status(403)
          .json({ message: 'This project status is not "draft" !' });
      }

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { tagName } = req.body;
      if (!tagName) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      /**
       *
       * [신규 태그 및 관계 생성]
       *
       */

      // 태그의 특수문자를 제거한다.
      const newTagName = tagName.replace(
        /[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g,
        ' '
      );

      // 기존에 사용된적이 있는지 확인한다. (사용된 적이 없다면 새로 생성한다.)
      const tagInfo = await tag.findOrCreate({ where: { name: newTagName } });

      // 새로운 태그 관계를 생성한다.
      const newProjectTag = await project_tag.create({
        tag_id: tagInfo[0].id,
        project_id: projectId
      });

      // 새로 생성한 태그 관계의 아이디를 반환한다.
      res.status(201).json({ id: newProjectTag.id });
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
      const { projectId, projectTagId } = req.params;
      if (isNaN(projectId) || isNaN(projectTagId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const projectTagInfo = await project_tag.findOne({
        where: { id: projectTagId }
      });

      // 프로젝트 또는 태그 관계가 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !projectTagInfo) {
        return res.status(404).json({ message: 'Not Found!!!' });
      }

      // 프로젝트와 태그 관계가 연관없는 경우 다음을 리턴한다.
      if (projectInfo.id !== projectTagInfo.project_id) {
        return res.status(403).json({
          message: 'Bad Request! - Project and Tag are not connected.'
        });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== 'draft') {
        return res
          .status(403)
          .json({ message: 'This project status is not "draft" !' });
      }

      /**
       *
       * [프로젝트 태그 관계 삭제]
       *
       */

      // 태그 관계 레코드를 삭제한다.
      await project_tag.destroy({ where: { id: projectTagId } });

      // 삭제된 계획 항목 아이디를 반환한다.
      res.status(200).json({ id: projectTagId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
