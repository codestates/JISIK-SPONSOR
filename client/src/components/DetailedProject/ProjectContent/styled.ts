import styled from 'styled-components';
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
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 585px;
    padding: 0 40px;
  }

  & > div > h2 {
    font-size: 31.25px;
    font-weight: 700;
    line-height: 1.45em;
    color: #ffffff;
  }

  & > div > p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.6em;
    color: #ffffff;
    word-break: keep-all;
    margin-top: 20px;
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
    line-height: 1.4;
    font-weight: 500;
    color: #495057;
  }

  @media all and (max-width: 620px) {
    & > div h2 {
      font-size: 25px;
    }
    p {
      font-size: 20px;
      font-weight: 400;
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
