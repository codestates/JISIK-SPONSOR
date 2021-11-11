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
      // const { accessToken } = req.cookies;
      // const accessTokenData = checkAccessToken(accessToken);

      // if (accessTokenData) {
      //   return res.status(400).json({ message: 'Already logged in!' });
      // }

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { authorizationCode } = req.body;
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@', authorizationCode);
      if (!authorizationCode) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      /**
       *
       * [소셜로그인 처리]
       *
       */

      const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
      const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET;
      const redirectUri = process.env.CLIENT_ORIGIN + '/callback';
      const grantType = 'authorization_code';

      // authorizationCode로 kakao token 을 받아온다.
      const response = await axios({
        method: 'POST',
        url: `https://kauth.kakao.com/oauth/token?code=${authorizationCode}&client_id=${KAKAO_CLIENT_ID}&client_secret=${KAKAO_CLIENT_SECRET}&redirect_uri=${redirectUri}&grant_type=${grantType}`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      });
      const { access_token } = response.data;

      // kakao token으로 데이터를 받아온다.
      const kakaoUserInfo = await axios({
        method: 'GET',
        url: 'https://kapi.kakao.com/v2/user/me',
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });

      // 데이터베이스에 일치하는 데이터가 있는지 확인한다.
      const { email, profile } = kakaoUserInfo.data.kakao_account;
      const userInfo = await user.findOne({ where: { email } });

      /**
       *
       * [회원이 존재하지 않는 경우 데이터 추가 후 로그인 처리]
       *
       */

      if (!userInfo) {
        const newUserInfo = await user.create({
          name: profile.nickname,
          email,
          nickname: profile.nickname,
          profile_url: profile.profile_image_url,
          signup_method: '카카오',
          email_verified: true
        });

        // 회원의 비밀번호와 이메일 인증 코드를 삭제한다.
        delete newUserInfo.dataValues.password;
        delete newUserInfo.dataValues.key_for_verify;

        // 토큰을 발급하고 쿠키에 저장한다.
        const newAccessToken = generateAccessToken(newUserInfo.dataValues);
        sendAccessToken(res, newAccessToken);

        // 이메일 전송
        const emailContent = newAccount(email, profile.nickname);
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
      return res.status(200).json({ userInfo, data: kakaoUserInfo.data });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: 'Client error' });
    }
  }
};
