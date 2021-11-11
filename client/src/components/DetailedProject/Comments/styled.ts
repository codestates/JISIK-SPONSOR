import styled from 'styled-components';
import { StyledButton } from 'components/Button';

export const Section = styled.section`
  width: 100%;
  background: #f8f9fa;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 30px;
`;

export const WriteContent = styled.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
    margin-bottom: 20px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
  }

  & > div > textarea {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    border: 2px solid #e9ecef;
    resize: none;
    padding-left: 30px;
    padding-top: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 1.4;
  }

  & > div > textarea::placeholder {
    color: #868e96;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled(StyledButton)`
  width: 174px;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const CommentLists = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin-bottom: 20px;
  border-bottom: 2px solid #e9ecef;
  position: relative;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:first-child {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 7px;

      img {
        height: 50px;
        width: 50px;
        margin-right: 15px;
      }
    }

    > button {
      border: none;
      background: none;
      cursor: pointer;

      img {
        width: 21px;
        height: 25px;
      }
    }
  }
`;

export const CommentContent = styled.div`
  margin-left: 65px;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  color: #495057;
  margin-bottom: 20px;

  > span {
    font-size: 12.8px;
    line-height: 1.4;
    font-weight: 500;
  }
`;

export const CommentModiBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  right: 12px;
  top: 38px;

  button {
    border: none;
    background: transparent;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
    color: #404040;
    cursor: pointer;
  }
`;

export const ModiBox = styled.div`
  display: flex;
  /* flex-direction: flex-start; */
  justify-content: flex-start;
  margin-left: 60px;
`;

export const ModiInput = styled.input`
  width: 70%;
  height: 10px;
  padding: 30px;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid #eee;
`;

export const ModiButtonGroup = styled.div`
  display: flex;
  margin-left: 55px;
`;

export const ModiButton = styled.button`
  margin: 10px 5px;
  width: 60px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #eee;
  background-color: #fff;
`;
