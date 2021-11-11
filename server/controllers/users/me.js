const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { user, wish } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');
const { withdrawal } = require('../../middlewares/email/email-content');
const emailSend = require('../../middlewares/email/email-send');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 회원의 비밀번호와 역할을 삭제한다.
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.role_id;

      // 회원 정보를 반환한다.
      res.status(200).json({ userInfo });
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

      const { name, nickname, bio, mobile, password } = req.body;

      if (nickname) {
        // 나를 제외한 회원 중에서 찾는다.
        const findUserInfo = await user.findOne({
          where: {
            nickname,
            [Op.not]: [{ id: userInfo.id }]
          }
        });

        // 이미 존재하는 닉네임이면 요청을 거절한다.
        if (findUserInfo) {
          return res.status(409).json({
            message: 'This nickname information cannot be registered'
          });
        }
      }

      /**
       *
       * [회원 정보 수정]
       *
       */

      // 요청 바디에 password 가 있다면 새로운 비밀번호를 해싱한다.
      let hash;
      if (password) hash = await bcrypt.hash(password, 12);

      // 회원의 정보를 업데이트한다.
      await user.update(
        {
          name: name ? name : userInfo.name,
          nickname: nickname
            ? nickname
            : userInfo.nickname
            ? userInfo.nickname
            : null,
          bio: bio ? bio : userInfo.bio ? userInfo.bio : null,
          mobile: mobile ? mobile : userInfo.mobile ? userInfo.mobile : null,
          password: password ? hash : userInfo.password
        },
        { where: { id: userInfo.id } }
      );

      // 업데이트한 회원의 정보를 조회한다.
      const newUserInfo = await user.findOne({ where: { id: userInfo.id } });

      // 회원의 비밀번호와 역할을 삭제한다.
      delete newUserInfo.dataValues.password;
      delete newUserInfo.dataValues.role_id;

      // 업데이트한 회원의 정보를 반환한다.
      res.status(200).json({ userInfo: newUserInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 회원이 찜한 목록을 삭제한다.
      await wish.destroy({ where: { user_id: userInfo.id } });

      // 계정을 비활성화 한다.
      await user.update(
        {
          name: '알수없음',
          email: userInfo.email + '-withdrawal-' + userInfo.id,
          nickname: 'user' + userInfo.id,
          password: null,
          mobile: null,
          bio: null,
          profile_url: null,
          email_verified: false,
          key_for_verify: null
        },
        { where: { id: userInfo.id } }
      );

      // 쿠키를 삭제한다.
      res.cookie('accessToken', null, { maxAge: 0 });

      // 이메일 전송
      const emailContent = withdrawal(userInfo.email, userInfo.name);
      emailSend(emailContent);

      // 삭제한 회원 아이디를 리턴한다.
      res.status(200).json({ id: userInfo.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
