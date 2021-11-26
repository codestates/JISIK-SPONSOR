/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 6rem 0;
  background: #7048e8;
  @media all and (max-width: 620px) {
    padding: 3rem 0;
  }
`;

export const Wrap = styled.section`
  width: 100%;
  max-width: 960px;
  padding: 0 3rem;
  margin: 0 auto;
  text-align: center;
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.906rem;
  color: #eee;
  line-height: 1.4;
  font-weight: 500;
  margin-bottom: 4rem;
  @media all and (max-width: 620px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  @media all and (max-width: 620px) {
    a {
      font-size: 2rem;
    }
  }
  @media all and (max-width: 480px) {
    gap: 1.5rem;
    a {
      font-size: 1.6rem;
      padding: 2rem 0;
    }
  }
  @media all and (max-width: 320px) {
    a {
      font-size: 1.28rem;
    }
  }
`;

export const StartButton = styled(Link)`
  display: inline-block;
  width: 100%;
  max-width: 320px;
  font-size: 2.5rem;
  color: #343a40;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #343a40;
  padding: 2.5rem 0;
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
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #fff;
  padding: 2.5rem 0;
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
