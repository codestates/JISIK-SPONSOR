import styled from 'styled-components';
import { StyledButton } from 'components/Button';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: paleturquoise;
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

  & > div:first-child {
    display: flex;
    justify-content: space-between;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  & > div > div img {
    height: 50px;
    width: 50px;
    margin-right: 15px;
  }

  & > div:first-child {
    & > div {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 20px;
    }
  }

  & > div > img {
    width: 21px;
    height: 25px;
  }

  & > div:nth-child(2) {
    margin-left: 65px;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 500;
    color: #495057;
    margin-bottom: 20px;

    & > span {
      font-size: 12.8px;
      line-height: 1.4;
      font-weight: 500;
    }
  }
`;
