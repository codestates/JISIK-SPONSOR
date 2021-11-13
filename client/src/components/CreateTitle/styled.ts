import styled from 'styled-components';

export const Section = styled.section`
  padding: 120px 0;
  background: #f8f9fa;
  @media all and (max-width: 620px) {
    padding: 80px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  padding: 0 30px;
  margin: 0 auto;
  @media all and (max-width: 620px) {
    padding: 0 15px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  word-break: keep-all;
  text-align: center;

  h1 {
    font-size: 48.83px;
    color: #343a40;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 30px;
  }
  p {
    font-size: 25px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.suppotWord};
  }
  @media all and (max-width: 1200px) {
    margin-bottom: 40px;
    h1 {
      font-size: 31.25px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
    }
  }
  @media all and (max-width: 620px) {
    margin-bottom: 20px;
    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;
  align-items: center;
  input {
    border: none;
    width: 100%;
    max-width: 1200px;
    font-size: 25px;
    padding: 20px 30px;
    border-radius: 5px 5px 0 0;
    border-bottom: 3px solid #343a40;
    background: none;
  }
  button {
    display: block;
    width: 160px;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4em;
    color: #fff;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    border: 3px solid #7950f2;
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.violet};
  }
  button:hover {
    color: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
    background: #fff;
    transition: 0.3s;
  }
  @media all and (max-width: 1200px) {
    gap: 30px;
    input {
      font-size: 20px;
      padding: 10px 20px;
      border-bottom: 2px solid #343a40;
    }
  }
  @media all and (max-width: 620px) {
    gap: 30px;
    input {
      font-size: 16px;
      padding: 10px 20px;
      border-bottom: 2px solid #343a40;
    }
  }
`;
