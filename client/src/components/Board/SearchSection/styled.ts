/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: right;
  gap: 30px;

  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;

  & input {
    border-radius: 5px;
    border: 1px solid;
    padding: 7px 15px;
  }

  & button {
    color: #7950f2;
    border-radius: 5px;
    border: 1px solid #7950f2;
    padding: 0 15px;
  }
`;
