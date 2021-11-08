/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f1f3f5;
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 25px 0;
`;

export const ImageWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 35%;
  padding: 0 60px 0 30px;
  text-align: right;
  & img {
    max-width: 100%;
  }

  @media screen and (max-width: 718px) {
    width: 100%;
    text-align: left;
    margin-bottom: 70px;
  }
`;

export const LinkWrap = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  padding: 0 30px 0 35%;
`;

export const Ul = styled.ul`
  width: 100%;
  max-width: 580px;
`;

export const Li = styled.li`
  display: inline-block;
  margin: 7.5px 30px 7.5px 0;
  & a {
    display: inline-block;
    cursor: pointer;
  }
  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    transition: all 0.3s;
  }
  & span {
    vertical-align: middle;
    font-size: 16px;
    font-weight: 500;
    color: #495057;
  }
  &:hover img {
    transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
  }
  &:hover span {
    font-weight: 600;
    transition: all 0.3s;
  }
`;
