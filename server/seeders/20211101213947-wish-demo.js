'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('wishes', [
      {
        user_id: 1,
        project_id: 1
      },
      {
        user_id: 1,
        project_id: 2
      },
      {
        user_id: 1,
        project_id: 3
      },
      {
        user_id: 2,
        project_id: 3
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('wishes', null, {});
  }
};
