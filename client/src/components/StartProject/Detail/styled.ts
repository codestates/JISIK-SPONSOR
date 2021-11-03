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
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;

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
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;

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
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;

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
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;

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
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;

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

export const TimeLineListContainer = styled.ul`
  margin-top: 20px;

  > li {
    display: flex;
    margin-top: 5px;
    align-items: flex-end;
    > div {
      display: flex;
      flex-direction: column;

      > input {
        border: 2px solid #e9ecef;
        border-radius: 5px;
        margin-top: 5px;
        height: 40px;
        width: 160px;
      }

      > label {
        font-size: 12.8px;
        font-weight: 700;
        line-height: 1.45em;
        color: ${({ theme }) => theme.colors.suppotWord};
      }
    }

    > div:first-child {
      margin-right: 20px;

      > input {
        width: 380px;
      }
    }

    > div:nth-child(2) {
      margin-right: 10px;
      > span {
        font-size: 12.8px;
        font-weight: 700;
        line-height: 1.45em;
        color: ${({ theme }) => theme.colors.suppotWord};
      }

      > input {
        border: 2px solid #e9ecef;
        border-radius: 5px;
        width: 160px;
      }
    }

    > button:nth-child(3) {
      margin-right: 5px;
    }
    @media screen and (max-width: 850px) {
      > div:first-child {
        > input:last-child {
          width: 300px;
        }
      }
      > div:nth-child(2) {
        > input:last-child {
          width: 120px;
        }
      }
    }
    @media screen and (max-width: 640px) {
      > div:first-child {
        > input:last-child {
          width: 200px;
        }
      }
      > div:nth-child(2) {
        input {
          width: 120px;
        }
      }
    }
  }

  li:first-child {
    margin-top: 0;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 160px;
  height: 40px;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  margin-top: 5px;
`;

export const AddTimeLineButton = styled(AddButton)`
  width: 163px;
  margin-top: 20px;
`;

//프로젝트 타임라인 상세설명
export const ProjectTimeLineDetail = styled(SubTitleCss)<FoucsProps>`
  position: relative;
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;

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
