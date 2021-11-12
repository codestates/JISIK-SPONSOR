const bcrypt = require('bcrypt');
const { user } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  checkAccessToken
} = require('../../middlewares/tokenFunction');

module.exports = {
  post: async (req, res) => {
    try {
      /**
       *
       * [에러 처리]
       *
       */

      // 이미 로그인 되어있는 경우는 다음을 리턴한다.
      // const { accessToken } = req.cookies;
      // const accessTokenData = checkAccessToken(accessToken);
      // if (accessTokenData) {
      //   return res.status(400).json({ message: 'Already logged in!' });
      // }

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 등록된 회원이 존재하는 경우는 다음을 리턴한다.
      const userInfo = await user.findOne({ where: { email } });
      if (!userInfo) {
        return res.status(403).json({ message: 'Non-existent account!' });
      }

      // 소셜로그인일 경우
      if (userInfo.signup_method !== '일반') {
        return res.status(403).json({ message: 'Non-existent account!' });
      }

      // 등록된 회원이 존재한다면 비밀번호를 확인한다.
      const match = await bcrypt.compare(
        password,
        userInfo.dataValues.password
      );

      // 비밀번호가 잘못된 경우 다음을 리턴한다.
      if (!match) {
        return res.status(403).json({ message: 'Passwords do not match!' });
      }

      // 등록된 회원이 이메일 인증을 완료하지 않은 경우는 다음을 리턴한다.
      if (userInfo.dataValues.email_verified !== true) {
        return res.status(403).json({ message: 'Email is not verified!' });
      }

      /**
       *
       * [로그인 성공]
       *
       */

      // 회원의 비밀번호와 역할, 이메일 인증 코드를 삭제한다.
      delete userInfo.dataValues.password;
      // delete userInfo.dataValues.role_id;
      delete userInfo.dataValues.key_for_verify;

      // 토큰을 발급하고 쿠키에 저장한다.
      const newAccessToken = generateAccessToken(userInfo.dataValues);
      sendAccessToken(res, newAccessToken);

      // 회원 정보를 반환한다.
      res.status(200).json({ userInfo });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
    }
  }
};
