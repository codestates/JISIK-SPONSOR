import { ModalContainer, ModalBackup, ModalHead } from './styled';
import SignupInput from './SignupInput';
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

        <SignupInput />
      </ModalContainer>
    </>
  );
}

export default SignupModal;
