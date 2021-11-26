/*eslint-disable*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import yellowhighlight from '../../../images/yellowhighlight.png';

export const Section = styled.section`
  width: 100%;
  padding: 6rem 0;
  background: #f1f3f5;
  @media all and (max-width: 620px) {
    padding: 3rem 0;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 3rem;
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-size: 2.5rem;
  color: #343a40;
  font-weight: 600;
  text-align: center;
  line-height: 140%;
  margin-bottom: 4rem;
  & > span {
    z-index: 1;
    position: relative;
  }
  & > span:after {
    z-index: -1;
    position: absolute;
    content: '';
    clear: both;
    width: 200%;
    height: 200%;
    background-image: url(${yellowhighlight});
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 50% 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media all and (max-width: 620px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    word-break: keep-all;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  @media all and (max-width: 620px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled(Link)`
  width: 50%;
  max-width: 367px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  transition: all 0.3s;
  &:nth-child(1) > div:nth-child(1) {
    background: #b197fc;
  }
  &:nth-child(2) > div:nth-child(1) {
    background: #cddadf;
  }
  &:hover {
    transform: matrix(1.02, 0, 0, 1.02, 0, 0);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  @media all and (max-width: 620px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  text-align: center;
  & > img {
    width: auto;
    height: 16rem;
  }
`;

export const InfoWrap = styled.div`
  padding: 3.5rem 2.5rem 2.5rem;
  background: #fff;
  & > h3 {
    font-size: 1.6rem;
    color: #343a40;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  & > p {
    font-size: 1.28rem;
    color: #868e96;
    line-height: 140%;
    margin-bottom: 1.5rem;
  }
  & > span {
    display: block;
    font-size: 1.6rem;
    color: #7950f2;
    font-weight: 600;
  }
`;
