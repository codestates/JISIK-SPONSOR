'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_investors', [{}]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_investors', null, {});
  }
};
