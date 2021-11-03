import React, { useState, useEffect } from 'react';
import IntroSection from '../../components/DetailedProject/IntroSection/IntroSection';
import ProjectContent from 'components/DetailedProject/ProjectContent/ProjectContent';
import Profile from 'components/DetailedProject/Profile/Profile';
import Comments from 'components/DetailedProject/Comments/Comments';
import Sponsors from 'components/DetailedProject/Sponsors/Sponsors';
import TopButton from '../../images/icons/gotop-icon.png';
import { GoTopButton, ProjectContainer } from './styled';
import { REACT_APP_API_URL } from 'config';
import { useHistory } from 'react-router';
import { Data } from './type';

import axios from 'axios';

const DetailedProject = () => {
  const [project, setProject] = useState<any>({});
  const [projectId, setProjectId] = useState<number>(0);

  const history = useHistory();

  // console.log(project);

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
      setProjectId(id);
    } catch (err) {
      console.log(err);
      history.push('/404');
    }
  };

  return (
    <ProjectContainer>
      <IntroSection />
      <ProjectContent project={project} />
      <Profile />
      <Comments projectId={projectId} />
      <Sponsors />
      <GoTopButton href="#">
        <img src={TopButton} alt="Top-button" />
      </GoTopButton>
    </ProjectContainer>
  );
};

export default DetailedProject;
