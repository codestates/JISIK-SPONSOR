import styled, { css } from 'styled-components';
import { SubTitleCss, AddButton } from '../commonStyled';
import DatePicker from 'react-datepicker';

interface FoucsProps {
  showMemo: boolean;
}

// 프로젝트 배경
export const ProjectMotive = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > p:last-child {
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
    > p:last-child {
      display: none;
    }
  }
`;

// 프로젝트 진행 상황
export const ProjectProgress = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > p:last-child {
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
    > p:last-child {
      display: none;
    }
  }
`;

// 프로젝트 목표
export const ProjectGoal = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > p:last-child {
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
    > p:last-child {
      display: none;
    }
  }
`;

// 추가정보(OPTIONS)
export const ProjectAddOptions = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > p:last-child {
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
    > p:last-child {
      display: none;
    }
  }
`;

// 프로젝트 타임라인
export const ProjectTimeLine = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  p {
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
    p {
      display: none;
    }
  }

  li:first-child {
    margin-top: 0;
  }
`;

export const TimeLineListContainer = styled.ul`
  margin-top: 2rem;

  > li {
    display: flex;
    margin-top: 0.5rem;
    align-items: flex-end;
    > div {
      display: flex;
      flex-direction: column;

      > input {
        border: 2px solid #e9ecef;
        border-radius: 5px;
        margin-top: 0.5rem;
        height: 4rem;
        width: 16rem;
        padding: 1rem;
        color: #495057;
      }
      > input:disabled {
        color: #868e96;
      }

      > label {
        font-size: 1.28rem;
        font-weight: 700;
        line-height: 1.45em;
        color: ${({ theme }) => theme.colors.suppotWord};
      }
    }

    > div:first-child {
      margin-right: 2rem;

      > input {
        width: 38rem;
      }
    }

    > div:nth-child(2) {
      margin-right: 1rem;
      > span {
        font-size: 1.28rem;
        font-weight: 700;
        line-height: 1.45em;
        color: ${({ theme }) => theme.colors.suppotWord};
      }

      > input {
        border: 2px solid #e9ecef;
        border-radius: 5px;
        width: 16rem;
      }
    }

    > button:nth-child(3) {
      margin-right: 0.5rem;
    }
    @media screen and (max-width: 850px) {
      > div:first-child {
        > input:last-child {
          width: 30rem;
        }
      }
      > div:nth-child(2) {
        > input:last-child {
          width: 12rem;
        }
      }
    }
    @media screen and (max-width: 640px) {
      > div:first-child {
        > input:last-child {
          width: 20rem;
        }
      }
      > div:nth-child(2) {
        input {
          width: 12rem;
        }
      }
    }
  }

  li:first-child {
    margin-top: 0;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 16rem;
  height: 4rem;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

export const AddTimeLineButton = styled(AddButton)`
  width: 16.3rem;
  margin-top: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.orange};
  transition: 0.3s;

  &:hover {
    background: #fff;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

//프로젝트 타임라인 상세설명
export const ProjectTimeLineDetail = styled(SubTitleCss)<FoucsProps>`
  position: relative;
  p {
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
    p {
      display: none;
    }
  }
`;
