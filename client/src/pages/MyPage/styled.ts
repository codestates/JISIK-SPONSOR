import styled from 'styled-components';

export const MypageContainer = styled.div`
  background-color: beige;
  width: 100vw;
  padding: 60px 0;
`;

export const MypageWrapper = styled.div`
  display: flex;
  background-color: pink;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 60px 30px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
