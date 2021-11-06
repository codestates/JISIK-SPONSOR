import React, { useState, useEffect } from 'react';
import IntroSection from '../../components/DetailedProject/IntroSection/IntroSection';
import ProjectContent from 'components/DetailedProject/ProjectContent/ProjectContent';
import Profile from 'components/DetailedProject/Profile/Profile';
import Comments from 'components/DetailedProject/Comments/Comments';
import Sponsors from 'components/DetailedProject/Sponsors/Sponsors';
import TabButton from 'components/DetailedProject/TabButton/TabButton';
import TopButton from '../../images/icons/gotop-icon.png';
import { GoTopButton, ProjectContainer, Wrapper } from './styled';
import { getProjectId } from 'store/projectState-slice';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from 'index';

import { REACT_APP_API_URL } from 'config';
import { useHistory } from 'react-router';
import { RootState } from 'index';
import { Data, ProjectTeam, ProjectTeamMember } from './type';
import axios from 'axios';

const DetailedProject = () => {
  const [project, setProject] = useState<any>({});
  const [teams, setTeams] = useState<ProjectTeam[]>([]);
  const [teamMember, setTeamMember] = useState<ProjectTeamMember[]>([]);

  const detailTab = useSelector((state: RootState) => state.detailPage);
  const history = useHistory();
  const dispatch = useDispatch();

  //최초 렌더링 시 특정 프로젝트의 데이터를 불러오는 함수 실행
  useEffect(() => {
    getProjects();
  }, []);

  // 특정 프로젝트에 데이터를 불러오는 함수
  const getProjects = async () => {
    try {
      const url = window.location.pathname.slice(18);
      const response = await axios.get<Data>(
        `${REACT_APP_API_URL}/projects/single?slug=${url}`,
        {
          withCredentials: true
        }
      );
      const { projects } = response.data;
      const { id } = response.data.projects;
      setProject(projects);
      setTeams(projects.project_teams);
      setTeamMember(projects.project_team_members);
      dispatch(getProjectId(id));
    } catch (err) {
      console.log(err);
      history.push('/404');
    }
  };

  return (
    <ProjectContainer>
      <IntroSection />
      <TabButton />
      {detailTab.overview && (
        <>
          <ProjectContent project={project} />
          {teams && <Profile teams={teams} teamMember={teamMember} />}
          <Comments project={project} setProject={setProject} />
          <Sponsors />
          <GoTopButton href="#">
            <img src={TopButton} alt="Top-button" />
          </GoTopButton>
        </>
      )}
      {detailTab.labnote && (
        <Wrapper>추후 랩 노트를 위한 페이지입니다.</Wrapper>
      )}
    </ProjectContainer>
  );
};

export default DetailedProject;
