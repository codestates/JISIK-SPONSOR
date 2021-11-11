import { useEffect } from 'react';
import { Section, Tab, Wrapper } from './styled';
import { RootState } from 'index';
import { useDispatch, useSelector } from 'react-redux';
import { overview, labnote } from 'store/detailedPageBt-slice';
import { Link } from 'react-router-dom';
import { Project } from '../type';

interface Props {
  project: Project;
}

const TabButton = ({ project }: Props) => {
  const dispatch = useDispatch();

  const detailTab = useSelector((state: RootState) => state.detailPage);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

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
        {isLogin && project.user_id === userInfo.id ? (
          <>
            <Tab>
              <Link to="/start-project">프로젝트 수정</Link>
            </Tab>
            <Tab>프로젝트 제출</Tab>
          </>
        ) : null}
      </Wrapper>
    </Section>
  );
};

export default TabButton;
