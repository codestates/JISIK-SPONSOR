/*eslint-disable*/
import styled from 'styled-components';
import mainSliderImg1 from '../../../images/mainSliderImg1.png';
import mainSliderImg2 from '../../../images/mainSliderImg2.png';
// import dot from '../../../images/jisik-dot.png';
// import back from '../../../images/back-icon.png';
// import forward from '../../../images/forward-icon.png';

export const Section = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
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
  /* &:hover > li:nth-child(1) {
    transform: translateX(-100%);
  }
  &:hover > li:nth-child(2) {
    transform: translateX(0);
  } */
`;

export const Slide = styled.li`
  width: 100%;
  transition: all 0.5s;
  /* background-color: skyblue; */
`;

export const SlideCentent1 = styled.div`
  background-image: url(${mainSliderImg1});
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: 100% 100%;
  & > span {
    display: block;
    font-size: 25px;
    color: #959ca3;
    margin-bottom: 5px;
  }
  & > h2 {
    font-size: 39.06px;
    color: #212529;
    line-height: 140%;
    margin-bottom: 25px;
  }
  & > h1 {
    font-size: 61.04px;
    color: #212529;
    font-weight: 500;
    margin-bottom: 30px;
  }
  & > h1 > span {
    position: relative;
  }
  & > h1 > span:after {
    position: absolute;
    top: 0;
    left: 50%;
    width: 10px;
    height: 10px;
    display: block;
    content: '';
    clear: both;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: #7950f2;
  }
  & > p {
    font-size: 16px;
    color: #868e96;
    line-height: 160%;
    margin-bottom: 30px;
  }
`;

export const SlideCentent2 = styled.div`
  padding-left: 40%;
  background-image: url(${mainSliderImg2});
  background-repeat: no-repeat;
  background-size: 45% auto;
  background-position: 0 100%;
  & > span {
    display: block;
    font-size: 25px;
    color: #959ca3;
    margin-bottom: 5px;
  }
  & > h3 {
    font-size: 31.25px;
    color: #7950f2;
    font-weight: 300;
    line-height: 120%;
    margin-bottom: 25px;
  }
  & > h2 {
    font-size: 39.06px;
    color: #212529;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 60px;
  }
`;

export const SlideBtnWrap = styled.div`
  display: flex;
  gap: 20px;
  & > a {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    padding: 18px 35px;
    border-radius: 10px;
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
`;
