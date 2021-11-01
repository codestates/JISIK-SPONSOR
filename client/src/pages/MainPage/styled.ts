import styled from 'styled-components';
import dot from '../../images/jisik-dot.png';
import mainslider1 from '../../images/mainslider1.png';
import back from '../../images/back-icon.png';
import forward from '../../images/forward-icon.png';
import flower from '../../images/flower.png';
import humanities from '../../images/humanities.png';
import social from '../../images/social.png';
import natural from '../../images/natural.png';
import engineering from '../../images/engineering.png';
import medicine from '../../images/medicine.png';
import agricultural from '../../images/agricultural.png';
import artistry from '../../images/artistry.png';
import combination from '../../images/combination.png';
import serviceimg from '../../images/serviceimg.png';
import faqimg from '../../images/faqimg.png';
import kimimg from '../../images/kimimg.png';
import naimg from '../../images/naimg.png';
import jisikimg from '../../images/jisikimg.png';

export const Slider1 = styled.div`
  text-align: left;
  line-height: 0.8;
  padding: 30px 420px;
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
  background-size: 10%;
  padding: 90px;
  margin: 60px;
  margin-left: 550px;
`;

export const CategoryLine = styled.div`
  font-size: 20px;
  margin: -80px 150px;
  display: grid;
  grid-template-columns: repeat(4, 120px);
  column-gap: 35px;
  row-gap: 30px;

  color: #343a40;
  font-weight: 500;
`;

export const Humanities = styled.div`
  background-image: url(${humanities});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 40.8% 3%;
`;

export const Social = styled.div`
  background-image: url(${social});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 49.4% 3%;
`;

export const Natural = styled.div`
  background-image: url(${natural});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 57.7% 3%;
`;

export const Engineering = styled.div`
  background-image: url(${engineering});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 66.2% 3%;
`;

export const Medicine = styled.div`
  background-image: url(${medicine});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 40.8% 36.5%;
`;

export const Agricultural = styled.div`
  background-image: url(${agricultural});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 49.3% 36%;
`;

export const Artistry = styled.div`
  background-image: url(${artistry});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 57.7% 36.7%;
`;

export const Combination = styled.div`
  background-image: url(${combination});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 66.3% 36.7%;
`;

export const IngProject = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1.12fr 1fr;

  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const IngProjectButton = styled.button`
  color: #eee;
  background-color: #7048e8;
  border-radius: 5px;
  width: 12%;
  height: 35px;
  border: 1px solid;
`;

export const Servicetitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  padding: 60px;
`;

export const Serviceimg = styled.div`
  background-image: url(${serviceimg});
  background-repeat: no-repeat;
  background-position: 36%;
  padding: 100px;
`;

export const Serviceintro = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 580px;
`;

export const Servicetext = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin-top: 10px;
  color: #868e96;
`;

export const Seemore1 = styled.div`
  font-size: 16px;
  margin-top: 15px;
  color: #7950f2;
`;

export const Faqimg = styled.div`
  background-image: url(${faqimg});
  background-repeat: no-repeat;
  background-position: 36%;
  padding: 100px;
`;

export const Faqintro = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 580px;
`;

export const Faqtext = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin-top: 10px;
  color: #868e96;
`;

export const Endproject = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1.12fr 1fr;

  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Review = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  padding: 60px;
`;

export const Reviewimg1 = styled.div`
  background-image: url(${kimimg});
  background-repeat: no-repeat;
  background-position: 30%;
  padding: 60px;
`;

export const Reviewer1 = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 555px;
`;

export const Reviewerjob = styled.div`
  font-size: 15px;
  margin-left: 7px;
  margin-top: 3px;
  font-weight: 400;
  color: #868e96;
`;

export const Reviewtext = styled.div`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  margin-right: 700px;
  margin-top: 30px;
`;

export const Reviewimg2 = styled.div`
  background-image: url(${naimg});
  background-repeat: no-repeat;
  background-position: 30%;
  padding: 60px;
`;

export const Reviewer2 = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 555px;
`;

export const Reviewerjob2 = styled.div`
  font-size: 15px;
  margin-left: 14px;
  margin-top: 3px;
  font-weight: 400;
  color: #868e96;
`;

export const Reviewtext2 = styled.div`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  margin-right: 700px;
  margin-top: 30px;
`;

export const Reviewimg3 = styled.div`
  background-image: url(${jisikimg});
  background-repeat: no-repeat;
  background-position: 30%;
  padding: 60px;
`;

export const Reviewer3 = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 555px;
`;

export const Reviewerjob3 = styled.div`
  font-size: 15px;
  margin-left: -7px;
  margin-top: 3px;
  font-weight: 400;
  color: #868e96;
`;

export const Reviewtext3 = styled.div`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  margin-right: 700px;
  margin-top: 30px;
`;

export const Mainstartproject = styled.div`
  font-size: 40px;
  text-align: center;
  color: #eee;
  background-color: #7048e8;
  padding: 70px;
  line-height: 1.5;
`;

export const Button = styled.button`
  border-radius: 10px;
  box-sizing: border-box;
  width: 17%;
  height: 78px;
  font-size: 25px;
  font-weight: 600;
  border: 3px solid #343a40;
  margin-top: 30px;
  margin-right: 30px;
`;

export const Button2 = styled.button`
  border-radius: 10px;
  box-sizing: border-box;
  width: 17%;
  height: 78px;
  font-size: 25px;
  font-weight: 600;
  border: 3px solid #ffffff;
  margin-top: 30px;
  color: #ffffff;
  background-color: #7950f2;
`;
