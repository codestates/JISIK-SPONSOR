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
  padding: 6rem 3rem;
  @media screen and (max-width: 620px) {
    padding: 4rem 1.5rem;
  }
`;

export const WriteContent = styled.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    display: flex;
    align-items: center;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
    margin-bottom: 2rem;

    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1.5rem;
    }
  }

  & > div > textarea {
    width: 100%;
    height: 15rem;
    border-radius: 10px;
    border: 2px solid #e9ecef;
    resize: none;
    padding-left: 3rem;
    padding-top: 3rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 1.4;
  }

  & > div > textarea::placeholder {
    color: #868e96;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled(StyledButton)`
  width: 100%;
  max-width: 180px;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  @media all and (max-width: 620px) {
    font-size: 1.6rem;
    padding: 1.5rem 2rem;
    max-width: 160px;
  }
`;

export const CommentLists = styled.div`
  margin-bottom: 2rem;
  border-bottom: 2px solid #e9ecef;
  position: relative;

  :last-child {
    border: 0;
    margin: 0;
  }

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:first-child {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 0.7rem;

      img {
        height: 5rem;
        width: 5rem;
        margin-right: 1.5rem;
        border-radius: 50%;
      }
    }

    > button {
      border: none;
      background: none;
      cursor: pointer;

      img {
        width: 2.1rem;
        height: 2.5rem;
      }
    }
  }
`;

export const CommentContent = styled.div`
  margin-left: 6.5rem;
  font-size: 1.6rem;
  line-height: 1.4;
  font-weight: 500;
  color: #495057;
  margin-bottom: 2rem;

  > span {
    font-size: 1.28rem;
    line-height: 1.4;
    font-weight: 500;
  }
`;

export const CommentModiBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  right: 1.2rem;
  top: 3.8rem;

  button {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    color: #404040;
    cursor: pointer;
  }
`;

export const ModiBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 6rem;
`;

export const ModiInput = styled.input`
  width: 70%;
  height: 1rem;
  padding: 3rem;
  border-radius: 3px;
  font-size: 1.6rem;
  border: 1px solid #eee;
`;

export const ModiButtonGroup = styled.div`
  display: flex;
  margin-left: 5.5rem;
`;

export const ModiButton = styled.button`
  margin: 1rem 0.5rem;
  width: 6rem;
  height: 4rem;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #eee;
  background: #fff;
`;

export const EmptyBox = styled.div`
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  color: #343a40;
  font-weight: 500;
`;
