require('dotenv').config();
const axios = require('axios');
const { order, project_investor } = require('../../models');

module.exports = {
  complete: async (req, res) => {
    try {
      // req의 body에서 imp_uid, merchant_uid 추출
      const { imp_uid, merchant_uid } = req.body;

      // 1. 액세스 토큰(access token) 발급 받기
      const getToken = await axios({
        url: 'https://api.iamport.kr/users/getToken',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          imp_key: process.env.IMP_KEY, // REST API 키
          imp_secret: process.env.IMP_SECRET // REST API Secret
        }
      });

      // 인증 토큰 추출하기
      const { access_token } = getToken.data.response;
      // console.log('access_token', access_token);

      // 2. imp_uid로 아임포트 서버에서 결제 정보 조회
      const getPaymentData = await axios({
        url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
        method: 'GET',
        headers: { Authorization: access_token } // 인증 토큰 Authorization header에 추가
      });

      // 조회한 결제 정보
      const paymentData = getPaymentData.data.response;
      // console.log('paymentData', paymentData);

      // 3. DB에서 결제되어야 하는 금액 조회
      const orderInfo = await order.findOne({
        merchant_uid: paymentData.merchant_uid
      });
      const amountToBePaid = Number(orderInfo.amount); // 결제 되어야 하는 금액

      // 4. 결제 검증하기

      // 결제금액 불일치 => 위/변조 된 결제
      if (paymentData.amount !== amountToBePaid) {
        return res.status(200).json({
          status: 'forgery',
          message: '위조된 결제시도'
        });
      }

      // 결제금액 일치 => 결제 된 금액 === 결제 되어야 하는 금액

      // 주문 테이블에 결제 정보 저장
      await order.update(
        {
          // 주문 상태
          success: true,
          status: paymentData.status,
          // 주문자 정보
          buyer_name: paymentData.buyer_name,
          buyer_tel: paymentData.buyer_tel,
          buyer_email: paymentData.buyer_email,
          buyer_addr: paymentData.buyer_addr,
          buyer_postcode: paymentData.buyer_postcode,
          // 결제 정보
          imp_uid: paymentData.imp_uid,
          pg_provider: paymentData.pg_provider,
          pg_tid: paymentData.pg_tid,
          pay_method: paymentData.pay_method,
          paid_amount: paymentData.amount,
          paid_at: paymentData.paid_at,
          receipt_url: paymentData.receipt_url,
          card_name: paymentData.card_name,
          apply_num: paymentData.apply_num
        },
        { where: { merchant_uid } }
      );

      // 업데이트한 주문 정보 조회
      const updateOrder = await order.findOne({
        where: { imp_uid: paymentData.imp_uid }
      });

      // 후원 레코드 생성
      const newInvestor = await project_investor.create({
        user_id: updateOrder.user_id,
        project_id: updateOrder.project_id,
        pledged: updateOrder.amount
      });

      // 이메일 전송 필요!

      switch (paymentData.status) {
        case 'paid': // 결제 완료
          return res.json({
            status: 'success',
            message: '일반 결제 성공'
          });
      }
    } catch (err) {
      // 환불 로직 작성 필요
      console.error(err);
      res.status(400).json({ message: 'Client Error' });
    }
  }
};
