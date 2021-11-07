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

      if (status === 'submit') {
        // 이미 제출한 상태면 다음을 리턴한다.
        if (projectInfo.status === 'submitted') {
          return res.status(403).json({
            message: 'You have already submitted it!'
          });
        }
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
        // 이메일 전송
        emailContent = projectSubmit(
          userInfo.email,
          userInfo.name,
          projectInfo
        );
        message = 'submitted';
      }
      if (status === 'approve') {
        // 관리자가 아닌 경우 다음을 리턴한다.
        if (userInfo.role_id !== 1) {
          return res.status(403).json({ message: 'Not authorized!' });
        }
        // 이미 승인된 상태면 다음을 리턴한다.
        if (projectInfo.status === 'approved') {
          return res.status(403).json({
            message: 'You have already approved it!'
          });
        }
        // 제출된 상태가 아니면 다음을 리턴한다.
        if (projectInfo.status !== 'submitted') {
          return res.status(403).json({
            message: 'This project status is not "submitted" !'
          });
        }
        // 프로젝트 상태를 변경한다.
        const toDate = new Date();
        const startDate = new Date(
          toDate.getFullYear(),
          toDate.getMonth(),
          toDate.getDate() + 1,
          0
        );
        const endDate = new Date(
          toDate.getFullYear(),
          toDate.getMonth(),
          startDate.getDate() + 1 + projectInfo.term,
          0
        );

        await project.update(
          {
            status: 'approved',
            start_date: startDate,
            end_date: endDate
          },
          { where: { id: projectId } }
        );
        // 이메일 전송
        emailContent = projectApprove(
          userInfo.email,
          userInfo.name,
          projectInfo
        );
        message = 'approved';
      }
      if (status === 'reject') {
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
        // 프로젝트 상태를 다식 '작성중'으로 변경한다.
        await project.update({ status: 'draft' }, { where: { id: projectId } });
        // 이메일 전송
        emailContent = projectReject(
          userInfo.email,
          userInfo.name,
          projectInfo
        );
        message = 'draft';
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
