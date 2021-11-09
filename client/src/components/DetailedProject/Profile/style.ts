import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: antiquewhite; */
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
  display: flex;
  width: 100%;
  max-width: 700px;
  gap: 60px;
  align-items: center;
  margin-bottom: 30px;
  /* background-color: pink; */

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

  > div:nth-child(2) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;

    & > span {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4;
      color: #343a40;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 718px) {
    width: 100%;
  }
`;

export const ProjectTeamTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 30px;
`;

export const Team = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px 0;
  align-items: center;

  img {
    height: 120px;
    width: 200px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
    display: inline-block;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;

    strong {
      font-weight: 700;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  > div:last-child {
    grid-column: 2/3;
  }

  @media screen and (max-width: 718px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`;
