import styled, { css } from 'styled-components';
import { SubTitleCss, AddButton, ProjectCoverImage } from '../commonStyled';

interface FoucsProps {
  showMemo: boolean;
}

// 프로젝트 팀원 소개
export const ProjectTeamMember = styled(SubTitleCss)<FoucsProps>`
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

export const AddTeamMember = styled.ul`
  margin-top: 20px;
  > li {
    display: flex;
    align-items: flex-end;
    margin-top: 5px;
    > div {
      display: flex;
      flex-direction: column;

      > input {
        border: 2px solid #e9ecef;
        border-radius: 5px;
        margin-top: 5px;
        height: 40px;
        width: 380px;
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
        width: 160px;
      }
    }

    > div:nth-child(2) {
      margin-right: 10px;
    }

    > button:nth-child(3) {
      margin-right: 5px;
    }

    @media screen and (max-width: 900px) {
      > div:first-child {
        > input:last-child {
          width: 100px;
        }
      }
      > div:nth-child(2) {
        > input:last-child {
          width: 300px;
        }
      }
    }
    @media screen and (max-width: 700px) {
      > div:first-child {
        > input:last-child {
          width: 80px;
        }
      }
      > div:nth-child(2) {
        > input:last-child {
          width: 200px;
        }
      }
    }
  }

  li:first-child {
    margin-top: 0;
  }
`;

export const AddTeamMemberButton = styled(AddButton)`
  margin-top: 20px;
`;

// 프로젝트 팀 소개
export const ProjectTeamInfo = styled(SubTitleCss)<FoucsProps>`
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

// 프로젝트 팀 이미지
export const ProjectTeamImg = styled(ProjectCoverImage)`
  > label {
    width: 300px;
  }
`;

// 연구자의 한 마디
export const ProjectLastSentence = styled(SubTitleCss)<FoucsProps>`
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
