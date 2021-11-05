'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_sponsors', [
      {
        user_id: 3,
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
