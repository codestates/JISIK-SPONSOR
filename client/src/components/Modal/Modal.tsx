import { useSelector } from 'react-redux';
import { RootState } from 'index';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import ConflitSignup from './ConflitSignup';

const Modal = () => {
  const { loginModal, signupModal, conflitModal } = useSelector(
    (state: RootState) => state.modal
  );

  return (
    <>
      {loginModal && <LoginModal />}
      {signupModal && <SignupModal />}
      {conflitModal && <ConflitSignup />}
    </>
  );
};

export default Modal;
