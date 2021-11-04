'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_sponsors', [
      {
        id: 1,
        user_id: 3,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공',
        created_at: '2021-11-02T20:33:53.000Z',
        updated_at: '2021-11-02T20:33:53.000Z'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_sponsors', null, {});
  }
};
