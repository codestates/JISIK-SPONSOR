import styled from 'styled-components';

export const SubTitleCss = styled.div`
  margin-top: 40px;

  > h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > p {
    font-size: 12.8px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 10px;
  }
`;

export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const ProjectBody = styled.div`
  background: #fff;
  height: 100%;
  padding: 60px 0;

  > h2 {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.violetWord};
  }
  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 10px;
  }
`;

export const FocusMemo = styled.p`
  display: none;
  width: 310px;
  background: #fff9db;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  padding: 30px 40px 30px 40px;
  position: absolute;
  top: 0;
  right: -15%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.45em;
  color: #495057;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const TextareaCss = styled.textarea`
  resize: none;
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  margin-top: 10px;
  width: 560px;
  height: 100px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SaveButton = styled.button`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4em;
  color: #fff;
  background: ${({ theme }) => theme.colors.violet};
  border: 3px solid #7950f2;
  border-radius: 10px;
  padding: 20px 40px;
  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 156px;
  padding: 10px 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3em;
  color: #fff;
  cursor: pointer;
`;

export const AddList = styled.div`
  margin-top: 20px;
  display: flex;

  label {
    font-size: 12.8px;
    font-weight: 700;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }

  input {
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 5px;
    height: 40px;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    > input {
      width: 380px;
      margin-top: 5px;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;

    > input {
      width: 160px;
      margin-top: 5px;
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
    padding: 30px 0;
    align-items: center;
    border: 2px dashed #9575fa;
    border-radius: 5px;
    background: #f3f0ff;
    width: 560px;
    margin-top: 10px;
    cursor: pointer;
    > img {
      width: 60px;
      height: 60px;
    }

    > span:nth-child(2) {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.45em;
      color: #9775fa;
      margin-top: 10px;
    }
    > span:last-child {
      font-size: 12.8px;
      font-weight: 500;
      line-height: 1.45em;
      color: #495057;
      margin-top: 5px;
    }
  }
`;

export const EditButton = styled(AddButton)`
  width: 73px;

  @media screen and (max-width: 850px) {
    font-size: 12.8px;
    width: 3em;
  }
`;

export const ErrorMessage = styled.div`
  color: #b40e0e;
  margin-top: 5px;
`;
