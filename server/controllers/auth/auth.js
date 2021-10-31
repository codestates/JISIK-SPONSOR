const { checkAccessToken } = require('../../middlewares/tokenFunction');
const { user } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 쿠키에 에세스 토큰이 있는지 확인한다.
      const { accessToken } = req.cookies;
      if (!accessToken) return res.status(200).json({ state: false });

      // 에세스 토큰이 유효한지 확인한다.
      const accessTokenData = checkAccessToken(accessToken);
      if (!accessTokenData) return res.status(200).json({ state: false });

      // 에세스 토큰 정보가 유효한지 확인한다.
      const { email } = accessTokenData;
      const userInfo = await user.findOne({ where: { email } });
      if (!userInfo) return res.status(200).json({ state: false });

      // 에세스 유효하거나 권한이 있는 경우 사용자 정보 같이 리턴한다.
      res.status(200).json({ state: true });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
