import { useDispatch } from 'react-redux';
import {
  Wrap,
  ProjectNav,
  NavButton,
  NavButtonGroup,
  ResultButton
} from './styled';
import { basic, budget, details, team } from 'store/startPageBt-slice';
import { useEffect } from 'react';
import { RootState } from 'index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { useHistory } from 'react-router';
import { showMiniMoal, insertText } from 'store/modal-slice';
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
    dispatch(showMiniMoal(true));
    dispatch(
      insertText(
        `프로젝트가 성공적으로 제출되었습니다.
        검토 후 승인을 받으면 펀딩을 진행하실 수 있습니다.`
      )
    );
  };
  return (
    <Wrap>
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
    </Wrap>
  );
}

export default Nav;
