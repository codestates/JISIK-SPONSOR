import {
  ModalContainer,
  ModalHead,
  ModalBody,
  LoginButton,
  ButtonGroup,
  ModalBackup
} from './styled';
import kakao from '../../images/icons/kakao.png';
import google from '../../images/icons/Google.png';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/modal-slice';
function LoginModal() {
  const dispatch = useDispatch();
  const changeLoginModal = (): void => {
    dispatch(showLoginModal(false));
    dispatch(showSignupModal(true));
  };
  const closeModalHandler = (): void => {
    dispatch(showLoginModal(false));
  };
  return (
    <>
      <ModalBackup onClick={closeModalHandler} />
      <ModalContainer>
        <ModalHead>
          <h2>로그인</h2>
          <p>
            회원이 아니신가요?{' '}
            <button onClick={changeLoginModal}>회원가입 하기</button>
          </p>
        </ModalHead>
        <ModalBody>
          <form>
            <label>이메일</label>
            <input type="email"></input>
            <label>비밀번호</label>
            <input type="password"></input>
          </form>
        </ModalBody>
        <ButtonGroup>
          <LoginButton>로그인</LoginButton>
          <LoginButton>
            <img src={google} />
            <span>구글 로그인</span>
          </LoginButton>
          <LoginButton>
            <img src={kakao} />
            <span>카카오톡 로그인</span>
          </LoginButton>
        </ButtonGroup>
      </ModalContainer>
    </>
  );
}

export default LoginModal;
