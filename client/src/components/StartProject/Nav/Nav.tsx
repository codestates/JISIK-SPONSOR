import { useDispatch } from 'react-redux';
import { ProjectNav, NavButton, NavButtonGroup, ResultButton } from './styled';
import { basic, budget, details, team } from 'store/startPageBt-slice';
import { useEffect } from 'react';
import { RootState } from 'index';
import { useSelector } from 'react-redux';

function Nav() {
  const page = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(basic());
  }, []);
  return (
    <ProjectNav>
      <NavButtonGroup>
        <NavButton basic={page.basic} onClick={() => dispatch(basic())}>
          기본 정보
        </NavButton>
        <NavButton budget={page.budget} onClick={() => dispatch(budget())}>
          예산 정보
        </NavButton>
        <NavButton details={page.details} onClick={() => dispatch(details())}>
          상세 내용
        </NavButton>
        <NavButton team={page.team} onClick={() => dispatch(team())}>
          팀 소개
        </NavButton>
      </NavButtonGroup>
      <ResultButton>
        <NavButton>미리보기</NavButton>
        <NavButton>제출하기</NavButton>
      </ResultButton>
    </ProjectNav>
  );
}

export default Nav;
