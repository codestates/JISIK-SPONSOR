import styled, { css } from 'styled-components';
import { SubTitleCss, AddButton } from '../commonStyled';

interface FoucsProps {
  showMemo: boolean;
}

// **예산 정보**
export const ProjectBudgetList = styled(SubTitleCss)`
  position: relative;
  @media screen and (max-width: 550px) {
    margin-top: 2rem;
  }
`;

export const BudgetListContainer = styled.ul`
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
        width: 12rem;
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
      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
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
    }
    @media screen and (max-width: 620px) {
      > div:first-child {
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

export const TotalAmount = styled.div`
  position: absolute;
  right: -200px;
  top: 0;
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 6.8rem;

  > h2 {
    font-size: 3.125rem;
    font-weight: 700;
    line-height: 1.4em;
    color: #343a40;
  }

  > span {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }

  @media screen and (max-width: 550px) {
    position: static;
    width: 18.4rem;
    margin-bottom: 2rem;
    > h2 {
      font-size: 1.6rem;
    }
    > span {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 2rem 5rem;

    > h2 {
      font-size: 2rem;
    }
    > span {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 1350px) {
    right: 50px;
    top: -100px;
  }
`;

export const BudgetListAdd = styled(AddButton)`
  width: 16.3rem;
  margin-top: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.orange};
  transition: 0.3s;

  &:hover {
    background: #fff;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

// 예산 사용 계획
export const ProjectBudgetPlan = styled(SubTitleCss)<FoucsProps>`
  position: relative;
  // 메모 p태그 겹칠때 초기화
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
