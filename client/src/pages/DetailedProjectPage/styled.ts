import styled from 'styled-components';

export const ProjectContainer = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  padding: 60px 0;
  background-color: beige;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  font-size: 40px;
  margin: 0 auto;
  padding: 60px 30px;
`;

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
