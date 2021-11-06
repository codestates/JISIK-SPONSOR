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
      // 이미지 파일이 존재하지 않는 경우 다음을 리턴한다.
      if (!req.file) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

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
