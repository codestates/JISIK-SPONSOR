import styled from 'styled-components';

export const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 3rem;
  @media screen and (max-width: 620px) {
    padding: 4rem 1.5rem;
  }
`;

export const SponsorTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  & div {
    display: flex;
    align-items: center;
    font-size: 3.2rem;
    line-height: 1.4;
    font-weight: 700;
    color: #343a40;
  }

  & div img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.5rem;
  }

  & > span {
    font-size: 1.28rem;
    font-weight: 500;
    line-height: 1.4;
    color: #495057;
  }
`;

export const SponsorsList = styled.ul`
  display: flex;
  gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  @media screen and (max-width: 718px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const EmptyBox = styled.div`
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  color: #343a40;
  font-weight: 500;
`;
