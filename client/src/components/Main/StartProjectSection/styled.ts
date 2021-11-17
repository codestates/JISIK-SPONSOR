/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
  background: #7048e8;
  @media all and (max-width: 620px) {
    padding: 30px 0;
  }
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

export const Title = styled.h2`
  font-size: 39.06px;
  color: #eee;
  line-height: 1.4;
  font-weight: 500;
  margin-bottom: 40px;
  @media all and (max-width: 620px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  @media all and (max-width: 620px) {
    a {
      font-size: 20px;
    }
  }
  @media all and (max-width: 480px) {
    gap: 15px;
    a {
      font-size: 16px;
      padding: 20px 0;
    }
  }
  @media all and (max-width: 320px) {
    a {
      font-size: 12.8px;
    }
  }
`;

export const StartButton = styled(Link)`
  display: inline-block;
  width: 100%;
  max-width: 320px;
  font-size: 25px;
  color: #343a40;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #343a40;
  padding: 25px 0;
  background: #fff;
  transition: 0.3s;
  &:hover {
    color: #fff;
    font-weight: 600;
    border: 3px solid #fff;
    background-color: #343a40;
    transition: 0.3s;
  }
`;

export const ShowButton = styled(Link)`
  display: inline-block;
  max-width: 320px;
  width: 100%;
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #fff;
  padding: 25px 0;
  background: #7950f2;
  transition: 0.3s;
  &:hover {
    color: #fff;
    font-weight: 600;
    border: 3px solid #fff;
    background-color: #343a40;
    transition: 0.3s;
  }
`;
