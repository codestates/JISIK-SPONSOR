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

    const options = { title, name, url, resourceURL: process.env.RESOURCE_URL };
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

    const options = { title, name, resourceURL: process.env.RESOURCE_URL };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님! 지식스폰서 회원가입을 환영합니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  withdrawal: (email, name) => {
    const title = '지식스폰서에 회원탈퇴 되었습니다.';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/user-withdrawal.pug'
    );

    const options = { title, name, resourceURL: process.env.RESOURCE_URL };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님! 지식스폰서에 회원탈퇴 되었습니다.`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  sponsorSuccess: (email, name, url, order) => {
    const title = '프로젝트를 후원해주셔서 감사합니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/sponsorship-success.pug'
    );

    const options = {
      title,
      name,
      url,
      order,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님! 프로젝트를 후원해주셔서 감사합니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  projectSubmit: (email, name, project) => {
    const title = '프로젝트를 제출하셨습니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-submit.pug'
    );

    const options = {
      title,
      name,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님의 프로젝트를 제출하셨습니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  projectApprove: (email, name, project) => {
    const title = '제출하신 프로젝트가 승인되었습니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-approve.pug'
    );

    const options = {
      title,
      name,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님의 프로젝트가 승인되었습니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  projectReject: (email, name, project) => {
    const title = '제출하신 프로젝트가 승인 거부되었습니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-reject.pug'
    );

    const options = {
      title,
      name,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님의 프로젝트가 승인 거부되었습니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  fundingStart: (email, name, project) => {
    // 프로젝트가 시작된 모든 이에게 한 번씩 메일 전송
    const title = '프로젝트 펀딩이 시작되었습니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-funding-start.pug'
    );

    const options = {
      title,
      name,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님의 프로젝트 펀딩이 시작되었습니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  fundingSuccess: (email, name, project) => {
    // 프로젝트 성공한 모든 이에게 한 번씩 메일 전송
    const title = '프로젝트가 펀딩에 성공하였습니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-funding-success.pug'
    );

    const options = {
      title,
      name,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님의 프로젝트가 펀딩에 성공하였습니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  fundingCanceled: (email, name, project) => {
    // 프로젝트 실패한 모든 이에게 한 번씩 메일 전송
    const title = '프로젝트가 펀딩에 실패하였습니다.';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-funding-canceled.pug'
    );

    const options = {
      title,
      name,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: email,
      subject: `${name}님의 프로젝트가 펀딩에 실패하였습니다.`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  fundingSuccessToSponsor: (emails, project) => {
    // 프로젝트에 후원한 모든 이에게 한번에 메일 전송
    const title = '후원하신 프로젝트가 펀딩에 성공하였습니다!';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-funding-success-to-sponsor.pug'
    );

    const options = {
      title,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: emails,
      subject: `스폰서님께서 후원하신 프로젝트가 펀딩에 성공하였습니다!`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  fundingCanceledToSponsor: (emails, project) => {
    // 프로젝트에 후원한 모든 이에게 한번에 메일 전송
    const title = '후원하신 프로젝트가 펀딩에 실패하였습니다.';
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/project-funding-canceled-to-sponsor.pug'
    );

    const options = {
      title,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: emails,
      subject: `스폰서님께서 후원하신 프로젝트가 펀딩에 실패하였습니다.`,
      html: compiledFunction(options)
    };
    return emailContent;
  },
  adminApprovalRequest: (emails, name, project) => {
    // 모든 관리자에게 한번에 메일 전송
    const title = `${name}님의 프로젝트 승인 요청이 있습니다.`;
    const fileURL = path.join(
      __dirname,
      '../../templates/emails/admin-approval-request.pug'
    );

    const options = {
      title,
      name,
      project,
      resourceURL: process.env.RESOURCE_URL
    };
    const compiledFunction = pug.compileFile(fileURL);

    const emailContent = {
      from: '"지식스폰서" <staff@jisiksponsor.com>',
      to: emails,
      subject: `${name}님의 프로젝트 승인 요청이 있습니다.`,
      html: compiledFunction(options)
    };
    return emailContent;
  }
};
