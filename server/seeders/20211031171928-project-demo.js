'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projects', [
      {
        title: '산호가 더 높은 온도에 적응할 수 있을까?',
        path: '산호가-더-높은-온도에-적응할-수-있을까-지식스폰서-1',
        user_id: 1,
        category_id: 3,
        project_team_id: 1,
        description:
          '기후 변화에 직면하여 산호초를 보호하기 위한 긴급 조치가 필요합니다. 하와이에서 유출...',
        term: 30,
        start_date: '2021-11-01 00:00:00',
        end_date: '2021-11-30 00:00:00',
        status: '진행중',
        goal: 3000000,
        pledged: 1000000,
        remainder: 2000000,
        investors: 20,
        comments: 5,
        wishes: 10,
        views: 100,
        project_background:
          '이번 연구를 시작하게된 배경은 이렇고 저렇습니다...',
        project_progress: '이번 연구의 진행상황은 이렇고 저렇습니다...',
        project_goals: '이번 연구의 목표는 이렇게 저렇습니다...',
        budget_synopsis: '예산은 이렇게 사용되고 저렇게 사용됩니다...',
        milestone_description:
          '먼저 이것을 진행하고 다음으로 저것을 진행합니다...',
        researcher_word:
          '이번 프로젝트는 저에게 있어 아주 중요한 프로젝트입니다. 많은 관심과 응원 부탁드립니다...'
      },
      {
        title: '거대 바이러스는 어떻게 해양 생태계에 영향을 미칠까?',
        path: '거대-바이러스는-어떻게-해양-생태계에-영향을-미칠까-지식스폰서-1',
        user_id: 1,
        category_id: 3,
        project_team_id: 2,
        description: '박테리아보다 큰 거대 바이러스 발견했습니다...',
        term: 30,
        start_date: '2021-11-01 00:00:00',
        end_date: '2021-11-30 00:00:00',
        status: '진행중',
        goal: 3000000,
        pledged: 2000000,
        remainder: 1000000,
        investors: 10,
        comments: 0,
        wishes: 5,
        views: 50,
        project_background:
          '이번 연구를 시작하게된 배경은 이렇고 저렇습니다...',
        project_progress: '이번 연구의 진행상황은 이렇고 저렇습니다...',
        project_goals: '이번 연구의 목표는 이렇게 저렇습니다...',
        budget_synopsis: '예산은 이렇게 사용되고 저렇게 사용됩니다...',
        milestone_description:
          '먼저 이것을 진행하고 다음으로 저것을 진행합니다...',
        researcher_word:
          '이번 프로젝트는 저에게 있어 아주 중요한 프로젝트입니다. 많은 관심과 응원 부탁드립니다...'
      },
      {
        title: '공감이 대인관계를 어떻게 향상시킬 수 있을까?',
        path: '공감이-대인관계를-어떻게-향상시킬-수-있을까-김코딩-3',
        user_id: 3,
        category_id: 1,
        description: '인지 부조화 및 자기 인식 이론에 대한 연구를...',
        term: 30,
        start_date: '2021-11-01 00:00:00',
        end_date: '2021-11-20 00:00:00',
        status: '진행중',
        goal: 1000000,
        pledged: 500000,
        remainder: 500000,
        investors: 2,
        comments: 8,
        wishes: 10,
        views: 342,
        project_background:
          '이번 연구를 시작하게된 배경은 이렇고 저렇습니다...',
        project_progress: '이번 연구의 진행상황은 이렇고 저렇습니다...',
        project_goals: '이번 연구의 목표는 이렇게 저렇습니다...',
        budget_synopsis: '예산은 이렇게 사용되고 저렇게 사용됩니다...',
        milestone_description:
          '먼저 이것을 진행하고 다음으로 저것을 진행합니다...',
        researcher_word:
          '이번 프로젝트는 저에게 있어 아주 중요한 프로젝트입니다. 많은 관심과 응원 부탁드립니다...'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {});
  }
};
