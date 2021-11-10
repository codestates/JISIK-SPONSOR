import React from 'react';
import { Container, ProjectBody } from 'components/StartProject/commonStyled';
import FaqPage from 'components/FAQ/FaqPage';
const FAQ = () => {
  return (
    <Container>
      <ProjectBody>
        <FaqPage />
      </ProjectBody>
    </Container>
  );
};

export default FAQ;
