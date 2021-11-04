const { user, project, comment } = require('../../models');
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

      // 모든 댓글을 조회한다.
      const comments = await comment.findAll({
        where: { project_id: projectId },
        attributes: ['id', 'project_id', 'content', 'created_at', 'updated_at'],
        include: [
          {
            model: user, // users 테이블 조인
            attributes: ['nickname', 'profile_url']
          }
        ]
      });

      // 모든 댓글을 반환한다.
      res.status(200).json({ comments });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  post: async (req, res) => {
    try {
      /**
       *
       * 유효성 검사
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

      // 현재 프로젝트가 "작성중" 이면 다음을 리턴한다. (댓글 작성 불가)
      if (projectInfo.status === 'draft') {
        return res
          .status(403)
          .json({ message: 'This project status is not "draft" !' });
      }

      // 요청이 잘못된 경우 다음을 리턴한다.
      const { content } = req.body;
      if (!content) return res.status(400).json({ message: 'Bad Request!' });

      /**
       *
       * [신규 댓글 생성]
       *
       */

      // 새로운 댓글을 생성한다.
      const newComment = await comment.create({
        user_id: userInfo.id,
        project_id: projectInfo.id,
        content
      });

      // 프로젝트에 댓글 수를 + 1 한다.
      await projectInfo.update(
        { comments: projectInfo.comments + 1 },
        { where: { id: projectId } }
      );

      // 새로 생성한 댓글의 아이디를 반환한다.
      res.status(201).json({ id: newComment.id });
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
      const { projectId, commentId } = req.params;
      if (isNaN(projectId) || isNaN(commentId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const commentInfo = await comment.findOne({ where: { id: commentId } });

      // 프로젝트나 댓글이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !commentInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 회윈이 댓글을 수정할 권한이 없는 경우 다음을 리턴한다.
      if (userInfo.id !== commentInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 요청이 잘못된 경우
      const { content } = req.body;
      if (!content) return res.status(400).json({ message: 'Bad Request!' });

      /**
       *
       * [댓글 수정]
       *
       */

      // 댓글 내용을 업데이트한다.
      await comment.update({ content }, { where: { id: commentId } });

      // 업데이트한 댓글 정보를 조회한다.
      const newCommentInfo = await comment.findOne({
        where: { id: commentId },
        attributes: ['id', 'project_id', 'content', 'created_at', 'updated_at'],
        include: [
          {
            model: user, // users 테이블 조인
            attributes: ['nickname', 'profile_url']
          }
        ]
      });

      // 업데이트한 댓글을 반환한다.
      res.status(200).json({ comments: newCommentInfo });
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

      const { projectId, commentId } = req.params;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(projectId) || isNaN(commentId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const commentInfo = await comment.findOne({ where: { id: commentId } });

      // 프로젝트나 댓글이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !commentInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 회원이 댓글을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== commentInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      /**
       *
       * [댓글 삭제]
       *
       */

      // 댓글을 삭제한다.
      await comment.destroy({ where: { id: commentId } });

      // 프로젝트에 댓글 수를 - 1 한다.
      await projectInfo.update(
        { comments: projectInfo.comments - 1 },
        { where: { id: projectId } }
      );

      // 삭제된 댓글 아이디를 반환한다.
      res.status(200).json({ id: commentInfo.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
