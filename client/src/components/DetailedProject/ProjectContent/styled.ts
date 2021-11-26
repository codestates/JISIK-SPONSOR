import styled from 'styled-components';

import Background from '../../../images/background.jpg';

export const Section = styled.section`
  width: 100%;
  background: #f8f9fa;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 3rem;
  @media all and (max-width: 620px) {
    padding: 4rem 1.5rem;
  }
`;

export const ResearchWord = styled.div`
  background: url(${Background});

  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 6rem 4rem;
    background: rgba(0, 0, 0, 0.3);
  }

  & > div > h2 {
    font-size: 3.125rem;
    max-width: 585px;
    font-weight: 600;
    line-height: 1.45em;
    color: #ffffff;
    margin-bottom: 2rem;
  }

  & > div > p {
    font-size: 2rem;
    max-width: 500px;
    line-height: 1.8;
    color: #ffffff;
    word-break: keep-all;
    text-align: center;
  }
`;
export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 4rem;
  gap: 2rem;
  :last-child {
    border: 0;
    padding: 0;
  }
  & > div:first-child {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  & > div img {
    width: 4rem;
    height: 4rem;
  }

  & > div h2 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
  }

  & > p {
    font-size: 2rem;
    max-width: 680px;
    line-height: 1.6;
    color: #495057;
  }

  @media all and (max-width: 620px) {
    & > div h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.8;
    }
  }
`;

export const BudgetDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4;
  color: #343a40;

  div {
    line-height: 1.6;
    display: flex;
    gap: 1.5rem;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6;
  color: #343a40;
  > div {
    display: flex;
    gap: 1.5rem;
  }
  > div > span {
  }
`;
