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
  padding: 21.3rem 0;
  background-color: ${(props) =>
    props.background !== 'image' ? props.background : '#f1f3f5'};
  background-image: ${(props) =>
    props.background === 'image' && `url(${cloud})`};
  background-repeat: ${(props) => props.background === 'image' && 'none'};
  background-size: ${(props) => props.background === 'image' && 'cover'};

  @media all and (max-width: 1000px) {
    padding: 20.5rem 0;
  }

  @media all and (max-width: 960px) {
    padding: 12rem 0;
  }
  @media all and (max-width: 567px) {
    padding: 10rem 0;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 3rem;
  margin: 0 auto;
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const BannerSection = styled.div`
  text-align: center;
  word-break: keep-all;
  & > h1 {
    font-size: 4.3rem;
    color: #212529;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 4rem;
  }
  & > p {
    font-size: 4rem;
    color: #495057;
    line-height: 140%;
  }
  & > p > strong {
    color: #7950f2;
    font-weight: 600;
  }

  @media all and (max-width: 1000px) {
    & > h1 {
      font-size: 3.8rem;
    }
    & > p {
      font-size: 3.5rem;
    }
  }

  @media all and (max-width: 960px) {
    & > h1 {
      font-size: 3.3rem;
    }
    & > p {
      font-size: 2.5rem;
    }
  }

  @media all and (max-width: 567px) {
    & > h1 {
      font-size: 2.5rem;
    }
    & > p {
      font-size: 2rem;
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
      margin-bottom: 2rem;
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
    font-size: 3.3rem;
    color: #343a40;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 2rem;
  }
  & > p {
    font-size: 2.3rem;
    color: #495057;
    line-height: 160%;
    margin-bottom: 3rem;
  }

  & > p > span {
    background-image: url(${YellowLine});
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: 0% 120%;
  }

  @media all and (max-width: 960px) {
    & > h2 {
      font-size: 3rem;
    }
    & > p {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 620px) {
    & > h2 {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 567px) {
    & > p {
      font-size: 1.5rem;
    }
  }
`;

export const TextBoxWrap2 = styled.div`
  word-break: keep-all;
  & > h2 {
    font-size: 3.3rem;
    color: #343a40;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 2rem;
  }
  & > p {
    font-size: 2.3rem;
    color: #495057;
    line-height: 160%;
    margin-bottom: 3rem;
  }

  & > p > span {
    background-image: url(${YellowLine});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 90%;
  }

  @media all and (max-width: 960px) {
    & > h2 {
      font-size: 3rem;
    }
    & > p {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 620px) {
    & > h2 {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 567px) {
    & > p {
      font-size: 1.5rem;
    }
  }
`;

export const TextBoxWrap3 = styled.div`
  word-break: keep-all;
  & > h2 {
    font-size: 3.3rem;
    color: #343a40;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 2rem;
  }
  & > p {
    font-size: 2.3rem;
    color: #495057;
    line-height: 160%;
    margin-bottom: 3rem;
  }

  & > p > span {
    background-image: url(${YellowLine});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 90%;
  }

  @media all and (max-width: 960px) {
    & > h2 {
      font-size: 3rem;
    }
    & > p {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 620px) {
    & > h2 {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 567px) {
    & > p {
      font-size: 1.5rem;
    }
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & > a {
    position: relative;
    font-size: 2rem;
    color: #343a40;
    font-weight: 500;
    padding: 2rem 3rem;
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
    gap: 1rem;

    & > a {
      font-size: 1.8rem;
      padding: 2rem 2rem;
    }
  }

  @media all and (max-width: 732px) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 1rem;

    & > a {
      font-size: 1.5rem;
      padding: 1.5rem;
    }
  }

  @media all and (max-width: 620px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    & > a {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;

export const StartProjectSection = styled.div`
  text-align: center;
  & > h2 {
    font-size: 4rem;
    color: #f8f9fa;
    line-height: 140%;
    margin-bottom: 6rem;
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
    font-size: 4rem;
    color: #343a40;
    font-weight: 500;
    padding: 2.5rem 6rem;
    border-radius: 10px;
    border: 3px solid #343a40;
    background-color: #f8f9fa;
    transition: 0.2s;
  }
  & > div > span {
    z-index: -1;
    position: absolute;
    top: 1rem;
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
      font-size: 3rem;
    }
    & > div > a {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 620px) {
    & h2 {
      font-size: 2.5rem;
    }
    & > div > a {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 567px) {
    & h2 {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
    & > div > a {
      font-size: 1.6rem;
    }
  }
`;
