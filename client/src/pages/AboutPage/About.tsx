/*eslint-disable*/
import {
  Section,
  Wrap,
  BannerSection,
  QuestionSection,
  ImageWrap,
  SecondImageWrap,
  TextBoxWrap,
  TextBoxWrap2,
  TextBoxWrap3,
  LinkWrap,
  StartProjectSection
} from './styled';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import question1 from '../../images/question1.png';
import question2 from '../../images/question2.png';
import question3 from '../../images/question3.png';
import Fade from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const customDirectionUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 200px, 0);
  }
  
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `;

  const customDirectionLeft = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-200px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
`;

  const customDirectionRight = keyframes`
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
`;

  return (
    <div>
      <Section background="image">
        <Wrap>
          <Fade keyframes={customDirectionUp}>
            <BannerSection>
              <h1>
                잠재력 있는 연구와 <br className="br576" />
                잠재적인 지지자를 연결합니다.
              </h1>
              <p>
                국내 최초 연구지식 크라우드 펀딩 플랫폼,
                <br />
                <strong>지식스폰서</strong>를 소개합니다.
              </p>
            </BannerSection>
          </Fade>
        </Wrap>
      </Section>
      <Section background="#fff">
        <Wrap>
          <Fade keyframes={customDirectionLeft}>
            <QuestionSection deraction="left">
              <TextBoxWrap>
                <h2>1. 꼭 대학에 가야 연구할 수 있나요?</h2>
                <p>
                  지식스폰서에서는 풍성한 지적호기심, 타당한 연구가설,
                  <br />
                  그리고 하고자하는 의지만 있다면
                  <br />
                  <span>
                    누구나 나이, 학력, 경력과 무관하게
                  </span>
                  <br />
                  자신의 아이디어를 세상에 알리고 실현시킬 수 있어요.
                </p>
                <LinkWrap>
                  <Link to="/board">프로젝트 확인하기</Link>
                  <Link to="/faq">FAQ 보기</Link>
                </LinkWrap>
              </TextBoxWrap>
              <ImageWrap>
                <img src={question1} />
              </ImageWrap>
            </QuestionSection>
          </Fade>
        </Wrap>
      </Section>
      <Section background="#f1f3f5">
        <Wrap>
          <Fade keyframes={customDirectionRight}>
            <QuestionSection deraction="right">
              <TextBoxWrap2>
                <h2>2. 간단하고 빠른 프로젝트 올리기</h2>
                <p>
                  지식스폰서는 ‘연구지식’에만 특화된 크라우드 펀딩 플랫폼으로,
                  <br />
                  기존 서비스의 <span>복잡한 절차와 번거로움</span>을 덜어내고
                  <br />
                  자체적인 템플릿 개발을 통해
                  <br />
                  간단하고 빠르게 자신의 프로젝트를 올릴 수 있어요.
                </p>
                <LinkWrap>
                  <Link to="/board">프로젝트 확인하기</Link>
                  <Link to="/faq">FAQ 보기</Link>
                </LinkWrap>
              </TextBoxWrap2>
              <SecondImageWrap>
                <img src={question2} />
              </SecondImageWrap>
            </QuestionSection>
          </Fade>
        </Wrap>
      </Section>
      <Section background="#fff">
        <Wrap>
          <Fade keyframes={customDirectionLeft}>
            <QuestionSection deraction="left">
              <TextBoxWrap3>
                <h2>3. 커피 한 잔 가격으로 프로젝트 참여 가능</h2>
                <p>
                  지식스폰서에서는 <span>커피 한 잔 가격만</span>으로도
                  <br />
                  의미있고 흥미로운 프로젝트에 참여하고,
                  <br />
                  연구자와 교류하며 연구 결과를 받아볼 수 있어요.
                </p>
                <LinkWrap>
                  <Link to="/board">프로젝트 확인하기</Link>
                  <Link to="/faq">FAQ 보기</Link>
                </LinkWrap>
              </TextBoxWrap3>
              <ImageWrap>
                <img src={question3} />
              </ImageWrap>
            </QuestionSection>
          </Fade>
        </Wrap>
      </Section>
      <Section background="#7950F2">
        <Wrap>
          <Fade keyframes={customDirectionUp}>
            <StartProjectSection>
              <h2>
                지금 지식스폰서를 통해 성공적으로 진행되고 있는
                <br />
                프로젝트를 만나보세요!
              </h2>
              <div>
                <Link to="/start">프로젝트 시작하기</Link>
                <span></span>
              </div>
            </StartProjectSection>
          </Fade>
        </Wrap>
      </Section>
    </div>
  );
};

export default About;
