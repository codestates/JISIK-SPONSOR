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
        bio: '나는 지식스폰서의 관리자로서 세상에 꼭 필요한 연구가 많은 지지를 받을 수 있도록 돕습니다.',
        role_id: 1,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/1/1636303118149-people1.png'
      },
      {
        name: '관리자 데모',
        email: 'admin_demo@gmail.com',
        password: hash,
        nickname: '관리자 데모',
        role_id: 2,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/2/1636303211320-people2.png'
      },
      {
        name: '김코딩',
        email: 'kimcoding@gmail.com',
        password: hash,
        nickname: '코난',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/3/1636303251904-people3.png'
      },
      {
        name: '박해커',
        email: 'parkhacker@gmail.com',
        password: hash,
        nickname: '해커',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/4/1636303289604-baksa.png'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
