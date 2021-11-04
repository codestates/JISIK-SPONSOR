/*eslint-disable*/
import styled from 'styled-components';
import serviceimg from '../../../images/serviceimg.png';
import faqimg from '../../../images/faqimg.png';

export const Servicetitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  padding: 40px;
`;

export const Serviceimg = styled.div`
  background-image: url(${serviceimg});
  background-repeat: no-repeat;
  background-size: 34%;
  background-position: 18% 50%;

  padding: 10px;
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
`;

export const Serviceintro = styled.div`
  font-size: 16px;
  font-weight: 500;

  padding: 30px;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;

  background-color: pink;
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
  background-size: 37%;
  background-position: 85% 50%;
  padding: 80px;
`;

export const Faqintro = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
`;

export const Faqtext = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin-top: 10px;
  color: #868e96;
`;