'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_sponsors', [
      {
        user_id: 1,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 2,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 1,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 2,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 3,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 4,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_sponsors', null, {});
  }
};
