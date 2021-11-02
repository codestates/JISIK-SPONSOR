'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_teams', [
      {
        user_id: 1,
        project_id: 1,
        team_name: '지식 연구소',
        team_description: '20년 동안 과학에 대해 꾸준히 연구해오고 있습니다.'
      },
      {
        user_id: 1,
        project_id: 2,
        team_name: '자연 연구소',
        team_description: '20년 동안 자연에 대해 꾸준히 연구해오고 있습니다.'
      },
      {
        user_id: 3,
        project_id: 3,
        team_name: '심리 연구소',
        team_description: '20년 동안 심리에 대해 꾸준히 연구해오고 있습니다.'
      },
      {
        user_id: 4,
        project_id: 4,
        team_name: '이것저것 연구소',
        team_description: '20년 동안 이것저것 대해 꾸준히 연구해오고 있습니다.'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_teams', null, {});
  }
};
