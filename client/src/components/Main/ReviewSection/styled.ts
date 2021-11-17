/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
  background-color: #f1f3f5;
  @media all and (max-width: 620px) {
    padding: 30px 0;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  @media all and (max-width: 620px) {
    padding: 0 15px;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-size: 25px;
  color: #343a40;
  font-weight: 600;
  text-align: center;
  line-height: 140%;
  margin-bottom: 30px;
  @media all and (max-width: 620px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const ReviewWrap = styled.div`
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media all and (max-width: 720px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const Li = styled.li`
  display: inline-block;
  width: 100%;
  max-width: 220px;
  text-align: center;
  & > div {
    margin-bottom: 15px;
  }
  & > div > img {
    display: inline-block;
    border-radius: 50%;
    transition: all 0.3s;
  }
  & > div > span {
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: #212529;
    margin: 5px 0;
  }
  & > div > small {
    display: block;
    font-size: 16px;
    color: #868e96;
  }
  & > p {
    font-size: 12.8px;
    color: #495057;
    line-height: 140%;
    word-break: keep-all;
  }
  &:hover > div > img {
    transform: matrix(1.02, 0, 0, 1.02, 0, 0);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  @media all and (max-width: 720px) {
    width: 100%;
    max-width: 100%;
  }
`;
