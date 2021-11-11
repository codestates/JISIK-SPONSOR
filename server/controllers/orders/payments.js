require('dotenv').config();
const axios = require('axios');
const { project, order, project_sponsor } = require('../../models');
const { sponsorSuccess } = require('../../middlewares/email/email-content');
const emailSend = require('../../middlewares/email/email-send');

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

      // 2. imp_uid로 아임포트 서버에서 결제 정보 조회
      const getPaymentData = await axios({
        url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
        method: 'GET',
        headers: { Authorization: access_token } // 인증 토큰 Authorization header에 추가
      });

      // 조회한 결제 정보
      const paymentData = getPaymentData.data.response;

      // 3. DB에서 결제되어야 하는 금액 조회
      const orderInfo = await order.findOne({ where: { merchant_uid } });
      const amountToBePaid = Number(orderInfo.amount); // 결제 되어야 하는 금액

      // 4. 결제 검증하기

      // 결제금액 불일치 => 위/변조 된 결제
      if (paymentData.amount !== amountToBePaid) {
        return res.status(200).json({
          status: 'forgery',
          orderInfo,
          payment: paymentData.amount,
          amountToBePaid: orderInfo.amount,
          message: '위조된 결제시도'
        });
      }

      /**
       *
       * [결제금액 일치, 주문 성공]
       *
       */

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

      // 프로젝트 조회
      const projectInfo = await project.findOne({
        where: { id: updateOrder.project_id }
      });

      // // 프로젝트 업데이트
      await project.update(
        {
          pledged: Number(projectInfo.pledged) + Number(updateOrder.amount),
          remainder: Number(projectInfo.remainder) - Number(updateOrder.amount)
        },
        { where: { id: projectInfo.id } }
      );

      // 후원 레코드 생성
      const newSponsor = await project_sponsor.create({
        user_id: updateOrder.user_id,
        project_id: updateOrder.project_id,
        pledged: updateOrder.amount,
        status: '후원성공'
      });

      /**
       *
       * [후원 내역 이메일 전송]
       *
       */

      const url = process.env.CLIENT_ORIGIN + '/' + projectInfo.path;

      // 이메일 전송
      const emailContent = sponsorSuccess(
        updateOrder.buyer_email,
        updateOrder.buyer_name,
        url,
        updateOrder
      );
      emailSend(emailContent);

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
  },
  cancel: async (req, res) => {
    try {
      const { imp_uid: uid, reason, cancel_request_amount } = req.body;

      // 1. 액세스 토큰(access token) 발급 받기
      const getToken = await axios({
        url: 'https://api.iamport.kr/users/getToken',
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        data: {
          imp_key: process.env.IMP_KEY, // REST API 키
          imp_secret: process.env.IMP_SECRET // REST API Secret
        }
      });

      // 인증 토큰 추출하기
      const { access_token } = getToken.data.response;

      // 2. imp_uid로 아임포트 서버에서 결제 정보 조회
      const getPaymentData = await axios({
        url: `https://api.iamport.kr/payments/${uid}`, // imp_uid 전달
        method: 'GET',
        headers: { Authorization: access_token } // 인증 토큰 Authorization header에 추가
      });

      // 조회한 결제정보로부터 imp_uid, amount(결제금액), cancel_amount(환불된 총 금액) 추출
      const { imp_uid, amount, cancel_amount } = getPaymentData.data.response;

      console.log(
        '결제금액:',
        amount,
        '환불금액:',
        cancel_amount,
        '환불요청금액:',
        cancel_request_amount
      );

      // 환불 가능 금액(= 결제금액 - 환불 된 총 금액) 계산
      const cancelableAmount = amount - cancel_amount;

      // 이미 전액 환불된 경우
      if (cancelableAmount <= 0) {
        return res.status(400).json({ message: '이미 전액환불된 주문입니다.' });
      }

      // 부분 환불 불가능
      if (amount !== cancel_request_amount) {
        return res.status(400).json({ message: '부분 환불이 불가능합니다.' });
      }

      // 3. 환불 요청
      const getCancelData = await axios({
        url: 'https://api.iamport.kr/payments/cancel',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: access_token // 아임포트 서버로부터 발급받은 엑세스 토큰
        },
        data: {
          reason, // 가맹점 클라이언트로부터 받은 환불사유
          imp_uid, // imp_uid를 환불 `unique key`로 입력
          amount: cancel_request_amount, // 가맹점 클라이언트로부터 받은 환불금액
          checksum: cancelableAmount // [권장] 환불 가능 금액 입력
        }
      });

      // 환불 불가능한 경우 다음을 리턴한다.
      const { response } = getCancelData.data;
      if (!response) {
        return res.status(400).json({ message: getCancelData.data.message });
      }

      // 4. 환불 결과 동기화 (주문 데이터베이스 변경 로직 구현 필요)
      return res.status(200).json({ message: 'ok' });
    } catch (err) {
      // 환불 로직 작성 필요
      console.error(err);
      res.status(400).json({ message: 'Client Error' });
    }
  }
};
