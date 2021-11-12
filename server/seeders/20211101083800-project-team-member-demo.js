'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_team_members', [
      {
        project_id: 2,
        project_team_id: 2,
        name: '박철룡',
        bio: ''
      },
      {
        project_id: 2,
        project_team_id: 2,
        name: '김준성',
        bio: ''
      },
      {
        project_id: 2,
        project_team_id: 2,
        name: '이마리아',
        bio: ''
      },
      {
        project_id: 4,
        project_team_id: 4,
        name: '박진철',
        bio: ''
      },
      {
        project_id: 4,
        project_team_id: 4,
        name: '홍순오',
        bio: ''
      },
      {
        project_id: 5,
        project_team_id: 5,
        name: '하종찬',
        bio: ''
      },
      {
        project_id: 5,
        project_team_id: 5,
        name: '김남철',
        bio: ''
      },
      {
        project_id: 5,
        project_team_id: 5,
        name: '백은산',
        bio: ''
      },
      {
        project_id: 8,
        project_team_id: 8,
        name: '신미영',
        bio: ''
      },
      {
        project_id: 8,
        project_team_id: 8,
        name: '강수종',
        bio: ''
      },
      {
        project_id: 8,
        project_team_id: 8,
        name: '정병철',
        bio: ''
      },
      {
        project_id: 19,
        project_team_id: 19,
        name: '최구종',
        bio: ''
      },
      {
        project_id: 19,
        project_team_id: 19,
        name: '강한나',
        bio: ''
      },
      {
        project_id: 20,
        project_team_id: 20,
        name: '강수아',
        bio: ''
      },
      {
        project_id: 20,
        project_team_id: 20,
        name: '최수종',
        bio: ''
      },
      {
        project_id: 20,
        project_team_id: 20,
        name: '김민철',
        bio: ''
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_team_members', null, {});
  }
};
