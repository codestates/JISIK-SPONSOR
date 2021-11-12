'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        user_id: 6,
        project_id: 1,
        content: '정말 멋진 연구 입니다!!'
      },
      {
        user_id: 7,
        project_id: 1,
        content: '저도 궁금합니다..!'
      },
      {
        user_id: 8,
        project_id: 1,
        content: '결과가 어떻게 나올지... 궁금하네요.'
      },
      {
        user_id: 9,
        project_id: 2,
        content: '돌고래... 연구 기대됩니다..!'
      },
      {
        user_id: 10,
        project_id: 2,
        content: '후원완료 했습니다.!'
      },
      {
        user_id: 11,
        project_id: 3,
        content: '흥미롭습니다...!'
      },
      {
        user_id: 12,
        project_id: 4,
        content: '오 이런게 진정 필요했습니다...!'
      },
      {
        user_id: 13,
        project_id: 4,
        content: '진짜 필요해 보인다... 후원 완료...!'
      },
      {
        user_id: 14,
        project_id: 4,
        content: '후원 완료...입니다!'
      },
      {
        user_id: 15,
        project_id: 4,
        content: '크 멋집니다.'
      },
      {
        user_id: 16,
        project_id: 5,
        content: '궁금했던 이야기 입니다..'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
