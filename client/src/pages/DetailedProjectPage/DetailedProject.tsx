import React from 'react';
import IntroSection from '../../components/DetailedProject/IntroSection/IntroSection';
import ProjectContent from 'components/DetailedProject/ProjectContent/ProjectContent';
import Profile from 'components/DetailedProject/Profile/Profile';
import Comments from 'components/DetailedProject/Comments/Comments';
import Sponsors from 'components/DetailedProject/Sponsors/Sponsors';
import { ProjectContainer } from './styled';

const DetailedProject = () => {
  return (
    <ProjectContainer>
      <IntroSection />
      <ProjectContent />
      <Profile />
      <Comments />
      <Sponsors />
    </ProjectContainer>
  );
};

export default DetailedProject;
