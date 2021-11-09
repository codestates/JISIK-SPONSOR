import React from 'react';
import { useDispatch } from 'react-redux';
import { ModalBackup, ConflitContainer, ModalWraaper } from './styled';
import { showConfiltModal } from 'store/modal-slice';
function ConflitSignup() {
  const dispatch = useDispatch();
  return (
    <>
      <ModalBackup onClick={() => dispatch(showConfiltModal(false))} />
      <ConflitContainer>
        <ModalWraaper>
          <span onClick={() => dispatch(showConfiltModal(false))}>&times;</span>
          <h2>등록하신 이메일로 메일이 발송되었습니다.</h2>
          <p>이메일 인증을 완료하셔야 회원가입이 정상적으로 완료됩니다.</p>
          <button
            onClick={() => {
              dispatch(showConfiltModal(false));
              alert('지식스폰서에 오신걸 환영합니다🎉');
            }}
          >
            확인
          </button>
        </ModalWraaper>
      </ConflitContainer>
    </>
  );
}

export default ConflitSignup;
