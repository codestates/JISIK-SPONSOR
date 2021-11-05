const { project } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');
const {
  projectSubmit,
  projectApprove,
  projectReject
} = require('../../middlewares/email/email-content');
const emailSend = require('../../middlewares/email/email-send');

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

      /**
       *
       * [요청에 따른 처리]
       *
       */

      const { status } = req.body;

      if (
        status !== 'submit' && // 제출하기
        status !== 'approve' && // 승인하기
        status !== 'reject' // 거부하기
      ) {
        // 요청이 잘못된 경우는 다음을 리턴한다.
        return res.status(400).json({ message: 'Bad Request!' });
      }

      let message;
      let emailContent;

      switch (status) {
        // [제출하기]
        case 'submit':
          // 작성중인 상태가 아니면 다음을 리턴한다.
          if (projectInfo.status !== 'draft') {
            return res.status(403).json({
              message: 'This project status is not "draft" !'
            });
          }
          // 프로젝트 상태를 변경한다.
          await project.update(
            { status: 'submitted' },
            { where: { id: projectId } }
          );
          message = 'submitted';
          emailContent = projectSubmit(
            userInfo.email,
            userInfo.name,
            projectInfo
          );

        // [승인하기]
        case 'approve':
          // 관리자가 아닌 경우 다음을 리턴한다.
          if (userInfo.role_id !== 1) {
            return res.status(403).json({ message: 'Not authorized!' });
          }
          // 제출된 상태가 아니면 다음을 리턴한다.
          if (projectInfo.status !== 'submitted') {
            return res.status(403).json({
              message: 'This project status is not "submitted" !'
            });
          }
          // 프로젝트 상태를 변경한다.
          await project.update(
            { status: 'approved' },
            { where: { id: projectId } }
          );
          message = 'approved';
          emailContent = projectApprove(
            userInfo.email,
            userInfo.name,
            projectInfo
          );

        // [거부하기]
        case 'reject':
          // 관리자가 아닌 경우 다음을 리턴한다.
          if (userInfo.role_id !== 1) {
            return res.status(403).json({ message: 'Not authorized!' });
          }
          // 제출된 상태가 아니면 다음을 리턴한다.
          if (projectInfo.status !== 'submitted') {
            return res.status(403).json({
              message: 'This project status is not "submitted" !'
            });
          }
          // 상태 변경 안함
          message = 'draft';
          emailContent = projectReject(
            userInfo.email,
            userInfo.name,
            projectInfo
          );
      }

      // 이메일 전송
      emailSend(emailContent);

      // 변경된 상태를 리턴한다.
      return res.status(200).json({ status: message });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
