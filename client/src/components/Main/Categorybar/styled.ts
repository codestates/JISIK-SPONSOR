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
  z-index: 2;
  position: absolute;
  bottom: 0;
  width: 35%;
  padding: 0 60px 0 30px;
  text-align: right;
  & img {
    max-width: 100%;
  }
`;

export const LinkWrap = styled.div`
  z-index: 1;
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
  }
  & img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
  & span {
    vertical-align: middle;
    font-size: 16px;
    font-weight: 500;
    color: #495057;
  }
`;
