import styled, { css } from 'styled-components';

interface showProps {
  showAnswer?: boolean;
}
export const FaqHeaderWapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  > h2 {
    font-size: 39.06px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.violetWord};
  }
  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.45em;
    word-break: keep-all;
    text-align: center;
    width: 80%;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 20px;
  }
  @media all and (max-width: 620px) {
    margin-bottom: 30px;
  }
`;

export const FaqUlWapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FaqLiWapper = styled.li<showProps>`
  padding: 20px 30px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  ${(props) =>
    props.showAnswer &&
    css`
      color: ${({ theme }) => theme.colors.violetWord};
      transition: 0.3s;
    `};
  :hover h3 {
    color: #5f3dc4;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    > h3 {
      font-size: 20px;
      font-weight: 500;
      color: #495057;
      line-height: 1.4em;
      word-break: keep-all;
    }
    > img {
      width: 31.25px;
      height: 31.25px;
      cursor: pointer;
    }
  }
  @media all and (max-width: 620px) {
    padding: 15px 20px;
    > div {
      > h3 {
        font-size: 16px;
      }
    }
  }
`;

export const Answer = styled.p<showProps>`
  display: none;
  font-size: 16px;
  font-weight: 400;
  color: #343a40;
  line-height: 1.6;
  padding: 20px 35px 20px 20px;

  ${(props) =>
    props.showAnswer &&
    css`
      display: block;
      animation-name: dropdown;
      animation-duration: 0.8s;
    `}

  @keyframes dropdown {
    0% {
      opacity: 0;
      transform: translateY(-3px);
    }

    100% {
      opacity: 1;
    }
  }
`;
