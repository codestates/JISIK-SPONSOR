import React from 'react';
import { MiniModalContainer, MiniModalBack, MiniModalText } from './styled';
import { showMiniMoal } from 'store/modal-slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'index';
function MiniModal() {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.modal.modalText);
  return (
    <div>
      <MiniModalBack onClick={() => dispatch(showMiniMoal(false))} />
      <MiniModalContainer>
        <MiniModalText>
          <span onClick={() => dispatch(showMiniMoal(false))}>&times;</span>
          <h2>{text}</h2>
          <button onClick={() => dispatch(showMiniMoal(false))}>확인</button>
        </MiniModalText>
      </MiniModalContainer>
    </div>
  );
}

export default MiniModal;
