/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding-bottom: 60px;
`;

export const Wrap = styled.section`
  width: 100%;
  max-width: 960px;
  padding: 0 30px;
  margin: 0 auto;
  text-align: center;
  @media all and (max-width: 620px) {
    padding: 0 15px;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
`;

export const BtnMessage = styled.div`
  margin: 30px 0;
  span {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    color: #343a40;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid #343a40;
  }
`;

export const ShowButton = styled(Link)`
  display: inline-block;
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #fff;
  padding: 25px 60px;
  background: #7950f2;
  @media all and (max-width: 620px) {
    font-size: 20px;
    padding: 20px 30px;
  }
`;
