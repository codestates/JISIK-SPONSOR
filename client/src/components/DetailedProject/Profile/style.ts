import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 3rem;

  @media all and (max-width: 620px) {
    padding: 4rem 1.5rem;
  }
`;

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.125rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 2.5rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.5rem;
  }
  span {
    display: inline-block;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  gap: 6rem;
  word-break: keep-all;

  img {
    width: 12rem;
    height: 12rem;
    margin-right: 1.5rem;
    border-radius: 50%;
  }

  & > div:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  > div:nth-child(2) {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;

    div {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.4;
      color: #343a40;
      margin-bottom: 1rem;
    }
  }

  h4 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    gap: 1.5rem;
    img {
      width: 8rem;
      height: 8rem;
    }
  }
`;

export const ProjectTeamTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.125rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 2.5rem;
  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.5rem;
  }
  span {
    display: inline-block;
  }
`;

export const Team = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  gap: 6rem;

  img {
    height: 12rem;
    width: 12rem;
    margin-right: 1.5rem;
    border-radius: 50%;
  }

  h4 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;
    margin-bottom: 0.5rem;

    strong {
      font-weight: 700;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    gap: 1.5rem;
    img {
      width: 8rem;
      height: 8rem;
    }
  }
`;
