require('dotenv').config();
const axios = require('axios');
const { user } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  checkAccessToken
} = require('../../middlewares/tokenFunction');
const { newAccount } = require('../../middlewares/email/email-content');
const emailSend = require('../../middlewares/email/email-send');

module.exports = {
  post: async (req, res) => {
    try {
      /**
       *
       * [에러 처리]
       *
       */

      // 이미 로그인 되어있는 경우는 다음을 리턴한다.
      const { accessToken } = req.cookies;
      const accessTokenData = checkAccessToken(accessToken);

      if (accessTokenData) {
        return res.status(400).json({ message: 'Already logged in!' });
      }

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { authorizationCode } = req.body;
      if (!authorizationCode) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      /**
       *
       * [소셜로그인 처리]
       *
       */

      const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID; // 웹 애플리케이션의 클라이언트 ID
      const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET; // 웹 애플리케이션의 클라이언트 SECRET
      const endPoint = 'https://oauth2.googleapis.com/token'; // 요청 end point
      const redirectUri = 'http://localhost:4000/views/oauth/google'; // 요청했던 클라이언트 URI와 일치해야함
      const grantType = 'authorization_code'; // 부여 유형
      const url = `${endPoint}?code=${authorizationCode}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${redirectUri}&grant_type=${grantType}`;

      // authorizationCode로 google token 받아온다.
      const response = await axios.post(url);
      const { access_token } = response.data;

      // google token으로 데이터 받아온다.
      const googleUserInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v1/userinfo',
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      // 데이터베이스에 일치하는 데이터가 있는지 확인한다.
      const { email, name, given_name, picture } = googleUserInfo.data;
      const userInfo = await user.findOne({ where: { email } });

      /**
       *
       * [회원이 존재하지 않는 경우 데이터 추가 후 로그인 처리]
       *
       */

      if (!userInfo) {
        const newUserInfo = await user.create({
          name,
          email,
          nickname: given_name,
          profile_url: picture,
          signup_method: '구글',
          email_verified: true
        });

        // 회원의 비밀번호와 이메일 인증 코드를 삭제한다.
        delete newUserInfo.dataValues.password;
        delete newUserInfo.dataValues.key_for_verify;

        // 토큰을 발급하고 쿠키에 저장한다.
        const newAccessToken = generateAccessToken(newUserInfo.dataValues);
        sendAccessToken(res, newAccessToken);

        // 이메일 전송
        const emailContent = newAccount(email, name);
        emailSend(emailContent);

        return res.status(201).json({ userInfo: newUserInfo });
      }

      /**
       *
       * [회원이 존재하는 경우 로그인 처리]
       *
       */

      // 회원의 비밀번호와 이메일 인증 코드를 삭제한다.
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.key_for_verify;

      // 토큰을 발급하고 쿠키에 저장한다.
      const newAccessToken = generateAccessToken(userInfo.dataValues);
      sendAccessToken(res, newAccessToken);
      return res.status(200).json({ userInfo });
    } catch (err) {
      return res.status(400).json({ message: err.response.data.error });
    }
  }
};
