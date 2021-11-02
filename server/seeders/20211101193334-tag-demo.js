'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tags', [
      { name: '지구' },
      { name: '심해' },
      { name: '관계' },
      { name: '인간' }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tags', null, {});
  }
};
