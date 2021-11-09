import { useDispatch } from 'react-redux';
import { ProjectNav, NavButton, NavButtonGroup, ResultButton } from './styled';
import { basic, budget, details, team } from 'store/startPageBt-slice';
import { useEffect } from 'react';
import { RootState } from 'index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { useHistory } from 'react-router';
function Nav() {
  const page = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();
  const history = useHistory();
  const { projects } = useSelector((state: RootState) => state.project);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  useEffect(() => {
    dispatch(basic());
  }, []);

  const submitProject = async () => {
    console.log(projects.status);
    const response = await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}/status`,
      {
        status: 'submit'
      },
      {
        withCredentials: true
      }
    );
    console.log('response', response);
    history.push('/');
  };
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
        <Link to={'/detailed-project/' + projects.path}>
          <NavButton>미리보기</NavButton>
        </Link>
        <NavButton onClick={submitProject}>제출하기</NavButton>
      </ResultButton>
    </ProjectNav>
  );
}

export default Nav;
