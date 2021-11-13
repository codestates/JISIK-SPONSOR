import { useEffect } from 'react';
import { Container, ProjectBody } from 'components/StartProject/commonStyled';
import FaqPage from 'components/FAQ/FaqPage';
const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ProjectBody>
        <FaqPage />
      </ProjectBody>
    </Container>
  );
};

export default FAQ;
