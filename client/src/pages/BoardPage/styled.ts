import styled from 'styled-components';

export const GoTopButton = styled.a`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  img {
    width: 8rem;
    height: 8rem;
  }
  @media screen and (max-width: 1200px) {
    bottom: 8rem;
    right: 2rem;
    img {
      width: 6rem;
      height: 6rem;
    }
  }
`;
