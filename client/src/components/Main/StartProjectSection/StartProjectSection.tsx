/*eslint-disable*/
import {
  Section,
  Wrap,
  Title,
  ButtonWrap,
  StartButton,
  ShowButton
} from './styled';

const StartProjectSection = () => {
  return (
    <Section>
      <Wrap>
        <Title>Ready to start your project?</Title>
        <ButtonWrap>
          <StartButton to="/">프로젝트 시작하기</StartButton>
          <ShowButton to="/">모든 프로젝트 보기</ShowButton>
        </ButtonWrap>
      </Wrap>
    </Section>
  );
};

export default StartProjectSection;
