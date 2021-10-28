import styled from 'styled-components';

export const ProjectContainer = styled.div`
  background-color: beige;
  width: 100vw;
  padding: 60px 0;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 30px;
`;

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
`;

export const ProfileContent = styled.div`
  display: grid;
  width: 722px;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px 0;
  align-items: center;

  & > div:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 75px;
      height: 75px;
      margin-right: 15px;
    }

    & > div {
      display: flex;
      flex-direction: column;

      & > span:first-child {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.4;
        color: #212529;
      }

      & > span {
        font-size: 12.8px;
        line-height: 1.4;
        font-weight: 500;
        color: #868e96;
      }

      & > a {
        margin-top: 10px;
        font-size: 12.8px;
        font-weight: 700;
        line-height: 1.4;
        color: #7950f2;
      }
    }
  }

  & > div:nth-child(2) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;

    & > span {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4;
      color: #343a40;
      display: inline-block;
      margin-bottom: 10px;
    }
  }

  & > div:nth-child(3) {
    justify-items: center;
    align-items: center;
    grid-column: 2;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;

    & > span {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4;
      color: #343a40;
      display: inline-block;
      margin-bottom: 10px;
    }
  }
`;
