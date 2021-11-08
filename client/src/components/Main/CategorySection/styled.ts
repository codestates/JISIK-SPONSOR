/*eslint-disable*/
import { findByLabelText } from '@testing-library/dom';
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

  @media all and (max-width: 576px) {
    width: 100%;
    padding: 5px;
  }
`;

export const ImageWrap = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0;
  width: 35%;
  padding: 0 60px 0 30px;
  text-align: right;
  & img {
    max-width: 100%;
  }

  @media all and (max-width: 576px) {
    width: 100%;
    text-align: center;
    margin-bottom: 70px;

    & img {
      width: 50%;
      padding: 0 60px;
      margin-bottom: 25px;
    }
  }
`;

export const LinkWrap = styled.div`
  z-index: 1;
  position: relative;
  top: 0;
  width: 100%;
  padding: 0 30px 0 35%;

  @media all and (max-width: 576px) {
    width: 102%;
    padding: 80px 0 0 0;
    margin-top: 30px;
    text-align: center;
  }
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

  @media all and (max-width: 374px) {
    margin: 5px 5px 5px 0;

    & span {
      font-size: 12.8px;
    }
  }
`;