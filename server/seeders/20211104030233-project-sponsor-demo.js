'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_sponsors', [
      {
        user_id: 1,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 2,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 1,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 2,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 3,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 4,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 7,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 9,
        project_id: 1,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 15,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 14,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 12,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 11,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 2,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 11,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 15,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 14,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 12,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 3,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 15,
        project_id: 4,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 14,
        project_id: 4,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 4,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 11,
        project_id: 5,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 5,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 5,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 12,
        project_id: 5,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 5,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 22,
        project_id: 6,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 6,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 1,
        project_id: 6,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 5,
        project_id: 19,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 2,
        project_id: 6,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 10,
        project_id: 7,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 7,
        project_id: 7,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 13,
        project_id: 7,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 16,
        project_id: 7,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 4,
        project_id: 7,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 1,
        project_id: 7,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 7,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 4,
        project_id: 8,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 1,
        project_id: 8,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 8,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 10,
        project_id: 9,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 7,
        project_id: 9,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 13,
        project_id: 9,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 16,
        project_id: 9,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 23,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 22,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 21,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 20,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 18,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 17,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 16,
        project_id: 10,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 15,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 14,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 13,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 12,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 11,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 10,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 9,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 11,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 12,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 7,
        project_id: 12,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 12,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 9,
        project_id: 12,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 15,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 14,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 12,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 11,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 13,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 11,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 15,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 14,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 12,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 14,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 15,
        project_id: 15,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 14,
        project_id: 15,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 15,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 11,
        project_id: 16,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 8,
        project_id: 16,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 16,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 12,
        project_id: 16,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 16,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 22,
        project_id: 6,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 6,
        project_id: 6,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 5,
        project_id: 6,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 2,
        project_id: 8,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 10,
        project_id: 17,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 7,
        project_id: 17,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 13,
        project_id: 17,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 16,
        project_id: 17,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 4,
        project_id: 17,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 1,
        project_id: 17,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 17,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 4,
        project_id: 18,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 1,
        project_id: 18,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 24,
        project_id: 18,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 10,
        project_id: 9,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 7,
        project_id: 9,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 13,
        project_id: 19,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 16,
        project_id: 9,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 19,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 20,
        project_id: 19,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 23,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 22,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 21,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 20,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 19,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 18,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 17,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      },
      {
        user_id: 16,
        project_id: 20,
        pledged: '100.00',
        status: '후원성공'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_sponsors', null, {});
  }
};
