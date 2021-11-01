import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f8f9fa;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 30px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 40px;
  gap: 20px;

  & > div {
    display: flex;
    gap: 15px;
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
    width: 689px;
    line-height: 1.4;
    font-weight: 500;
    color: #495057;
  }

  & > div > div:last-of-type {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 576px) {
    > p {
      width: 100%;
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

  & > div {
    width: 145px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #343a40;

  & > div {
    width: 210px;
    display: flex;
    justify-content: space-between;
  }
`;
