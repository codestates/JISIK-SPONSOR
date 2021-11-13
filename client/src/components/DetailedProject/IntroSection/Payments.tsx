import axios from 'axios';
import { RootState } from 'index';
import { useSelector, useDispatch } from 'react-redux';
import { StyledButton } from './styled';
import { REACT_APP_API_URL } from 'config';
import { showLoginModal, showMiniMoal, insertText } from 'store/modal-slice';

interface PaymentProps {
  projectId: number;
  title: string;
  enteredFund: string;
  enteredPhoneNum: string;
  setIsUserSponsor: any;
}

const Payment = ({
  projectId,
  title,
  enteredFund,
  enteredPhoneNum,
  setIsUserSponsor
}: PaymentProps) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const { IMP }: any = window;
  IMP.init('imp00267362');

  // 후원 결제 버튼 클릭시, 최초 유저 입력값을 전달하고 데이터를 받아오는 함수
  const paymentHandler = async () => {
    if (isLogin) {
      if (!enteredFund || !enteredPhoneNum) {
        dispatch(showMiniMoal(true));
        dispatch(insertText('후원금액과, 전화번호를 정확히 입력해주세요.'));
      }
    }
    if (isLogin) {
      try {
        const order = {
          projectId,
          projectTitle: title,
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
    } else {
      dispatch(showLoginModal(true));
    }
  };

  // 받아온 데이터를 사용하여 최종 결제를 진행
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
      m_redirect_url: 'https://api.jisiksponsor.com/payments/complete/mobile'
    };

    // requestPay 함수의 두번째 인자로 성공시, 실패 시 경우를 다르게 보여주는 콜백 함수
    const callback = async (res: any) => {
      const { success, error_msg, imp_uid, merchant_uid } = res;
      if (success) {
        try {
          const url = `${REACT_APP_API_URL}/payments/complete`;
          const data = { imp_uid, merchant_uid };
          const config = { withCredentials: true };
          await axios.post(url, data, config);
          dispatch(showMiniMoal(true));
          dispatch(
            insertText('성공적으로 후원 완료되었습니다. 🎉🎉  감사합니다!')
          );
          setIsUserSponsor(true);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log(error_msg);
        try {
          console.log('주문 실패');
        } catch (err) {
          console.log('주문 취소 API 요청 실패!');
        }
      }
    };

    // IMP 결제 요청 함수
    IMP.request_pay(param, callback);
  };

  return (
    <div>
      <StyledButton onClick={paymentHandler}>후원하기</StyledButton>
    </div>
  );
};

export default Payment;
