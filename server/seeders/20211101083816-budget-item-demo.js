'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Password encryption
    const hash = await bcrypt.hash(process.env.ADMIN_UESRS_PASS, 12);

    return queryInterface.bulkInsert('budget_items', [
      {
        project_id: 1,
        title: '연구비',
        amount: 2000000
      },
      {
        project_id: 1,
        title: '실험비',
        amount: 1000000
      },
      {
        project_id: 2,
        title: '연구비',
        amount: 2000000
      },
      {
        project_id: 2,
        title: '실험비',
        amount: 1000000
      },
      {
        project_id: 3,
        title: '실험비',
        amount: 1000000
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('budget_items', null, {});
  }
};
