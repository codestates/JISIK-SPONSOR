import styled from 'styled-components';

export const ProjectContainer = styled.div`
  background-color: beige;
  width: 100vw;
  padding: 60px 0;

  @media screen and (min-width: 718px) {
    width: 100%;
  }
`;

export const GoTopButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;

  img {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 718px) {
    bottom: 70px;
    right: 20px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;
