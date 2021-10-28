import React from 'react';
import IntroSection from '../../components/DetailedProject/IntroSection/IntroSection';
import ProjectContent from 'components/DetailedProject/ProjectContent/ProjectContent';
import Profile from 'components/DetailedProject/Profile/Profile';
import Comments from 'components/DetailedProject/Comments/Comments';
import Sponsors from 'components/DetailedProject/Sponsors/Sponsors';
import TopButton from '../../images/icons/gotop-icon.png';
import { GoTopButton, ProjectContainer } from './styled';

const DetailedProject = () => {
  return (
    <ProjectContainer>
      <IntroSection />
      <ProjectContent />
      <Profile />
      <Comments />
      <Sponsors />
      <GoTopButton href="#">
        <img src={TopButton} alt="Top-button" />
      </GoTopButton>
    </ProjectContainer>
  );
};

export default DetailedProject;
