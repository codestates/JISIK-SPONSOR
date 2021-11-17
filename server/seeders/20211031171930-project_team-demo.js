'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_teams', [
      {
        user_id: 5,
        project_id: 1,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 6,
        project_id: 2,
        team_name: 'Happywhale',
        team_description:
          "'Happywhale'의 임무는 고품질의 보존 과학과 교육을 만들어냄으로써 해양 환경에 대한 세계적인 이해와 관심을 높이는 것입니다. 저희는 대중이 과학에 쉽게 참여하는 것을 목표로 합니다. 어떻게요? 해양 포유류에 관심이 있는 모든 사람을 참여시키고 강력한 협업 도구로 연구계에 봉사할 수 있는 혁신적인 도구를 개발합니다."
      },
      {
        user_id: 7,
        project_id: 3,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 8,
        project_id: 4,
        team_name: '진철과 순오',
        team_description:
          '진철과 순오 둘 다 외국인 출신으로 미국에서 공부를 하여 학위를 취득하였습니다. 진철은 스포츠 과학과 법 저널에 원고를 제출했을 때 순오를 만났습니다. 진철은 법률 섹션에서 원고를 편집하고 있으며, 순오는 스포츠 법에 ECHR의 개입에 관심이 있습니다. 진철이 이번 프로젝트의 총괄이며, 데이터 수집과 도핑사례 요약을 담당할 것 입니다. '
      },
      {
        user_id: 9,
        project_id: 5,
        team_name: '코로나19 백신을 통하여 사랑을 전하는 사람들',
        team_description:
          '저희는 MD4SG 개발 실무 그룹의 일원으로서 전세계 백신 불평등을 해결하는 것에 관심이 많은 연구팀입니다. 저희는 신흥 국가 및 자원이 부족한 환경의 문제를 이해하고 해결하기 위해 실무자 및 학자들 간의 협업과 논의를 주도하고 있습니다. 끝으로 저희는 알고리즘 및 메커니즘 설계, 사회 과학 및 최적화의 기술이 기존 개발 정책과 관행을 어떻게 알리고 발전시키는 데 관심이 많습니다.'
      },
      {
        user_id: 10,
        project_id: 6,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 11,
        project_id: 7,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 12,
        project_id: 8,
        team_name:
          '리바르나 도시 경관 프로젝트(LULP, Liberna Urban Landscape Project)',
        team_description:
          '리바르나 도시 경관 프로젝트는 고대 도시 리바르나가 어떻게 제국주의적 확장의 행정적이고 문화적인 도구로서 기능했는지 조사할 것입니다. 고고학자와 인류학자 등으로 구성되어 있는 저희 프로젝트는 리바르나의 발굴과 조사를 통해 로마 시대에 대한 보다 깊이 있는 이해와 탐구를 추구합니다.'
      },
      {
        user_id: 13,
        project_id: 9,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 14,
        project_id: 10,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 15,
        project_id: 11,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 16,
        project_id: 12,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 17,
        project_id: 13,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 18,
        project_id: 14,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 19,
        project_id: 15,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 20,
        project_id: 16,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 21,
        project_id: 17,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 22,
        project_id: 18,
        team_name: '',
        team_description: ''
      },
      {
        user_id: 23,
        project_id: 19,
        team_name: '최강팀',
        team_description:
          '저희팀은 인도주의적인 목표를 가지고 많은 혁신적이고 과학적인 프로젝트에 협력하고 있습니다. 저희는 함께 건강과 환경에 긍정적인 영향을 미칠 수 있는 의미있는 결과를 찾기 위해 노력하고 있습니다.'
      },
      {
        user_id: 24,
        project_id: 20,
        team_name: '강최김팀',
        team_description:
          '저희 팀은 문신, 폴리네시아 공동체, 면역학에 대한 이전의 연구를 포함하여 건강에 대한 문화적 영향을 연구한 광범위한 경험을 가지고 있습니다. 강수아님은 미국과 미국령 사모아에서 문신과 면역 반응에 대한 이전 연구를 수행했습니다. 최수종님은 폴리네시아 공동체와 미국령 사모아에서 거의 8년 동안 일했습니다. 김민철은 세계 최고의 인류학 면역학자 중 한 명입니다. 세 사람 모두 문신을 했습니다.'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_teams', null, {});
  }
};
