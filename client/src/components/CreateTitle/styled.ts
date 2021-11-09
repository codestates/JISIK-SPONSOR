import styled from 'styled-components';

export const Wrapper = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
`;
export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-size: 48.83px;
  }
  > p {
    margin-top: 30px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.suppotWord};
  }
`;
export const Section2 = styled.section`
  margin-top: 150px;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > input {
      border: none;
      border-bottom: 1px solid black;
      width: 100%;
      font-size: 25px;
      padding: 10px;
    }

    > button {
      display: block;
      background: ${({ theme }) => theme.colors.violet};
      padding: 10px;
      width: 160px;
      border: 3px solid #7950f2;
      border-radius: 5px;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4em;
      color: #fff;
      margin-top: 20px;
      cursor: pointer;
      text-align: center;
      transition: 0.3s;
    }

    > button:hover {
      color: ${({ theme }) => theme.colors.violet};
      border: 3px solid ${({ theme }) => theme.colors.violet};
      background-color: #fff;
      transition: 0.3s;
    }
  }
`;
