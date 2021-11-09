import { ModalContainer, ModalHead, ModalBackup } from './styled';
import ModalInput from './ModalInput';
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
          <span onClick={() => dispatch(showLoginModal(false))}>&times;</span>
          <h2>로그인</h2>
          <p>
            회원이 아니신가요?{' '}
            <button onClick={changeLoginModal}>회원가입 하기</button>
          </p>
        </ModalHead>
        <ModalInput />
      </ModalContainer>
    </>
  );
}

export default LoginModal;
