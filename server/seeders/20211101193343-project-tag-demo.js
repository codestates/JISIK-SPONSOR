'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_tags', [
      {
        tag_id: 1,
        project_id: 1
      },
      {
        tag_id: 2,
        project_id: 1
      },
      {
        tag_id: 3,
        project_id: 2
      },
      {
        tag_id: 4,
        project_id: 2
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_tags', null, {});
  }
};
