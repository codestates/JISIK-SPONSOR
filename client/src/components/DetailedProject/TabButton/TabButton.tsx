import { useEffect } from 'react';
import { Tab, Wrapper } from './styled';
import { RootState } from 'index';
import { useDispatch, useSelector } from 'react-redux';
import { overview, labnote } from 'store/detailedPageBt-slice';
import { Link } from 'react-router-dom';

const TabButton = () => {
  const detailTab = useSelector((state: RootState) => state.detailPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(overview());
  }, []);

  return (
    <Wrapper>
      <Tab overview={detailTab.overview} onClick={() => dispatch(overview())}>
        개요
      </Tab>
      <Tab labnote={detailTab.labnote} onClick={() => dispatch(labnote())}>
        랩 노트
      </Tab>
      <Link to="/start-project">
        <Tab>프로젝트 수정</Tab>
      </Link>
      <Tab>프로젝트 제출</Tab>
    </Wrapper>
  );
};

export default TabButton;
