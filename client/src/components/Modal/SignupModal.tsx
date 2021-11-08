import {
  ModalContainer,
  ModalBackup,
  ModalHead,
  PersonalInfo,
  PersonalInfoBack,
  ConditionInfo,
  ConditionInfoBack
} from './styled';
import SignupInput from './SignupInput';
import { useDispatch, useSelector } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/modal-slice';
import { offPersonalModal, offConditionModal } from 'store/modal-slice';
import { RootState } from 'index';

function SignupModal() {
  const personalModal = useSelector(
    (state: RootState) => state.modal.personalBox
  );
  const conditionModal = useSelector(
    (state: RootState) => state.modal.conditionBox
  );
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
      {personalModal && (
        <>
          <PersonalInfoBack onClick={() => dispatch(offPersonalModal())} />
          <PersonalInfo />
        </>
      )}
      {conditionModal && (
        <>
          <ConditionInfoBack onClick={() => dispatch(offConditionModal())} />
          <ConditionInfo />
        </>
      )}
    </>
  );
}

export default SignupModal;
