/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
  text-align: center;
  background: #7950f2;
`;

export const Wrap = styled.section`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  img {
    width: 100%;
    max-width: 600px;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 31.25px;
    line-height: 140%;
    color: #f8f9fa;
    margin-bottom: 40px;
  }
`;

export const Homebutton = styled(Link)`
  display: inline-block;
  font-size: 25px;
  color: #fff;
  font-weight: 500;
  padding: 25px 60px;
  border-radius: 10px;
  border: 3px solid #fff;
  background: #7950f2;
  transition: all 0.3s;
  :hover {
    color: #343a40;
    background: #fff;
    transition: all 0.3s;
    border: 3px solid #343a40;
  }
`;
