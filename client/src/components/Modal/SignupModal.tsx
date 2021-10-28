import {
  ModalContainer,
  ModalBackup,
  ModalHead,
  ModalBody,
  SignupButton
} from './styled';
import CheckBox from './CheckBox';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/modal-slice';
function SignupModal() {
  const dispatch = useDispatch();
  const changeSignupModal = (): void => {
    dispatch(showSignupModal(false));
    dispatch(showLoginModal(true));
  };
  const closeModalHandler = () => {
    dispatch(showSignupModal(false));
  };
  return (
    <>
      <ModalBackup onClick={closeModalHandler} />
      <ModalContainer>
        <ModalHead>
          <h2>회원가입</h2>
          <p>
            이미 회원이신가요?{' '}
            <button onClick={changeSignupModal}>로그인 하기</button>
          </p>
        </ModalHead>
        <ModalBody>
          <form>
            <label>이름</label>
            <input type="text" />
            <label>이메일</label>
            <input type="email" />
            <label>비밀번호</label>
            <input type="password" />
            <label>비밀번호 확인</label>
            <input type="password" />
            <CheckBox />
          </form>
        </ModalBody>
        <SignupButton>회원가입</SignupButton>
      </ModalContainer>
    </>
  );
}

export default SignupModal;
