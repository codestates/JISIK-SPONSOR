require('dotenv').config();
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { user } = require('../../models');
const { checkAccessToken } = require('../../middlewares/tokenFunction');

module.exports = async (req, res) => {
  try {
    // [에러 처리]

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

    // [새로운 회원 생성]

    // 회원 이메일 인증 키 생성
    const key_one = crypto.randomBytes(256).toString('hex').substr(100, 5);
    const key_two = crypto.randomBytes(256).toString('base64').substr(50, 5);
    const key_for_verify = key_one + key_two;

    // 등록 가능한 정보라면 비밀번호를 암호화하고 새로운 회원을 생성한다.
    const hash = await bcrypt.hash(password, 12);
    const newUser = await user.create({
      name,
      email,
      nickname: 'user' + Date.now(), // 닉네임 초기화
      password: hash,
      signup_method: '일반',
      key_for_verify
    });

    // [이메일 인증 이메일 전송]

    // 이메일 인증 확인 URL
    const url =
      process.env.SERVER_ORIGIN + '/confirm/email?key=' + key_for_verify;

    const smtpTransport = {
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
      }
    };

    const emailContent = {
      from: '"지식스폰서 👻" <devparkhana@gmail.com>',
      to: email,
      subject: '회원가입 이메일 인증을 진행해주세요.',
      html: `<h1>안녕하세요 ${name}님.<br />이메일 계정을 인증받으시려면 아래 링크를 클릭해주세요. (혹시 잘못 전달되었다면 이 이메일을 무시하셔도 됩니다)</h1><br><a href="${url}">링크를 클릭하여 이메일 인증</a>`
    };

    const emailSend = async (data) => {
      nodemailer.createTransport(smtpTransport).sendMail(data, (err, info) => {
        if (err) console.log(err);
        console.log('email has been sent!', info);
      });
    };

    emailSend(emailContent);

    // 새로 생성한 회원의 아이디를 반환한다.
    res.status(201).json({ id: newUser.dataValues.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
};
