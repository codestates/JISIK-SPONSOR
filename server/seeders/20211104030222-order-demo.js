'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        user_id: 3,
        project_id: 1,
        merchant_uid: 'OID1635993886679-1',
        name: '산호 연구',
        amount: '100.00',
        buyer_name: '김코딩',
        buyer_tel: '010-1234-5678',
        buyer_email: 'kimcoding@naver.com',
        buyer_addr: null,
        buyer_postcode: null,
        success: true,
        status: 'paid',
        imp_uid: 'imp_883886735583',
        pg_provider: 'nice',
        pg_tid: 'nictest00m01012111041146088583',
        pay_method: 'card',
        paid_amount: 100,
        paid_at: 1635993969,
        receipt_url:
          'https://npg.nicepay.co.kr/issue/IssueLoader.do?TID=nictest00m01012111041146088583&type=0&InnerWin=Y',
        card_name: '해피카드',
        apply_num: '28882363'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
