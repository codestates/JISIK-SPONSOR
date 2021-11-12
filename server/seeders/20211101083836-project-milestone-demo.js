'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_milestones', [
      {
        project_id: 1,
        title: '선별된 수도원 사전 문헌조사',
        goal_date: '2022-05-01 15:00:00'
      },
      {
        project_id: 1,
        title: '프랑스로 출국',
        goal_date: '2022-06-03 15:00:00'
      },
      {
        project_id: 1,
        title: '귀국',
        goal_date: '2022-07-05 15:00:00'
      },
      {
        project_id: 1,
        title: '최종보고회',
        goal_date: '2022-07-05 15:00:00'
      },
      {
        project_id: 2,
        title: '프로젝트 시작',
        goal_date: '2022-01-02 15:00:00'
      },
      {
        project_id: 2,
        title: '데이터 구축 시스템 구비',
        goal_date: '2022-02-01 15:00:00'
      },
      {
        project_id: 2,
        title: '혹등고래 관련 데이터 구축',
        goal_date: '2022-04-05 15:00:00'
      },
      {
        project_id: 2,
        title: '수집된 데이터를 통한 연구결과 도출',
        goal_date: '2022-08-06 15:00:00'
      },
      {
        project_id: 2,
        title: '최종보고회',
        goal_date: '2022-12-13 15:00:00'
      },
      {
        project_id: 3,
        title: '프로젝트 시작',
        goal_date: '2021-12-11 15:00:00'
      },
      {
        project_id: 3,
        title: '연구 윤리적 허가 및 승인',
        goal_date: '2022-04-25 15:00:00'
      },
      {
        project_id: 3,
        title: 'RT-LAMP 검사를 위한 프라이머 및 프로브 설계',
        goal_date: '2022-05-25 15:00:00'
      },
      {
        project_id: 3,
        title: 'RT-LAMP 검사 개발',
        goal_date: '2022-07-13 15:00:00'
      },
      {
        project_id: 3,
        title: '임상 샘플로 RT-LAMP 검사 유효성 검사',
        goal_date: '2022-09-30 15:00:00'
      },
      {
        project_id: 3,
        title: '연구 결과 보고',
        goal_date: '2022-10-29 15:00:00'
      },
      {
        project_id: 4,
        title: '프로젝트 시작',
        goal_date: '2022-01-05 15:00:00'
      },
      {
        project_id: 4,
        title: '테이터 수집',
        goal_date: '2022-01-12 15:00:00'
      },
      {
        project_id: 4,
        title: '경과 확률 계산',
        goal_date: '2022-01-24 15:00:00'
      },
      {
        project_id: 4,
        title: 'ECHR 및 ECJ 요약본 작성',
        goal_date: '2022-01-31 15:00:00'
      },
      {
        project_id: 5,
        title: '프로젝트 모금마감',
        goal_date: '2021-12-13 15:00:00'
      },
      {
        project_id: 5,
        title: '설문조사 시행',
        goal_date: '2021-12-27 15:00:00'
      },
      {
        project_id: 5,
        title: '설문의 데이터화',
        goal_date: '2022-01-11 15:00:00'
      },
      {
        project_id: 5,
        title: '중간보고',
        goal_date: '2022-02-22 15:00:00'
      },
      {
        project_id: 5,
        title: '최종보고',
        goal_date: '2022-03-22 15:00:00'
      },
      {
        project_id: 6,
        title: '프로젝트 시작',
        goal_date: '2021-12-01 15:00:00'
      },
      {
        project_id: 6,
        title: '펀딩 종료',
        goal_date: '2021-12-27 15:00:00'
      },
      {
        project_id: 6,
        title: '프로젝트 종료',
        goal_date: '2022-12-31 15:00:00'
      },
      {
        project_id: 7,
        title: '프로젝트 시작',
        goal_date: '2021-12-14 15:00:00'
      },
      {
        project_id: 7,
        title: 'AI 및 맞춤형 기술 개발',
        goal_date: '2022-02-25 15:00:00'
      },
      {
        project_id: 7,
        title: '장치 및 관련 장비 개발',
        goal_date: '2022-03-30 15:00:00'
      },
      {
        project_id: 7,
        title: '장치 배포(개념 증명)',
        goal_date: '2022-04-30 15:00:00'
      },
      {
        project_id: 8,
        title: '발굴 프로젝트 시작 ',
        goal_date: '2021-12-10 15:00:00'
      },
      {
        project_id: 8,
        title: '보존고 건설 및 랩 설치',
        goal_date: '2022-01-30 15:00:00'
      },
      {
        project_id: 8,
        title: '리바르나 발굴 시작 ',
        goal_date: '2022-02-01 15:00:00'
      },
      {
        project_id: 8,
        title: '리바르나 발굴 완료 ',
        goal_date: '2022-03-30 15:00:00'
      },
      {
        project_id: 8,
        title: '고고학 보고서 작성',
        goal_date: '2022-04-03 15:00:00'
      },
      {
        project_id: 8,
        title: '초기조사 완료',
        goal_date: '2022-05-10 15:00:00'
      },
      {
        project_id: 8,
        title: '후원자 대상 보고',
        goal_date: '2022-06-07 15:00:00'
      },
      {
        project_id: 9,
        title: '프로젝트 시작',
        goal_date: '2021-01-02 15:00:00'
      },
      {
        project_id: 9,
        title: '시범 참가자 모집',
        goal_date: '2021-01-10 15:00:00'
      },
      {
        project_id: 9,
        title: '추가 참가자 모집',
        goal_date: '2021-02-25 15:00:00'
      },
      {
        project_id: 10,
        title: '프로젝트 시작',
        goal_date: '2021-12-01 15:00:00'
      },
      {
        project_id: 10,
        title: '프로젝트 종료',
        goal_date: '2022-03-31 15:00:00'
      },
      {
        project_id: 11,
        title: '1차 준비',
        goal_date: '2021-12-11 15:00:00'
      },
      {
        project_id: 11,
        title: '2차 준비',
        goal_date: '2021-12-31 15:00:00'
      },
      {
        project_id: 11,
        title: '중간 보고',
        goal_date: '2022-01-10 15:00:00'
      },
      {
        project_id: 11,
        title: '최종보고',
        goal_date: '2022-02-01 15:00:00'
      },
      {
        project_id: 12,
        title: '설문 요청 및 전송',
        goal_date: '2021-12-15 15:00:00'
      },
      {
        project_id: 12,
        title: '데이터 분석',
        goal_date: '2022-01-15 15:00:00'
      },
      {
        project_id: 12,
        title: '최종보고',
        goal_date: '2022-02-01 15:00:00'
      },
      {
        project_id: 13,
        title: '1차 실험',
        goal_date: '2021-12-10 15:00:00'
      },
      {
        project_id: 13,
        title: '2차 실험',
        goal_date: '2021-12-12 15:00:00'
      },
      {
        project_id: 13,
        title: '최종보고',
        goal_date: '2022-02-01 15:00:00'
      },
      {
        project_id: 14,
        title: '쿠키 제작',
        goal_date: '2021-12-01 15:00:00'
      },
      {
        project_id: 15,
        title: '프로젝트 시작',
        goal_date: '2022-03-01 15:00:00'
      },
      {
        project_id: 15,
        title: '봄 샘플 채집',
        goal_date: '2022-03-03 15:00:00'
      },
      {
        project_id: 15,
        title: '가을 샘플 채집',
        goal_date: '2022-09-01 15:00:00'
      },
      {
        project_id: 15,
        title: '데이터수집 및 분석',
        goal_date: '2022-12-01 15:00:00'
      },
      {
        project_id: 15,
        title: '최종보고',
        goal_date: '2022-12-30 15:00:00'
      },
      {
        project_id: 16,
        title: '프로젝트 시작',
        goal_date: '2022-01-03 15:00:00'
      },
      {
        project_id: 16,
        title: '실험실 및 실험장비 확보',
        goal_date: '2022-01-04 15:00:00'
      },
      {
        project_id: 16,
        title: '유효성분으로 완성된 화장품 제조',
        goal_date: '2022-01-20 15:00:00'
      },
      {
        project_id: 16,
        title: '3주동안 티슈모델 인큐베이팅',
        goal_date: '2022-02-15 15:00:00'
      },
      {
        project_id: 16,
        title: '데이터분석',
        goal_date: '2022-02-27 15:00:00'
      },
      {
        project_id: 17,
        title: '프로젝트 시작',
        goal_date: '2022-01-01 15:00:00'
      },
      {
        project_id: 17,
        title: '데이터셋 구축',
        goal_date: '2022-01-10 15:00:00'
      },
      {
        project_id: 17,
        title: '로봇 만들기',
        goal_date: '2022-01-20 15:00:00'
      },
      {
        project_id: 17,
        title: '알고리즘 만들기',
        goal_date: '2022-02-20 15:00:00'
      },
      {
        project_id: 17,
        title: '최종보고',
        goal_date: '2022-03-01 15:00:00'
      },
      {
        project_id: 18,
        title: '프로젝트 시작',
        goal_date: '2022-01-05 15:00:00'
      },
      {
        project_id: 18,
        title: '스캐닝 시트 레이저시스템 구축',
        goal_date: '2022-04-10 15:00:00'
      },
      {
        project_id: 18,
        title: '결과물 디지털화',
        goal_date: '2022-05-10 15:00:00'
      },
      {
        project_id: 19,
        title: '프로젝트 시작',
        goal_date: '2022-01-06 15:00:00'
      },
      {
        project_id: 19,
        title: '장비 획득',
        goal_date: '2022-01-23 15:00:00'
      },
      {
        project_id: 19,
        title: '실험 실행',
        goal_date: '2022-02-14 15:00:00'
      },
      {
        project_id: 19,
        title: '데이터수집 및 결론도출',
        goal_date: '2022-04-01 15:00:00'
      },
      {
        project_id: 20,
        title: '프로젝트 시작',
        goal_date: '2022-01-02 15:00:00'
      },
      {
        project_id: 20,
        title: '타코마 타타우 페스티벌 참여 및 교육',
        goal_date: '2022-01-23 15:00:00'
      },
      {
        project_id: 20,
        title: '페스티벌 참여자 100명으로부터 데이터수집',
        goal_date: '2022-02-10 15:00:00'
      },
      {
        project_id: 20,
        title: '분석을 위한 최종 샘플 전달',
        goal_date: '2022-07-05 15:00:00'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_milestones', null, {});
  }
};
