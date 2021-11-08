import React, { useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.8.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.appendChild(jquery);
      document.head.appendChild(iamport);
    };
  }, []);

  const { IMP }: any = window;
  IMP.init('imp00267362');

  const paymentHandler = async () => {
    const order = {
      projectId: 1,
      projectTitle: '심해연구',
      amount: 100,
      buyerTel: '010-0000-0000'
    };

    const url = 'https://api.jisiksponsor/orders';
    const config = { withCredentials: true };

    const response = await axios.post(url, order, config);
    console.log(response);

    // const data = {
    //   pg: 'html5_inicis',
    //   pay_method: 'card',
    //   merchant_uid:
    // };
  };

  console.log(paymentHandler);

  return (
    <div>
      <button>결제하기</button>
    </div>
  );
};

export default Payment;
