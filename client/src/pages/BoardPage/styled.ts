import styled from 'styled-components';

export const GoTopButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  img {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 1200px) {
    bottom: 80px;
    right: 20px;
    img {
      width: 60px;
      height: 60px;
    }
  }
`;
