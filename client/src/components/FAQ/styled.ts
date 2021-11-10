import styled from 'styled-components';

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

export const FaqLiWapper = styled.li`
  border: 1px solid #e9ecef;
  margin-top: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  &.show {
    height: 104.25px;
    transition: 0.3s;
  }

  &.hide {
    height: 63.25px;
    transition: 0.3s;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    > h3 {
      font-size: 20px;
      font-weight: 500;
    }

    > img {
      width: 31.25px;
      height: 31.25px;
      cursor: pointer;
    }
  }

  > p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 25px;

    &.show {
      display: block;
      animation-name: dropdown;
      animation-duration: 1s;
    }

    &.hide {
      display: none;
    }
  }

  @keyframes dropdown {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }
    to {
      opacity: 1;
    }
  }
`;
