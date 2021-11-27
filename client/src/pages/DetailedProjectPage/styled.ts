import styled from 'styled-components';

export const ProjectContainer = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  padding: 6rem 0;
  background-color: beige;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  font-size: 4rem;
  margin: 0 auto;
  padding: 6rem 3rem;
`;

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
