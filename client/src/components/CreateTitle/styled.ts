import styled from 'styled-components';

export const Section = styled.section`
  padding: 12rem 0;
  background: #f8f9fa;
  @media all and (max-width: 620px) {
    padding: 8rem 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  padding: 0 3rem;
  margin: 0 auto;
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
  word-break: keep-all;
  text-align: center;

  h1 {
    font-size: 4.883rem;
    color: #343a40;
    font-weight: 500;
    line-height: 1.2em;
    margin-bottom: 3rem;
  }
  p {
    font-size: 2.5rem;
    line-height: 1.4em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }
  @media all and (max-width: 1200px) {
    margin-bottom: 4rem;
    h1 {
      font-size: 3.125rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 2rem;
    }
  }
  @media all and (max-width: 620px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 6rem;
  flex-direction: column;
  align-items: center;
  input {
    border: none;
    width: 100%;
    background: none;
    max-width: 1200px;
    font-size: 2.5rem;
    padding: 2rem 3rem;
    border-radius: 5px 5px 0 0;
    border-bottom: 3px solid #343a40;
    background: none;
  }
  button {
    display: block;
    width: 16rem;
    padding: 1rem;
    font-size: 2rem;
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
    gap: 3rem;
    input {
      font-size: 2rem;
      padding: 1rem 2rem;
      border-bottom: 2px solid #343a40;
    }
  }
  @media all and (max-width: 620px) {
    gap: 3rem;
    input {
      font-size: 1.6rem;
      padding: 1rem 2rem;
      border-bottom: 2px solid #343a40;
    }
  }
`;
