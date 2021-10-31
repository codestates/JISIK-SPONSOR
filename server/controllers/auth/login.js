const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { user } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  checkAccessToken
} = require('../tokenFunction');

module.exports = async (req, res) => {
  try {
    // 이미 로그인 되어있는 경우
    const { accessToken } = req.cookies;
    const accessTokenData = checkAccessToken(accessToken);
    if (accessTokenData) {
      return res.status(400).json({ message: 'Already logged in!' });
    }

    const { email, password } = req.body;

    // 요청이 잘못된 경우
    if (!email || !password) {
      return res.status(400).json({ message: 'Bad Request!' });
    }

    // 등록된 회원이 존재하는지 확인한다.
    const userInfo = await user.findOne({ where: { email } });
    if (!userInfo) {
      return res
        .status(403)
        .json({ message: 'Not authorized! non-existent account' });
    }

    // 등록된 회원이 존재한다면 비밀번호를 확인한다.
    const match = await bcrypt.compare(password, userInfo.dataValues.password);
    if (!match) {
      return res
        .status(403)
        .json({ message: 'Not authorized! passwords do not match.' });
    }

    // 회원의 비밀번호와 역할을 삭제한다.
    delete userInfo.dataValues.password;
    delete userInfo.dataValues.role_id;

    // 토큰을 발급하고 쿠키에 저장한다.
    const newAccessToken = generateAccessToken(userInfo.dataValues);
    sendAccessToken(res, newAccessToken);

    // 회원 정보를 반환한다.
    res.status(200).json({ userInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
};
