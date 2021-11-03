import React from 'react';
import { Container, ProjectBody } from 'components/StartProject/commonStyled';
import CreateTitle from 'components/CreateTitle/CreateTitle';
function Start() {
  return (
    <Container>
      <ProjectBody>
        <CreateTitle />
      </ProjectBody>
    </Container>
  );
}

export default Start;
