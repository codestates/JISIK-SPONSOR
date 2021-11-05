/*eslint-disable*/
import { Link } from 'react-router-dom';
import {
  Section,
  Wrap,
  SliderWrap,
  Slide,
  SlideCentent1,
  SlideCentent2,
  SlideBtnWrap
} from './styled';

const SliderSection = () => {
  return (
    <Section>
      <Wrap>
        <SliderWrap>
          <Slide>
            <SlideCentent1>
              <span>Welcome</span>
              <h2>
                세상에 꼭 필요한 연구를 위한
                <br />
                크라우드 펀딩 플랫폼
              </h2>
              <h1>
                <span>지</span>
                <span>식</span>
                <span>스</span>
                <span>폰</span>
                <span>서</span>
              </h1>
              <p>
                국내 최초 연구지식 특화 크라우드 펀딩 플랫폼,
                <br />
                지식스폰서에 오신 여러분 환영합니다.
              </p>
              <SlideBtnWrap>
                <Link to="/">프로젝트 시작하기</Link>
                <Link to="/">모든 프로젝트 보기</Link>
              </SlideBtnWrap>
            </SlideCentent1>
          </Slide>
          <Slide>
            <SlideCentent2>
              <span>Welcome</span>
              <h3>IDEAS WORTH SUPPORTING</h3>
              <h2>
                세상에 필요한 지식의
                <br />
                든든한 스폰서가 되어주세요!
              </h2>
              <SlideBtnWrap>
                <Link to="/">프로젝트 시작하기</Link>
                <Link to="/">모든 프로젝트 보기</Link>
              </SlideBtnWrap>
            </SlideCentent2>
          </Slide>
        </SliderWrap>
      </Wrap>
    </Section>
  );
};

export default SliderSection;
