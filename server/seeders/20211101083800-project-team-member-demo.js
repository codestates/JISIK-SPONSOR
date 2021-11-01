'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_team_members', [
      {
        project_id: 1,
        project_team_id: 1,
        name: '박해커',
        bio: '지식 연구소 연구원'
      },
      {
        project_id: 1,
        project_team_id: 1,
        name: '나박사',
        bio: '지식 연구소 연구원'
      },
      {
        project_id: 2,
        project_team_id: 2,
        name: '김자연',
        bio: '자연 연구소 연구원'
      },
      {
        project_id: 3,
        project_team_id: 2,
        name: '박심리',
        bio: '심리 연구소 연구원'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_team_members', null, {});
  }
};
