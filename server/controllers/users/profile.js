const { user } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  validation: async (req, res, next) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // next로 userId 전달
      req.userId = userInfo.dataValues.id;
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  upload: async (req, res) => {
    try {
      // profile URL과 userId를 추출한다.
      const imageURL = req.file.key;
      const userId = req.userId;

      // 회원 정보를 업데이트한다.
      await user.update(
        { profile_url: '/' + imageURL },
        { where: { id: userId } }
      );

      // 업로드한 회원 프로필 이미지 URL을 반환한다.
      return res.status(201).json({ profile_url: '/' + imageURL });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
