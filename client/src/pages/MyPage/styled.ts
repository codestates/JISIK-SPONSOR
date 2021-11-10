import styled from 'styled-components';

export const MypageContainer = styled.div`
  width: 100vw;
  padding: 80px 0 120px 0;
  background: #f8f9fa;
  @media all and (max-width: 620px) {
    padding: 30px 0;
  }
`;

export const MypageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;

  > div:first-child {
    width: 25%;
  }

  > div:last-child {
    width: 75%;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;

    > div:first-child {
      width: 100%;
    }

    > div:last-child {
      width: 100%;
    }
  }
  @media all and (max-width: 620px) {
    padding: 0 15px;
  }
`;
