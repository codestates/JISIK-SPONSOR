/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
  background: #7048e8;
`;

export const Wrap = styled.section`
  width: 100%;
  max-width: 960px;
  padding: 0 30px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 39.06px;
  color: #eee;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 40px;

  @media all and (max-width: 571px) {
    font-size: 33px;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;

  @media all and (max-width: 727px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StartButton = styled(Link)`
  display: inline-block;
  font-size: 25px;
  color: #343a40;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #343a40;
  padding: 25px 60px;
  background: #fff;
  margin-right: 15px;
  transition: 0.3s;

  @media all and (max-width: 727px) {
    font-size: 20px;
  }

  @media all and (max-width: 649px) {
    font-size: 15px;
  }

  @media all and (max-width: 576px) {
    font-size: 15px;
  }

  @media all and (max-width: 572px) {
    font-size: 14px;
  }

  @media all and (max-width: 567px) {
    font-size: 14px;
  }

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
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #fff;
  padding: 25px 60px;
  background: #7950f2;
  margin-left: 15px;
  transition: 0.3s;

  @media all and (max-width: 727px) {
    font-size: 20px;
  }

  @media all and (max-width: 649px) {
    font-size: 15px;
  }

  @media all and (max-width: 576px) {
    font-size: 15px;
  }

  @media all and (max-width: 572px) {
    font-size: 14px;
  }

  @media all and (max-width: 567px) {
    font-size: 14px;
  }

  &:hover {
    color: #fff;
    font-weight: 600;
    border: 3px solid #fff;
    background-color: #343a40;
    transition: 0.3s;
  }
`;
