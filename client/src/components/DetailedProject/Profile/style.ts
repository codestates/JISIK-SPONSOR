import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 30px;
  @media all and (max-width: 620px) {
    padding: 40px 15px;
  }
`;

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 31.25px;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 25px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  span {
    display: inline-block;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  gap: 60px;
  word-break: keep-all;

  img {
    width: 120px;
    height: 120px;
    margin-right: 15px;
  }

  & > div:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  > div:nth-child(2) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;

    div {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4;
      color: #343a40;
      margin-bottom: 10px;
    }
  }

  h4 {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    gap: 15px;
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const ProjectTeamTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 31.25px;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 25px;
  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  span {
    display: inline-block;
  }
`;

export const Team = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  gap: 60px;

  img {
    height: 120px;
    width: 120px;
    margin-right: 15px;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 15px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
    display: inline-block;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;
    margin-bottom: 5px;

    strong {
      font-weight: 700;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    gap: 15px;
    img {
      width: 80px;
      height: 80px;
    }
  }
`;
