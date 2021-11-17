import { useSelector } from 'react-redux';
import { RootState } from 'index';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import ConflitSignup from './ConflitSignup';
import MiniModal from './MiniModal';
import WithDrawalModal from 'components/SettingProfile/WithDrawalModal/WithDrawalModal';
import DeleteProjectModal from './DeleteProjectModal';

const Modal = () => {
  const {
    loginModal,
    signupModal,
    conflitModal,
    miniModal,
    withDrawalModal,
    deleteProjectModal
  } = useSelector((state: RootState) => state.modal);

  return (
    <>
      {loginModal && <LoginModal />}
      {signupModal && <SignupModal />}
      {conflitModal && <ConflitSignup />}
      {miniModal && <MiniModal />}
      {withDrawalModal && <WithDrawalModal />}
      {deleteProjectModal && <DeleteProjectModal />}
    </>
  );
};

export default Modal;
