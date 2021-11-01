import { useSelector } from 'react-redux';
import { RootState } from 'index';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Modal = () => {
  const { loginModal, signupModal } = useSelector(
    (state: RootState) => state.modal
  );
  console.log(loginModal, signupModal);

  return (
    <>
      {loginModal && <LoginModal />}
      {signupModal && <SignupModal />}
    </>
  );
};

export default Modal;
