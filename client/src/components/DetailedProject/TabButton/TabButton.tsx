import axios from 'axios';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  showMiniMoal,
  insertText,
  showDeleteProjectModal
} from 'store/modal-slice';
import { overview, labnote } from 'store/detailedPageBt-slice';
import { Section, Tab, Wrapper } from './styled';
import { RootState } from 'index';
import { Project } from '../type';
import { REACT_APP_API_URL } from 'config';

interface Props {
  project: Project;
}

const TabButton = ({ project }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const detailTab = useSelector((state: RootState) => state.detailPage);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

  const submitProject = async () => {
    await axios.patch(
      `${REACT_APP_API_URL}/projects/${project.id}/status`,
      { status: 'submit' },
      { withCredentials: true }
    );
    history.push('/');
    dispatch(showMiniMoal(true));
    dispatch(
      insertText(
        `프로젝트가 성공적으로 제출되었습니다.
        검토 후 승인을 받으면 펀딩을 진행하실 수 있습니다.`
      )
    );
  };

  const deleteProject = async () => {
    dispatch(showDeleteProjectModal({ modal: true, id: project.id }));
  };

  useEffect(() => {
    dispatch(overview());
  }, []);

  return (
    <Section>
      <Wrapper>
        <Tab overview={detailTab.overview} onClick={() => dispatch(overview())}>
          개요
        </Tab>
        <Tab labnote={detailTab.labnote} onClick={() => dispatch(labnote())}>
          랩 노트
        </Tab>
        {isLogin &&
        project.user_id === userInfo.id &&
        project.status === 'draft' ? (
          <>
            <Tab>
              <Link to="/start-project">프로젝트 수정</Link>
            </Tab>
            <Tab onClick={submitProject}>프로젝트 제출</Tab>
            <Tab onClick={deleteProject}>프로젝트 삭제</Tab>
          </>
        ) : null}
      </Wrapper>
    </Section>
  );
};

export default TabButton;
