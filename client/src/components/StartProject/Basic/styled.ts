import Select from 'react-select';
import styled, { css } from 'styled-components';
import { SubTitleCss, ProjectCoverImage } from '../commonStyled';
interface FoucsProps {
  showMemo: boolean;
}

// 프로젝트 제목
export const ProjectTitle = styled.div<FoucsProps>`
  margin-top: 4rem;
  position: relative;

  > h3 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > input {
    width: 100%;
    max-width: 560px;
    padding: 1rem;
    background: #ffffff;
    color: #495057;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 1rem;
    height: 4rem;
  }

  p {
    ${(props) =>
      props.showMemo
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }

  @media screen and (max-width: 600px) {
    > input {
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    > p {
      display: none;
    }
  }
`;

// 프로젝트 카테고리
export const ProjectCategory = styled.div`
  margin-top: 4rem;

  > h3 {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.4em;
    color: #495057;
  }

  > p {
    font-size: 1.28rem;
    font-weight: 400;
    line-height: 1.6em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 1rem;
  }
`;

// 프로젝트 해시태그
export const ProjectHashTag = styled(SubTitleCss)`
  > input {
    width: 100%;
    max-width: 300px;
    padding: 1rem;
    background: #fff;
    color: #495057;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 2rem;
    margin-right: 1.5rem;
    height: 4rem;
  }

  ul {
    margin-top: 2rem;
    display: flex;

    > li {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.4em;
      color: #fff;
      background: ${({ theme }) => theme.colors.orange};
      padding: 0.5rem 1rem;
      margin-right: 0.5rem;
      text-align: center;
      border-radius: 3px;

      > span:first-child {
        margin-right: 0.3rem;
      }

      > span:last-child {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 550px) {
    > button {
      margin-top: 1rem;
    }
  }
`;

// 프로젝트 펀딩기간
export const ProjectFundingPeriod = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > div {
    margin-top: 1rem;
    width: 16rem;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 1rem;

    ${(props) =>
      props.showMemo
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
  @media screen and (max-width: 1200px) {
    > p {
      display: none;
    }
  }
`;

export const CustomSelect = styled(Select)`
  font-size: 1.6rem;
  .Select__single-value {
    color: #495057;
  }
  .Select__control {
    border-radius: 5px;
    border: 2px solid #e9ecef;
  }
  .Select__indicator-separator {
    display: none;
  }
`;

// 프로젝트 한 줄 소개
export const ProjectSimpleInfo = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 1rem;

    ${(props) =>
      props.showMemo
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
  @media screen and (max-width: 1200px) {
    > p {
      display: none;
    }
  }
`;

// 프로젝트 커버이미지
export const ProjectCoverIma = styled(ProjectCoverImage)`
  > label {
    width: 30rem;
    height: 17.4rem;
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    > label {
      width: 100%;
    }
  }
`;

export const ProjectSelectIma = styled(ProjectCoverImage)`
  > label {
    width: 30rem;
    background: #fff;
    border: none;
    padding: 0;
    > img {
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
    }
  }
  @media screen and (max-width: 600px) {
    > label {
      width: 100%;
    }
  }
`;

export const CategoryContainer = styled.div`
  margin-top: 1rem;
  div {
    display: inline;
  }
  input {
    display: none;
  }
  label {
    font-size: 1.6rem;
    font-weight: 500;
    color: #495057;
    text-align: center;
    margin-right: 1rem;
    vertical-align: top;
  }
  input + label {
    cursor: pointer;
  }
  input + label::before {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #868e96;
    vertical-align: top;
    margin-right: 0.5rem;
  }
  input:checked + label::before {
    content: '\f00c';
    font-family: 'Font Awesome 5 free';
    font-weight: 900;
    color: #ffffff;
    background-color: #0dbd7e;
    font-size: 1.3rem;
    text-align: center;
  }

  @media all and (max-width: 750px) {
    div:first-child,
    div:nth-child(3) {
      display: block;
    }
  }
  @media all and (max-width: 480px) {
    > div > label {
      font-size: 1.2rem;
    }
  }
`;
