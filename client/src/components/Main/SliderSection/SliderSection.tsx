/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Section,
  Wrap,
  SliderWrap,
  InequalWrap,
  BackIcon,
  FowardIcon,
  Slide,
  SlideCentent1,
  SlideCentent2,
  SlideBtnWrap,
  SliderButtonWrapper,
  SliderButton
} from './styled';

const SliderSection = () => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0)

  useEffect(() => {
    const switchSelectedSlideIndex = setTimeout(() => {
      if (selectedSlideIndex === 0) setSelectedSlideIndex(1)
      else setSelectedSlideIndex(0)
    }, 3000)

    return () => clearTimeout(switchSelectedSlideIndex)
  }, [selectedSlideIndex])

  const moveToPrevSlide = () => {
    setSelectedSlideIndex(0)
  }
  const moveToNextSlide = () => {
    setSelectedSlideIndex(1)
  }

  return (
    <Section>
      <InequalWrap>
      </InequalWrap>
      <Wrap>
        <SliderWrap className={`selected-slide-index-${selectedSlideIndex}`}>
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
                <Link to="/start-project">프로젝트 시작하기</Link>
                <Link to="/board">모든 프로젝트 보기</Link>
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
                <Link to="/start-project">프로젝트 시작하기</Link>
                <Link to="/board">모든 프로젝트 보기</Link>
              </SlideBtnWrap>
            </SlideCentent2>
          </Slide>
        </SliderWrap>
        <SliderButtonWrapper>
          <SliderButton onClick={moveToPrevSlide} className={`is-selected-${selectedSlideIndex === 0}`} />
          <SliderButton onClick={moveToNextSlide} className={`is-selected-${selectedSlideIndex === 1}`} />
        </SliderButtonWrapper>
        <BackIcon onClick={moveToPrevSlide}></BackIcon>
        <FowardIcon onClick={moveToNextSlide}></FowardIcon>
      </Wrap>
    </Section>
  );
};

export default SliderSection;
