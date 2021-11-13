import styled, { css } from 'styled-components';

interface showProps {
  showAnswer?: boolean;
}
export const FaqHeaderWapper = styled.section`
  padding: 0 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    font-size: 39.06px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.violetWord};
  }

  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 20px;
  }
`;

export const FaqUlWapper = styled.ul``;

export const FaqLiWapper = styled.li<showProps>`
  border: 1px solid #e9ecef;
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  height: 77px;
  transition: 0.3s;

  ${(props) =>
    props.showAnswer &&
    css`
      color: ${({ theme }) => theme.colors.violetWord};
      height: 168px;
      transition: 0.3s;
    `};

  &:last-child.show,
  &:nth-child(3).show {
    height: 146px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    > h3 {
      font-size: 25px;
      font-weight: 500;
      line-height: 1.4em;
    }

    > img {
      width: 31.25px;
      height: 31.25px;
      cursor: pointer;
    }
  }
`;

export const Answer = styled.p<showProps>`
  display: none;
  font-size: 16px;
  font-weight: 400;
  color: #343a40;
  margin-top: 25px;
  width: 74%;
  line-height: 1.4em;
  padding-left: 50px;

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
