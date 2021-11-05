/*eslint-disable*/
import styled from 'styled-components';
import dot from '../../../images/jisik-dot.png';
import mainslider1 from '../../../images/mainslider1.png';
import back from '../../../images/back-icon.png';
import forward from '../../../images/forward-icon.png';

export const Slider1 = styled.div`
  text-align: left;
  line-height: 0.8;
  padding: 80px;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const SliderText1 = styled.div`
  color: #959ca3;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;

export const SliderText2 = styled.div`
  font-size: 42px;
  font-weight: 500;
  line-height: 1.5;
`;

export const SliderText3 = styled.div`
  font-size: 65px;
  font-weight: 600;
  line-height: 1.5;
  padding: 30px 0px;
`;

export const SliderText4 = styled.div`
  color: #959ca3;
  line-height: 1.5;
  font-weight: 500;
  padding-bottom: 20px;
`;

export const Dot = styled.div`
  background-image: url(${dot});
  background-repeat: no-repeat;
  background-size: 23.5%;
  background-position: 3.3% 15%;
`;

export const MainSliderimg = styled.div`
  background-image: url(${mainslider1});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: 100% 83%;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const SliderButton1 = styled.button`
  box-sizing: border-box;
  border-radius: 10px;
  width: 25%;
  height: 70px;
  font-size: 20px;
  font-weight: 600;
  border: 0px solid #343a40;
  color: #eee;
  background-color: #7048e8;
`;

export const SliderButton2 = styled.button`
  margin-left: 25px;
  box-sizing: border-box;
  border-radius: 10px;
  width: 25%;
  height: 70px;
  font-size: 20px;
  font-weight: 600;
  border: 3px solid #343a40;
  color: black;
  background-color: #eee;
`;

export const LeftSliderButton = styled.div`
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: 5%;
  background-position: 0% 50%;

  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const RightSliderButton = styled.div`
  background-image: url(${forward});
  background-repeat: no-repeat;
  background-size: 5%;
  background-position: 100% 50%;

  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;
