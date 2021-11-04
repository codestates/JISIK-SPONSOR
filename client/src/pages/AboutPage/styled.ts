import styled from 'styled-components';
import cloud from '../../images/cloud.png';
import question1 from '../../images/question1.png';
import question2 from '../../images/question2.png';
import question3 from '../../images/question3.png';
import bluestar from '../../images/start-blue.png';
import yellowline from '../../images/YellowLine.png';
import yellowcircle from '../../images/yellowcircle.png';

export const Container = styled.div`
  font-size: 50px;
  font-weight: 600;
  padding: 70px;
  text-align: center;
  background-image: url(${cloud});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  font-size: 40px;
  color: #495057;
  line-height: 1.5;
  margin-top: 20px;
  font-weight: 600;
`;

export const Container2 = styled.div`
  padding: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Text2 = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #495057;
  line-height: 1.5;
  margin-top: 20px;
`;

export const Question = styled.div`
  background-image: url(${question1});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: 85% 50%;
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const Bluestar1 = styled.div`
  background-image: url(${bluestar});
  background-size: 3%;
  background-position: 4.3% 18.5%;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const YellowLine = styled.div`
  background-image: url(${yellowline});
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: 7% 67%;

  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const StartProject = styled.div`
  text-align: center;
  color: #eee;
  background-color: #7048e8;
  padding: 80px;
  line-height: 1.5;
  font-size: 32px;
`;

export const Button = styled.button`
  border-radius: 10px;
  box-sizing: border-box;
  width: 22%;
  height: 85px;
  font-size: 30px;
  font-weight: 600;
  border: 3px solid #343a40;
  box-shadow: 0 5px;
  margin-top: 50px;
`;

export const YellowCircle = styled.div`
  background-image: url(${yellowcircle});
  background-repeat: no-repeat;
  background-size: 15%;
  background-position: 64% 53%;

  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const Container3 = styled.div`
  padding: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  max-width: 1070px;
  margin-left: 430px;
  margin-bottom: 30px;
`;

export const Question1 = styled.div`
  background-image: url(${question2});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: 10% 50%;
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const Bluestar2 = styled.div`
  background-image: url(${bluestar});
  background-size: 3%;
  background-position: 45% 18.5%;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const Question3 = styled.div`
  background-image: url(${question3});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: 85% 50%;
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const YellowLine2 = styled.div`
  background-image: url(${yellowline});
  background-repeat: no-repeat;
  background-size: 12%;
  background-position: 20% 54%;

  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;
