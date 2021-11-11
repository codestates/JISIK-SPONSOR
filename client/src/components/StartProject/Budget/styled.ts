import styled, { css } from 'styled-components';
import { SubTitleCss, AddButton } from '../commonStyled';

interface FoucsProps {
  showMemo: boolean;
}

// **예산 정보**
export const ProjectBudgetList = styled(SubTitleCss)`
  position: relative;
  @media screen and (max-width: 550px) {
    margin-top: 20px;
  }
`;

export const BudgetListContainer = styled.ul`
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
      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
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
    }
    @media screen and (max-width: 620px) {
      > div:first-child {
        > input:last-child {
          width: 200px;
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
      margin-top: 10px;
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
  padding: 25px 68px;

  > h2 {
    font-size: 31.25px;
    font-weight: 700;
    line-height: 1.4em;
    color: #343a40;
  }

  > span {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }

  @media screen and (max-width: 550px) {
    position: static;
    width: 184px;
    margin-bottom: 20px;
    > h2 {
      font-size: 16px;
    }
    > span {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 20px 50px;

    > h2 {
      font-size: 20px;
    }
    > span {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1350px) {
    right: 50px;
    top: -100px;
  }
`;

export const BudgetListAdd = styled(AddButton)`
  width: 163px;
  margin-top: 20px;
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
