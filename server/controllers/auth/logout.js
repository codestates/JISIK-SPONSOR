const userAuthen = require('../authentication/userAuthen');

module.exports = async (req, res) => {
  try {
    // 로그인 인증 검사
    const userInfo = await userAuthen(req, res);
    // 쿠키 삭제
    res.cookie('accessToken', null, { maxAge: 0 });
    res.status(200).json({ message: 'ok' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
};
