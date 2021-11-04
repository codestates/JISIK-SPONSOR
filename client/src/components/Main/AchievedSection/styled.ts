/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  & > h2 {
    font-size: 20px;
    color: #343a40;
    font-weight: 600;
  }
  & > a {
    display: inline-block;
    font-size: 12.8px;
    color: #fff;
    line-height: 140%;
    padding: 10px 15px;
    border-radius: 3px;
    background-color: #7950f2;
  }
`;
