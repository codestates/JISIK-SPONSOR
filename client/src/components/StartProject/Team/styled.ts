import styled, { css } from 'styled-components';
import { SubTitleCss, AddButton, ProjectCoverImage } from '../commonStyled';

interface FoucsProps {
  showMemo: boolean;
}

// 프로젝트 팀원 소개
export const ProjectTeamMember = styled(SubTitleCss)<FoucsProps>`
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

export const AddTeamMember = styled.ul`
  margin-top: 2rem;
  > li {
    display: flex;
    align-items: flex-end;
    margin-top: 0.5rem;
    > div {
      display: flex;
      flex-direction: column;
      > input {
        border: 2px solid #e9ecef;
        border-radius: 5px;
        margin-top: 0.5rem;
        height: 4rem;
        width: 38rem;
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
        width: 16rem;
      }
    }

    > div:nth-child(2) {
      margin-right: 1rem;
    }

    > button:nth-child(3) {
      margin-right: 0.5rem;
    }

    @media screen and (max-width: 900px) {
      > div:first-child {
        > input:last-child {
          width: 10rem;
        }
      }
      > div:nth-child(2) {
        > input:last-child {
          width: 30rem;
        }
      }
    }
    @media screen and (max-width: 700px) {
      > div:first-child {
        > input:last-child {
          width: 8rem;
        }
      }
      > div:nth-child(2) {
        > input:last-child {
          width: 20rem;
        }
      }
    }
  }

  @media all and (max-width: 530px) {
    > li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    > li > button,
    div:nth-child(2) {
      margin-top: 1rem;
    }
  }

  li:first-child {
    margin-top: 0;
  }
`;

export const AddTeamMemberButton = styled(AddButton)`
  margin-top: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.orange};
  transition: 0.3s;

  &:hover {
    background: #fff;
    color: 3px solid ${({ theme }) => theme.colors.orange};
  }
`;

// 프로젝트 팀 소개
export const ProjectTeamInfo = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > p:last-child {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 1rem
      ${(props) =>
        props.showMemo
          ? css`
              display: block;
            `
          : css`
              display: none;
            `};
  }
  @media screen and (max-width: 1200px) {
    > p:last-child {
      display: none;
    }
  }
`;

//프로젝트 팀 명
export const ProjectTeamName = styled(SubTitleCss)<FoucsProps>`
  position: relative;

  > input {
    margin-top: 1rem;
    border: 2px solid #e9ecef;
    border-radius: 0.5rem;
    height: 4rem;
    padding: 1rem;
    color: #495057;
  }
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

// 프로젝트 팀 이미지
export const ProjectTeamImg = styled(ProjectCoverImage)`
  > label {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;

    > img {
      width: 5rem;
      height: 5rem;
    }
  }
`;
export const ProjectSelectIma = styled(ProjectCoverImage)`
  > label {
    width: 12rem;
    height: 12rem;
    padding: 0;
    border-radius: 50%;
    border: none;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    > label {
      width: 100%;
    }
  }
`;
// 연구자의 한 마디
export const ProjectLastSentence = styled(SubTitleCss)<FoucsProps>`
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
