'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      { name: '인문학' },
      { name: '사회과학' },
      { name: '자연과학' },
      { name: '공학' },
      { name: '의약학' },
      { name: '농수해양학' },
      { name: '예술체육학' },
      { name: '복합학' }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
