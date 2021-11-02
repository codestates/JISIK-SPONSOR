'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notifications', [{}]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notifications', null, {});
  }
};
