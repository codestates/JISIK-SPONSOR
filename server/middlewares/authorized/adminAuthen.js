const { checkAccessToken } = require('../tokenFunction');
const { user } = require('../../models');

module.exports = async (req, res) => {
  try {
    // 쿠키에 에세스 토큰이 있는지 확인한다.
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return res
        .status(401)
        .json({ message: 'Invalid access token! not provided' });
    }

    // 에세스 토큰이 유효한지 확인한다.
    const accessTokenData = checkAccessToken(accessToken);
    if (!accessTokenData) {
      return res.status(401).json({ message: 'Invalid access token!' });
    }

    // 에세스 토큰 정보가 유효한지 확인한다.
    const { email } = accessTokenData;
    const userInfo = await user.findOne({ where: { email } });
    if (!userInfo) {
      return res.status(403).json({ message: 'Not authorized!' });
    }

    // 해당 유저가 관리자인지 확인한다.
    if (userInfo.dataValues.role_id !== 1) {
      return res.status(403).json({ message: 'Not authorized!' });
    }

    // 에세스 유효하거나 권한이 있는 경우 사용자 정보를 리턴한다.
    return userInfo;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error!' });
  }
};
