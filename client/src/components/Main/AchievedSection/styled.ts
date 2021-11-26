/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  padding: 6rem 0;
  background-color: #fff;
  @media all and (max-width: 620px) {
    padding: 3rem 0;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 3rem;
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  & > h2 {
    font-size: 2rem;
    color: #343a40;
    font-weight: 600;
  }
  & > a {
    display: inline-block;
    font-size: 1.28rem;
    color: #fff;
    font-weight: 600;
    line-height: 140%;
    padding: 1rem 2rem;
    border-radius: 3px;
    border: 2px solid #7950f2;
    background-color: #7950f2;
    transition: 0.3s;
  }
  & > a:hover {
    color: #343a40;
    border: 2px solid #343a40;
    background-color: #fff;
    transition: 0.3s;
  }
`;
