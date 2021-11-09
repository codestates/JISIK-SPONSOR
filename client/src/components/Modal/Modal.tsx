import { useSelector } from 'react-redux';
import { RootState } from 'index';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import ConflitSignup from './ConflitSignup';
import MiniModal from './MiniModal';

const Modal = () => {
  const { loginModal, signupModal, conflitModal, miniModal } = useSelector(
    (state: RootState) => state.modal
  );

  return (
    <>
      {loginModal && <LoginModal />}
      {signupModal && <SignupModal />}
      {conflitModal && <ConflitSignup />}
      {miniModal && <MiniModal />}
    </>
  );
};

export default Modal;
