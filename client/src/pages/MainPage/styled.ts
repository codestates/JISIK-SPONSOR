import styled from 'styled-components';
import dot from '../../images/jisik-dot.png';
import mainslider1 from '../../images/mainslider1.png';
import back from '../../images/back-icon.png';
import forward from '../../images/forward-icon.png';
import flower from '../../images/flower.png';

export const Everything = styled.div`
  width: 100vw;
`;

export const Slider1 = styled.div`
  text-align: left;
  line-height: 0.8;
  padding: 150px 420px;
`;

export const SliderText1 = styled.div`
  color: #959ca3;
  font-size: 20px;
  font-weight: 500;
`;

export const SliderText2 = styled.div`
  font-size: 19px;
`;

export const SliderText3 = styled.div`
  font-size: 30px;
  padding: 5px 0px;
`;

export const SliderText4 = styled.div`
  color: #959ca3;
  font-weight: 600;
  padding-bottom: 20px;
`;

export const Dot = styled.div`
  background-image: url(${dot});
  background-repeat: no-repeat;
  background-size: 23.5%;
  background-position: 3% 15%;
`;

export const MainSlider1 = styled.div`
  background-image: url(${mainslider1});
  background-repeat: no-repeat;
  background-size: 33%;
  background-position: 66% 63%;
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
  background-size: 2%;
  background-position: 5% 50%;
`;

export const RightSliderButton = styled.div`
  background-image: url(${forward});
  background-repeat: no-repeat;
  background-size: 2%;
  background-position: 95% 50%;
`;

export const Flower = styled.div`
  background-image: url(${flower});
  background-repeat: no-repeat;
  background-size: 20%;
`;
