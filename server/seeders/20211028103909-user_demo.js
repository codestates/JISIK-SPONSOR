'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Password encryption
    const hash = await bcrypt.hash(process.env.ADMIN_UESRS_PASS, 12);

    return queryInterface.bulkInsert('users', [
      {
        name: '지식스폰서',
        email: process.env.ADMIN_USER_EMAIL,
        password: hash,
        nickname: '관리자',
        role_id: 1,
        signup_method: '일반',
        email_verified: true
      },
      {
        name: '관리자 데모',
        email: 'admin_demo@gmail.com',
        password: hash,
        nickname: '관리자 데모',
        role_id: 2,
        signup_method: '일반',
        email_verified: true
      },
      {
        name: '김코딩',
        email: 'kimcoding@gmail.com',
        password: hash,
        nickname: '코난',
        role_id: 3,
        signup_method: '일반',
        email_verified: true
      },
      {
        name: '박해커',
        email: 'parkhacker@gmail.com',
        password: hash,
        nickname: '해커',
        role_id: 3,
        signup_method: '일반',
        email_verified: true
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
