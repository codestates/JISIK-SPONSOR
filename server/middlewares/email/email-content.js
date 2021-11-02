require('dotenv').config();
const path = require('path');
const pug = require('pug');

module.exports = {
  emailVerify: (email, name, url) => {
    const title = '회원가입 이메일 인증을 진행해주세요.';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/user-email-verifi.pug'
    );

    const options = { title, name, url, siteURL: process.env.CLIENT_ORIGIN };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님! 회원가입 이메일 인증을 진행해주세요.`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  newAccount: (email, name) => {
    const title = '지식스폰서 회원가입을 환영합니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/user-new-account.pug'
    );

    const options = { title, name, siteURL: process.env.CLIENT_ORIGIN };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님! 지식스폰서 회원가입을 환영합니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  successSpon: (email, name, url, order) => {
    const title = '프로젝트를 후원해주셔서 감사합니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/success-spon.pug'
    );

    const options = {
      title,
      name,
      url,
      order,
      siteURL: process.env.CLIENT_ORIGIN
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님! 프로젝트를 후원해주셔서 감사합니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  }
};
