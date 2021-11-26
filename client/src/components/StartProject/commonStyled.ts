import styled from 'styled-components';

export const SubTitleCss = styled.div`
  margin-top: 4rem;

  > h3 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > p {
    font-size: 1.28rem;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 1rem;
  }
`;

export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 3rem;
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const ProjectBody = styled.div`
  background: #fff;
  height: 100%;
  padding: 6rem 0;
  > h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.violetWord};
  }
  > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 1rem;
  }
  @media all and (max-width: 620px) {
    padding: 3rem 0;
  }
`;

export const FocusMemo = styled.p`
  display: none;
  width: 31rem;
  background: #fff9db;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  padding: 3rem 4rem 3rem 4rem;
  position: absolute;
  top: 0;
  right: -15%;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.45em;
  color: #495057;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const TextareaCss = styled.textarea`
  resize: none;
  width: 100%;
  max-width: 680px;
  height: 15rem;
  padding: 2rem;
  color: #495057;
  line-height: 1.8em;
  margin-top: 1rem;
  border-radius: 5px;
  background: #fff;
  border: 2px solid #e9ecef;
  @media screen and (max-width: 620px) {
    padding: 1rem;
  }
`;

export const SaveButton = styled.button`
  margin-top: 4rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4em;
  color: #fff;
  background: ${({ theme }) => theme.colors.violet};
  border: 3px solid ${({ theme }) => theme.colors.violet};
  border-radius: 10px;
  padding: 2rem 4rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background: #fff;
    color: ${({ theme }) => theme.colors.violet};
  }
`;

export const AddButton = styled.button`
  width: 15.6rem;
  padding: 1rem 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.orange};
  border: 3px solid ${({ theme }) => theme.colors.orange};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3em;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background: #fff;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const AddList = styled.div`
  margin-top: 2rem;
  display: flex;

  label {
    font-size: 1.28rem;
    font-weight: 700;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }

  input {
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 0.5rem;
    height: 4rem;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;

    > input {
      width: 38rem;
      margin-top: 0.5rem;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;

    > input {
      width: 16rem;
      margin-top: 0.5rem;
    }
  }
`;

export const ProjectCoverImage = styled(SubTitleCss)`
  > input {
    display: none;
  }

  > label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
    align-items: center;
    border: 2px dashed #9575fa;
    border-radius: 5px;
    background: #f3f0ff;
    width: 56rem;
    margin-top: 1rem;
    cursor: pointer;
    > img {
      width: 6rem;
      height: 6rem;
    }

    > span:nth-child(2) {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.45em;
      color: #9775fa;
      margin-top: 1rem;
    }
    > span:last-child {
      font-size: 1.28rem;
      font-weight: 500;
      line-height: 1.45em;
      color: #495057;
      margin-top: 0.5rem;
    }
  }
`;

export const EditButton = styled(AddButton)`
  width: 7.3rem;
  text-align: center;
  @media screen and (max-width: 850px) {
    font-size: 1.28rem;
    width: 5.12rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #b40e0e;
  margin-top: 0.5rem;
`;
