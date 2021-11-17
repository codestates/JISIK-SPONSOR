/*eslint-disable*/
import styled from 'styled-components';
import cloud from '../../images/cloud.png';
import YellowLine from '../../images/YellowLine.png';
import yellowcircle from '../../images/yellowcircle.png';

interface SectionProps {
  background: string;
}

interface QuestionSectionProps {
  deraction: string;
}

export const Section = styled.section<SectionProps>`
  padding: 213px 0;
  background-color: ${(props) =>
    props.background !== 'image' ? props.background : '#f1f3f5'};
  background-image: ${(props) =>
    props.background === 'image' && `url(${cloud})`};
  background-repeat: ${(props) => props.background === 'image' && 'none'};
  background-size: ${(props) => props.background === 'image' && 'cover'};

  @media all and (max-width: 1000px) {
    padding: 205px 0;
  }

  @media all and (max-width: 960px) {
    padding: 120px 0;
  }
  @media all and (max-width: 567px) {
    padding: 100px 0;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 30px;
  margin: 0 auto;
  @media all and (max-width: 620px) {
    padding: 0 15px;
  }
`;

export const BannerSection = styled.div`
  text-align: center;
  word-break: keep-all;
  & > h1 {
    font-size: 43px;
    color: #212529;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 40px;
  }
  & > p {
    font-size: 40px;
    color: #495057;
    line-height: 140%;
  }
  & > p > strong {
    color: #7950f2;
    font-weight: 600;
  }

  @media all and (max-width: 1000px) {
    & > h1 {
      font-size: 38px;
    }
    & > p {
      font-size: 35px;
    }
  }

  @media all and (max-width: 960px) {
    & > h1 {
      font-size: 33px;
    }
    & > p {
      font-size: 25px;
    }
  }

  @media all and (max-width: 567px) {
    & > h1 {
      font-size: 25px;
    }
    & > p {
      font-size: 20px;
    }
  }
`;

export const QuestionSection = styled.div<QuestionSectionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  direction: ${(props) => props.deraction === 'right' && 'rtl'};
  & div:nth-child(1) {
    width: 70%;
    padding: ${(props) => (props.deraction === 'right' ? '0 0 0 15px' : '0')};
    direction: ${(props) => props.deraction === 'right' && 'initial'};
  }
  & div:nth-child(2) {
    width: 65%;
    padding: ${(props) =>
    props.deraction === 'right' ? '0 60px 0 0' : '0 0 0 15px'};
  }
  @media all and (max-width: 620px) {
    display: block;
    & div:nth-child(1) {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }
    & div:nth-child(2) {
      width: 100%;
      max-width: 300px;
      padding: 0;
      margin: 0 auto;
    }
  }
`;

export const ImageWrap = styled.div`
  & > img {
    width: 100%;
  }
`;

export const SecondImageWrap = styled.div`
  & > img {
    width: 100%;
  }
`;

export const TextBoxWrap = styled.div`
  word-break: keep-all;
  & > h2 {
    font-size: 33px;
    color: #343a40;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 23px;
    color: #495057;
    line-height: 160%;
    margin-bottom: 30px;
  }

  & > p > span {
    background-image: url(${YellowLine});
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: 0% 120%;
  }

  @media all and (max-width: 960px) {
    & > h2 {
      font-size: 30px;
    }
    & > p {
      font-size: 20px;
    }
  }

  @media all and (max-width: 620px) {
    & > h2 {
      font-size: 20px;
    }
  }

  @media all and (max-width: 567px) {
    & > p {
      font-size: 15px;
    }
  }
`;

export const TextBoxWrap2 = styled.div`
  word-break: keep-all;
  & > h2 {
    font-size: 33px;
    color: #343a40;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 23px;
    color: #495057;
    line-height: 160%;
    margin-bottom: 30px;
  }

  & > p > span {
    background-image: url(${YellowLine});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 90%;
  }

  @media all and (max-width: 960px) {
    & > h2 {
      font-size: 30px;
    }
    & > p {
      font-size: 20px;
    }
  }

  @media all and (max-width: 620px) {
    & > h2 {
      font-size: 20px;
    }
  }

  @media all and (max-width: 567px) {
    & > p {
      font-size: 15px;
    }
  }
`;

export const TextBoxWrap3 = styled.div`
  word-break: keep-all;
  & > h2 {
    font-size: 33px;
    color: #343a40;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 23px;
    color: #495057;
    line-height: 160%;
    margin-bottom: 30px;
  }

  & > p > span {
    background-image: url(${YellowLine});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 90%;
  }

  @media all and (max-width: 960px) {
    & > h2 {
      font-size: 30px;
    }
    & > p {
      font-size: 20px;
    }
  }

  @media all and (max-width: 620px) {
    & > h2 {
      font-size: 20px;
    }
  }

  @media all and (max-width: 567px) {
    & > p {
      font-size: 15px;
    }
  }
`;

export const LinkWrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    & > a {
    position: relative;
    font-size: 20px;
    color: #343a40;
    font-weight: 500;
    padding: 20px 30px;
    border-radius: 10px;
    border: 2px solid #343a40;
  }

  & a:nth-child(1) {
    border: 1px solid;
    color: #f8f9fa;
    background-color: #7950f2;
    transition: 0.2s;
    }

  & a:nth-child(2) {
    transition: 0.2s;
    }

  & a:hover {
    transform: translateY(5px);
  }

  @media all and (max-width: 814px) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 10px;

    & > a {
      font-size: 18px;
      padding: 20px 20px;
    }
  }

  @media all and (max-width: 732px) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 10px;

    & > a {
      font-size: 15px;
      padding: 15px 15px;
    }
  }

  @media all and (max-width: 620px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    & > a {
      font-size: 15px;
      padding: 10px 10px;
    }
  }
`;

export const StartProjectSection = styled.div`
  text-align: center;
  & > h2 {
    font-size: 40px;
    color: #f8f9fa;
    line-height: 140%;
    margin-bottom: 60px;
  }
  & > div {
    z-index: 1;
    position: relative;
    display: inline-block;
  }
  & > div > a {
    z-index: 1;
    position: relative;
    display: inline-block;
    font-size: 40px;
    color: #343a40;
    font-weight: 500;
    padding: 25px 60px;
    border-radius: 10px;
    border: 3px solid #343a40;
    background-color: #f8f9fa;
    transition: 0.2s;
  }
  & > div > span {
    z-index: -1;
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    clear: both;
    border-radius: 10px;
    background-color: #343a40;
  }
  & div:hover a {
    transform: translateY(5px);
  }

  @media all and (max-width: 960px) {
    & h2 {
      font-size: 30px;
    }
    & > div > a {
      font-size: 20px;
    }
  }

  @media all and (max-width: 620px) {
    & h2 {
      font-size: 25px;
    }
    & > div > a {
      font-size: 20px;
    }
  }

  @media all and (max-width: 567px) {
    & h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }
    & > div > a {
      font-size: 16px;
    }
  }
`;
