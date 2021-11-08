const { user } = require('../../models');
const { newAccount } = require('../../middlewares/email/email-content');
const emailSend = require('../../middlewares/email/email-send');

module.exports = {
  email: async (req, res) => {
    try {
      const { key } = req.query;

      // 쿼리로 들어온 key를 가진 회원이 존재하지 않는 경우는 다음을 리턴한다.
      const findUser = await user.findOne({ where: { key_for_verify: key } });
      if (!findUser) return res.status(404).json({ message: 'Not Found!' });

      // 이미 인증된 경우
      if (findUser.email_verified === true) {
        return res.status(400).json({ message: '이미 인증되었습니다.' });
      }

      // 인증코드의 유효기간 확인: 3분
      const currentTime = new Date();
      const signupDate = new Date(findUser.updated_at);
      const validTime = new Date(
        signupDate.getFullYear(),
        signupDate.getMonth(),
        signupDate.getDate(),
        signupDate.getHours(),
        signupDate.getMinutes() + 3, // 3분 추가
        signupDate.getSeconds()
      );

      if (validTime.getTime() < currentTime.getTime()) {
        return res.status(410).json({ message: '인증 시간이 만료되었습니다.' });
      }

      // 회원 정보를 업데이트 한다. (이메일 인증 확인)
      await user.update(
        { email_verified: true },
        { where: { key_for_verify: key } }
      );

      /**
       *
       * [회원가입 환영 이메일 전송]
       *
       */

      // 이메일 전송
      const emailContent = newAccount(findUser.email, findUser.name);
      emailSend(emailContent);

      // 로그인 페이지로 리디렉션한다. (클라이언트 URL로 변경 필요)
      const url = process.env.SERVER_ORIGIN + '/views/login';
      res.redirect(url);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
