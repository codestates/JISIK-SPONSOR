/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
`;

export const Wrap = styled.section`
  width: 100%;
  max-width: 960px;
  padding: 0 30px;
  margin: 0 auto;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  width: 100%;
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
`;
