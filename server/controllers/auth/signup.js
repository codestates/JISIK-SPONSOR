const bcrypt = require('bcrypt');
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

    const { name, email, password } = req.body;

    // 요청이 잘못된 경우
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Bad Request!' });
    }

    // 요청받은 이메일 정보로 등록된 이미 회원이 존재하는지 확인한다.
    const userInfo = await user.findOne({ where: { email } });
    if (userInfo) {
      return res
        .status(409)
        .json({ message: 'This email information cannot be registered' });
    }

    // 등록 가능한 정보라면 비밀번호를 암호화하고 새로운 회원을 생성한다.
    const hash = await bcrypt.hash(password, 12);
    const newUser = await user.create({
      name,
      email,
      nickname: 'user' + Date.now(), // 닉네임 초기화
      password: hash,
      signup_method: '일반'
    });

    // 새로 생성한 회원의 아이디를 반환한다.
    res.status(201).json({ id: newUser.dataValues.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
};
