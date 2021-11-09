import React from 'react';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { StyledButton } from 'components/Button';

interface PaymentProps {
  enteredFund: string;
  enteredPhoneNum: string;
}

const Payment = ({ enteredFund, enteredPhoneNum }: PaymentProps) => {
  const { IMP }: any = window;
  IMP.init('imp00267362');

  const paymentHandler = async () => {
    try {
      const order = {
        projectId: 3,
        projectTitle: '심해연구',
        amount: Number(enteredFund),
        buyerTel: enteredPhoneNum
      };

      const url = `${REACT_APP_API_URL}/orders`;
      const config = { withCredentials: true };
      const response = await axios.post<any>(url, order, config);
      requestPay(response.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  const requestPay = (data: any) => {
    const param = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: data.merchant_uid,
      name: data.name,
      amount: data.amount,
      buyer_name: data.buyer_name, // (필수)
      buyer_tel: data.buyer_tel, // (필수)
      buyer_email: data.buyer_email, // (권장)
      m_redirect_url: '/payments/complete/mobile'
    };

    const callback = async (res: any) => {
      const { success, error_msg, imp_uid, merchant_uid } = res;

      if (success) {
        try {
          const data = {
            imp_uid,
            merchant_uid
          };
          const url = `${REACT_APP_API_URL}/payments/complete`;
          const config = { withCredentials: true };
          const response = await axios.post(url, data, config);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log(error_msg);
        try {
          const url = `${REACT_APP_API_URL}/orders`;
          const config = { withCredentials: true };
          const response = await axios.post(url, data, config);
          console.log(response);
        } catch (err) {
          console.log('주문 취소 API 요청 실패!');
        }
      }
    };

    IMP.request_pay(param, callback);
  };

  return (
    <div>
      <StyledButton onClick={paymentHandler}>후원하기</StyledButton>
    </div>
  );
};

export default Payment;
