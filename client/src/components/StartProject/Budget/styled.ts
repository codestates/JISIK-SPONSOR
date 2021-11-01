import styled, { css } from 'styled-components';
import { SubTitleCss, AddButton } from '../commonStyled';

interface FoucsProps {
  showMemo: boolean;
}

// **예산 정보**
export const ProjectBudgetList = styled(SubTitleCss)`
  position: relative;
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
    font-size: 25px;
    font-weight: 700;
    line-height: 1.4em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }
`;

export const BudgetListAdd = styled(AddButton)`
  width: 163px;
  margin-top: 20px;
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
`;
