'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        user_id: 2,
        project_id: 1,
        content: '정말 멋진 연구 입니다!!'
      },
      {
        user_id: 3,
        project_id: 1,
        content: '기대됩니다~!'
      },
      {
        user_id: 2,
        project_id: 2,
        content: '궁금합니다!!'
      },
      {
        user_id: 3,
        project_id: 3,
        content: '연구 결과 기다리겠습니다!!'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
