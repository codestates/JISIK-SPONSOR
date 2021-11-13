import styled from 'styled-components';

import Background from '../../../images/background.jpg';

export const Section = styled.section`
  width: 100%;
  background: #f8f9fa;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 30px;
  @media all and (max-width: 620px) {
    padding: 40px 15px;
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
    padding: 60px 40px;
    background: rgba(0, 0, 0, 0.3);
  }

  & > div > h2 {
    font-size: 31.25px;
    max-width: 585px;
    font-weight: 600;
    line-height: 1.45em;
    color: #ffffff;
    margin-bottom: 20px;
  }

  & > div > p {
    font-size: 20px;
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
  padding-bottom: 40px;
  gap: 20px;
  :last-child {
    border: 0;
    padding: 0;
  }
  & > div:first-child {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  & > div img {
    width: 40px;
    height: 40px;
  }

  & > div h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
  }

  & > p {
    font-size: 20px;
    max-width: 680px;
    line-height: 1.6;
    color: #495057;
  }

  @media all and (max-width: 620px) {
    & > div h2 {
      font-size: 25px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.8;
    }
  }
`;

export const BudgetDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #343a40;

  div {
    line-height: 1.6;
    display: flex;
    gap: 15px;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  color: #343a40;
  > div {
    display: flex;
    gap: 15px;
  }
  > div > span {
  }
`;
