'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_roles', [
      { name: '관리자' },
      { name: '관리자 데모' },
      { name: '일반회원' }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_roles', null, {});
  }
};
