import { MiniModalBack, MiniModalContainer } from 'components/Modal/styled';
import { DeleteText, DeleteButtonGroup } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { showDeleteProjectModal } from 'store/modal-slice';
import { showMiniMoal, insertText } from 'store/modal-slice';
import { RootState } from 'index';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';

function DeleteProjectModal() {
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteProjectId = useSelector(
    (state: RootState) => state.modal.deleteProjectId
  );

  const handleDeleteProject = async () => {
    await axios.delete(`${REACT_APP_API_URL}/projects/${deleteProjectId}`, {
      withCredentials: true
    });
    dispatch(showDeleteProjectModal(false));
    dispatch(showMiniMoal(true));
    dispatch(insertText(`프로젝트가 삭제되었습니다.`));
    history.push('/mypage');
  };

  return (
    <div>
      <MiniModalBack onClick={() => dispatch(showDeleteProjectModal(false))} />
      <MiniModalContainer>
        <DeleteText>
          <span onClick={() => dispatch(showDeleteProjectModal(false))}>
            &times;
          </span>
          <h2>정말 프로젝트를 삭제하시겠습니까?</h2>
          <p>프로젝트는 완전히 삭제됩니다.</p>
          <DeleteButtonGroup>
            <button onClick={() => dispatch(showDeleteProjectModal(false))}>
              취소
            </button>
            <button onClick={handleDeleteProject}>삭제하기</button>
          </DeleteButtonGroup>
        </DeleteText>
      </MiniModalContainer>
    </div>
  );
}

export default DeleteProjectModal;
