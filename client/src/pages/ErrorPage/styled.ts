/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  text-align: center;
`;

export const Wrap = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 30px;

  & h2 {
    width: 100%;
    font-size: 30px;
    font-weight: 500;
    line-height: 120%;
  }

  & img {
    width: 50%;
    height: auto;
    margin-top: 30px;
  }
`;

export const Homebutton = styled(Link)`
  display: inline-block;
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid #fff;
  padding: 25px 60px;
  margin-top: 60px;
  background: #7950f2;
`;
