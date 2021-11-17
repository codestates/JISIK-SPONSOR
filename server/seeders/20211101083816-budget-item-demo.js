'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('budget_items', [
      {
        project_id: 1,
        title: '프랑스편 항공비',
        amount: 1875000
      },
      {
        project_id: 1,
        title: '프랑스 내 교통',
        amount: 775000
      },
      {
        project_id: 1,
        title: '숙식비',
        amount: 610000
      },
      {
        project_id: 1,
        title: '탐사비',
        amount: 900000
      },
      {
        project_id: 2,
        title: '혹등고래 관련 데이터 수집 소프트웨어 개발',
        amount: 22505000
      },
      {
        project_id: 3,
        title: '가나편 항공비',
        amount: 875000
      },
      {
        project_id: 3,
        title: '가나 내 교통',
        amount: 75000
      },
      {
        project_id: 3,
        title: '숙식비',
        amount: 310000
      },
      {
        project_id: 3,
        title: '연구비',
        amount: 1540000
      },
      {
        project_id: 4,
        title: '교통비',
        amount: 76000
      },
      {
        project_id: 4,
        title: '식비',
        amount: 140000
      },
      {
        project_id: 4,
        title: '숙식비',
        amount: 130000
      },
      {
        project_id: 4,
        title: '연구비',
        amount: 654000
      },
      {
        project_id: 5,
        title: '실험비 지급',
        amount: 2330000
      },
      {
        project_id: 5,
        title: '백신 제공 비용',
        amount: 3200000
      },
      {
        project_id: 5,
        title: '숙식비',
        amount: 370000
      },
      {
        project_id: 5,
        title: '교통비',
        amount: 150000
      },
      {
        project_id: 5,
        title: '식비',
        amount: 300000
      },
      {
        project_id: 6,
        title: '데이터 수집 인력비',
        amount: 1500000
      },
      {
        project_id: 6,
        title: '교통비',
        amount: 100000
      },
      {
        project_id: 6,
        title: '소프트웨어 분석비',
        amount: 500000
      },
      {
        project_id: 7,
        title: '태양 전지판 베터리 충전기',
        amount: 225000
      },
      {
        project_id: 7,
        title: '계류부표',
        amount: 200000
      },
      {
        project_id: 7,
        title: 'Scubotics에 의한 일괄 처리 이미지',
        amount: 2300000
      },
      {
        project_id: 7,
        title: '커스텀 카메라 장비',
        amount: 950000
      },
      {
        project_id: 7,
        title: '와이파이 확장',
        amount: 150000
      },
      {
        project_id: 7,
        title: '기타 개발 하드웨어',
        amount: 700000
      },
      {
        project_id: 8,
        title: '유적 보관비',
        amount: 2100000
      },
      {
        project_id: 8,
        title: '보존도구 관리비',
        amount: 1200000
      },
      {
        project_id: 8,
        title: '굴착기 대여료(운전자 포함)',
        amount: 550000
      },
      {
        project_id: 8,
        title: '재포장을 위한 멸균 토양',
        amount: 1000000
      },
      {
        project_id: 9,
        title: '앱 7개 구매',
        amount: 50000
      },
      {
        project_id: 9,
        title: '참가자 7명 보상',
        amount: 210000
      },
      {
        project_id: 9,
        title: '플랫폼 사용료',
        amount: 30000
      },
      {
        project_id: 10,
        title: '헤드폰 20개',
        amount: 90000
      },
      {
        project_id: 10,
        title: '헤드폰 분할기',
        amount: 30000
      },
      {
        project_id: 10,
        title: '온라인 미디어 호스팅 비',
        amount: 150000
      },
      {
        project_id: 10,
        title: '대형 도시지도 인쇄본',
        amount: 110000
      },
      {
        project_id: 10,
        title: '미술 용품',
        amount: 130000
      },
      {
        project_id: 10,
        title: '대체 교사',
        amount: 110000
      },
      {
        project_id: 10,
        title: '학교 교통비',
        amount: 330000
      },
      {
        project_id: 10,
        title: '삼성 태블릿',
        amount: 550000
      },
      {
        project_id: 11,
        title: '실험 참가비',
        amount: 2000000
      },
      {
        project_id: 12,
        title: '서베이 몽키 구독비용',
        amount: 156000
      },
      {
        project_id: 13,
        title: '참여 보상',
        amount: 1400000
      },
      {
        project_id: 14,
        title: '쿠키 재료값',
        amount: 100000
      },
      {
        project_id: 15,
        title: '장비 충당',
        amount: 500000
      },
      {
        project_id: 15,
        title: '바이러스 RNA 추출 시약',
        amount: 800000
      },
      {
        project_id: 15,
        title: '기타 비용',
        amount: 1000000
      },
      {
        project_id: 16,
        title: '실험장비',
        amount: 1800000
      },
      {
        project_id: 16,
        title: '원재료 비용',
        amount: 2000000
      },
      {
        project_id: 16,
        title: '기타 비용',
        amount: 200000
      },
      {
        project_id: 17,
        title: '부품비',
        amount: 270000
      },
      {
        project_id: 18,
        title: '로테이팅 미러 시스템',
        amount: 2000000
      },
      {
        project_id: 18,
        title: '레이저',
        amount: 1000000
      },
      {
        project_id: 18,
        title: '레이저 고글',
        amount: 200000
      },
      {
        project_id: 18,
        title: '스캔 시트 레이저 시스템',
        amount: 1500000
      },
      {
        project_id: 19,
        title: '실험장비',
        amount: 7773000
      },
      {
        project_id: 19,
        title: '프로젝트 관리',
        amount: 3500000
      },
      {
        project_id: 19,
        title: '기타 비용 및 세금',
        amount: 250000
      },
      {
        project_id: 20,
        title: '항공비',
        amount: 800000
      },
      {
        project_id: 20,
        title: '숙박',
        amount: 480000
      },
      {
        project_id: 20,
        title: '음식',
        amount: 127000
      },
      {
        project_id: 20,
        title: '데이터 수집 장비',
        amount: 250000
      },
      {
        project_id: 20,
        title: '우편요금',
        amount: 250000
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('budget_items', null, {});
  }
};
