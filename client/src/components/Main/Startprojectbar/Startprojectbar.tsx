/*eslint-disable*/
import {
  Section,
  Wrap,
  Title,
  ButtonWrap,
  StartButton,
  ShowButton
} from './styled';

const Startprojectbar = () => {
  return (
    <Section>
      <Wrap>
        <Title>Ready to start your project?</Title>
        <ButtonWrap>
          <StartButton to="/start-project">프로젝트 시작하기</StartButton>
          <ShowButton to="/board">모든 프로젝트 보기</ShowButton>
        </ButtonWrap>
      </Wrap>
    </Section>
  );
};

export default Startprojectbar;
