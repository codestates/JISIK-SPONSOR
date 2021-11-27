/*eslint-disable*/
import styled from 'styled-components';
import mainSliderImg1 from '../../../images/mainSliderImg1.png';
import mainSliderImg2 from '../../../images/mainSliderImg2.png';
import back from '../../../images/back-icon.png';
import forward from '../../../images/forward-icon.png';

export const Section = styled.section`
  padding: 6rem 0;
  background-color: #fff;
  @media all and (max-width: 620px) {
    padding: 4rem 0;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: auto;
  padding: 0 3rem;
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const SliderWrap = styled.ul`
  position: relative;
  overflow: hidden;

  & > li:nth-child(1) {
    position: relative;
  }

  & > li:nth-child(2) {
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(100%);
  }

  &.selected-slide-index-1 {
    li:nth-child(1) {
      transform: translateX(-100%);
    }
    li:nth-child(2) {
      transform: translateX(0);
    }
  }
`;

export const Slide = styled.li`
  width: 100%;
  transition: all 0.5s;
`;

export const SlideCentent1 = styled.div`
  background-image: url(${mainSliderImg1});
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: 100% 100%;
  & > span {
    display: block;
    font-size: 2.5rem;
    color: #959ca3;
    margin-bottom: 0.5rem;
  }
  & > h2 {
    font-size: 3.906rem;
    color: #212529;
    line-height: 140%;
    margin-bottom: 2.5rem;
  }
  & > h1 {
    font-size: 6.104rem;
    color: #212529;
    font-weight: 500;
    margin-bottom: 3rem;
  }
  & > h1 > span {
    position: relative;
  }
  & > h1 > span:after {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1rem;
    height: 1rem;
    display: block;
    content: '';
    clear: both;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: #7950f2;
  }
  & > p {
    font-size: 1.6rem;
    color: #868e96;
    line-height: 160%;
    margin-bottom: 3rem;
  }

  @media all and (max-width: 940px) {
    background-image: url(${mainSliderImg1});
    background-repeat: no-repeat;
    background-size: auto 60%;
    background-position: 80% 90%;
    width: 100%;
    & span {
      font-size: 2.2rem;
    }
    & h1 > span {
      font-size: 5.5rem;
    }

    & h2 {
      font-size: 3.5rem;
    }

    & p {
      font-size: 1.5rem;
    }
  }

  @media all and (max-width: 620px) {
    background-image: url(${mainSliderImg1});
    background-repeat: no-repeat;
    background-size: auto 40%;
    background-position: 50% 74%;
    width: 100%;
    & span {
      text-align: center;
    }
    & h2 {
      text-align: center;
      font-size: 2rem;
    }
    & h1 {
      text-align: center;
      font-size: 3.125rem;
      margin-bottom: 1rem;
    }
    & p {
      text-align: center;
      font-size: 1.28rem;
    }
  }
`;

export const SlideCentent2 = styled.div`
  padding-left: 45%;
  background-image: url(${mainSliderImg2});
  background-repeat: no-repeat;
  background-size: 55% auto;
  background-position: 0 90%;

  & > span {
    display: block;
    font-size: 2.5rem;
    color: #959ca3;
    margin-bottom: 0.5rem;
  }
  & > h3 {
    font-size: 3.125rem;
    color: #7950f2;
    font-weight: 300;
    line-height: 120%;
    margin-bottom: 2.5rem;
  }
  & > h2 {
    word-break: keep-all;
    font-size: 3.906rem;
    color: #212529;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 10rem;
  }

  @media all and (max-width: 940px) {
    padding-left: 35%;
    background-image: url(${mainSliderImg2});
    background-repeat: no-repeat;
    background-size: auto 60%;
    background-position: 5% 100%;
    & h3 {
      font-size: 2.5rem;
    }
    & h2 {
      font-size: 3.125rem;
    }
  }

  @media all and (max-width: 760px) {
    padding-left: 20%;
  }

  @media all and (max-width: 620px) {
    background-image: url(${mainSliderImg2});
    background-repeat: no-repeat;
    background-size: auto 40%;
    background-position: 50% 65%;
    width: 100%;
    padding: 0;
    text-align: center;
    & span {
      font-size: 2rem;
    }
    & h2 {
      font-size: 2.5rem;
    }
    & h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
`;

export const SlideBtnWrap = styled.div`
  display: flex;
  gap: 2rem;
  & > a {
    display: inline-block;
    font-size: 2rem;
    font-weight: 500;
    padding: 1.8rem 3.5rem;
    border-radius: 1rem;
    transition: 0.3s;
  }
  & > a:nth-child(1) {
    color: #fff;
    border: 3px solid #7950f2;
    background-color: #7950f2;
  }
  & > a:nth-child(2) {
    color: #343a40;
    border: 3px solid #343a40;
    background-color: #fff;
  }
  & > a:hover {
    color: #fff;
    font-weight: 600;
    border: 3px solid #343a40;
    background-color: #343a40;
    transition: 0.3s;
  }

  @media all and (max-width: 940px) {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    flex-direction: row;
    & a {
      font-size: 1.8rem;
      border-radius: 5px;
    }
  }

  @media all and (max-width: 620px) {
    justify-content: center;
    & a {
      word-break: keep-all;
      text-align: center;
      line-height: 1.4;
      font-size: 1.6rem;
      padding: 1.5rem 2.5rem;
      margin-top: 8rem;
    }
  }
  @media all and (max-width: 480px) {
    gap: 0.5rem;
    & a {
      width: 100%;
      font-size: 1.28rem;
      padding: 1.5rem 1.8rem;
    }
  }
`;

export const SliderButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
`;

export const SliderButton = styled.button`
  display: inline-block;
  padding: 0.8rem 0.8rem;
  border-radius: 10px;
  transition: 0.3s;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  color: #343a40;
  border: 0px solid #343a40;
  background-color: #ced4da;

  &:hover {
    color: #fff;
    border: 0px solid #343a40;
    background-color: #bebebe;
    transition: 0.3s;
    cursor: pointer;
  }

  &.is-selected-true {
    color: #fff;
    border: 0px solid #7950f2;
    background-color: #7950f2;
  }
`;

export const InequalWrap = styled.div`
  display: flex;
`;

export const BackIcon = styled.div`
  display: inline-block;
  position: absolute;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 0 auto;
  margin-left: -15%;
  margin-top: -29%;

  padding: 3rem;
  cursor: pointer;

  @media all and (max-width: 1150px) {
    margin-left: -8%;
    margin-top: -29%;
  }
  @media all and (max-width: 1024px) {
    margin-left: -5%;
    margin-top: -29%;
  }
  @media all and (max-width: 960px) {
    display: none;
  }
`;

export const FowardIcon = styled.div`
  display: inline-block;
  position: absolute;
  background-image: url(${forward});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-left: 100%;
  margin-top: -29%;

  padding: 3rem;
  cursor: pointer;

  @media all and (max-width: 1150px) {
    margin-left: 98%;
    margin-top: -29%;
  }
  @media all and (max-width: 1024px) {
    margin-left: 92%;
    margin-top: -29%;
  }
  @media all and (max-width: 960px) {
    display: none;
  }
`;
