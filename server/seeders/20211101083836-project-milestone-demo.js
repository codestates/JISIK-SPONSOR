'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_milestones', [
      {
        project_id: 1,
        title: '기후 변화 자료 조사하기',
        goal_date: '2022-01-20'
      },
      {
        project_id: 1,
        title: '최종 결과 제출하기',
        goal_date: '2022-01-30'
      },
      {
        project_id: 2,
        title: '자료 조사하기',
        goal_date: '2022-01-20'
      },
      {
        project_id: 2,
        title: '최종 결과 제출하기',
        goal_date: '2022-01-30'
      },
      {
        project_id: 3,
        title: '자료 조사하기',
        goal_date: '2022-01-20'
      },
      {
        project_id: 3,
        title: '최종 결과 제출하기',
        goal_date: '2022-01-30'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_milestones', null, {});
  }
};
