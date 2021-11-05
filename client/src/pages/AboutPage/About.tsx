/*eslint-disable*/
import {
  Section,
  Wrap,
  BannerSection,
  QuestionSection,
  ImageWrap,
  TextBoxWrap,
  StartProjectSection
} from './styled';
import { Link } from 'react-router-dom';
import question1 from '../../images/question1.png';
import question2 from '../../images/question2.png';
import question3 from '../../images/question3.png';
// import bluestar from '../../images/start-blue.png';
// import yellowline from '../../images/YellowLine.png';
// import yellowcircle from '../../images/yellowcircle.png';

const About = () => {
  return (
    <div>
      <Section background="image">
        <Wrap>
          <BannerSection>
            <h1>
              잠재력 있는 연구와
              <br className="br576" />
              잠재적인 지지자를 연결합니다.
            </h1>
            <p>
              국내 최초 연구지식 크라우드 펀딩 플랫폼,
              <br />
              <strong>지식스폰서</strong>를 소개합니다.
            </p>
          </BannerSection>
        </Wrap>
      </Section>
      <Section background="#fff">
        <Wrap>
          <QuestionSection deraction="left">
            <TextBoxWrap>
              <h2>1. 꼭 대학에 가야 연구할 수 있나요?</h2>
              <p>
                지식스폰서에서는 풍성한 지적호기심, 타당한 연구가설,
                <br />
                그리고 하고자하는 의지만 있다면
                <br />
                누구나 나이, 학력, 경력과 무관하게
                <br />
                자신의 아이디어를 세상에 알리고 실현시킬 수 있어요.
              </p>
            </TextBoxWrap>
            <ImageWrap>
              <img src={question1} />
            </ImageWrap>
          </QuestionSection>
        </Wrap>
      </Section>
      <Section background="#f1f3f5">
        <Wrap>
          <QuestionSection deraction="right">
            <TextBoxWrap>
              <h2>2. 간단하고 빠른 프로젝트 올리기</h2>
              <p>
                지식스폰서는 ‘연구지식’에만 특화된 크라우드 펀딩 플랫폼으로,
                <br />
                기존 서비스의 복잡한 절차와 번거로움을 덜어내고
                <br />
                자체적인 템플릿 개발을 통해
                <br />
                간단하고 빠르게 자신의 프로젝트를 올릴 수 있어요.
              </p>
            </TextBoxWrap>
            <ImageWrap>
              <img src={question2} />
            </ImageWrap>
          </QuestionSection>
        </Wrap>
      </Section>
      <Section background="#fff">
        <Wrap>
          <QuestionSection deraction="left">
            <TextBoxWrap>
              <h2>3. 커피 한 잔 가격으로 프로젝트 참여 가능</h2>
              <p>
                지식스폰서에서는 커피 한 잔 가격만으로도
                <br />
                의미있고 흥미로운 프로젝트에 참여하고,
                <br />
                연구자와 교류하며 연구 결과를 받아볼 수 있어요.
              </p>
            </TextBoxWrap>
            <ImageWrap>
              <img src={question3} />
            </ImageWrap>
          </QuestionSection>
        </Wrap>
      </Section>
      <Section background="#7950F2">
        <Wrap>
          <StartProjectSection>
            <h2>
              지금 지식스폰서를 통해 성공적으로 진행되고 있는
              <br />
              프로젝트를 만나보세요!
            </h2>
            <div>
              <Link to="/">프로젝트 시작하기</Link>
              <span></span>
            </div>
          </StartProjectSection>
        </Wrap>
      </Section>
    </div>
  );
};

export default About;
