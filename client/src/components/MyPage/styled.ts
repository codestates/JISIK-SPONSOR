import styled, { css } from 'styled-components';
import { AddButton } from 'components/StartProject/commonStyled';

interface MypageTab {
  myProject?: boolean;
  backedProject?: boolean;
  favorites?: boolean;
  myComments?: boolean;
  onClick?: () => void;
}

//MyProfileBox
export const MyprofileBox = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 40px 20px;
  text-align: center;
  word-break: keep-all;

  @media screen and (max-width: 1200px) {
    max-width: 600px;
    margin-bottom: 30px;
  }
`;

export const MyprofileBoxMini = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
  }

  span {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    color: #212529;
    margin-bottom: 20px;
  }

  small {
    font-size: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #868e96;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    gap: 15px;
    flex-direction: column;
  }

  div > button:first-child {
    display: inline-block;
    color: #495057;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background: #ced4da;
  }

  div > button:last-of-type {
    display: inline-block;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background: #495057;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
    padding: 30px;

    div {
      display: flex;
      gap: 20px;
      flex-direction: row;
    }

    span {
      font-size: 25px;
    }

    p {
      font-size: 16px;
    }
  }
  @media all and (max-width: 620px) {
    div > button:first-child,
    div > button:last-of-type {
      font-size: 12.8px;
      padding: 10px 15px;
    }
  }
`;

// MyInfoBox
export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 30px;
  @media all and (max-width: 1200px) {
    padding: 0;
    text-align: center;
  }
`;

export const MyInfoTabs = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const MyInfoDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const selectedTab = css`
  color: #fff;
  background: #7950f2;
`;

export const TabBtn = styled.button<MypageTab>`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 700;
  color: #343a40;
  padding: 15px 25px;
  background: #fff;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${(props) =>
    (props.myProject ||
      props.backedProject ||
      props.favorites ||
      props.myComments) &&
    selectedTab}
  @media screen and (max-width: 680px) {
    word-break: keep-all;
    width: 45%;
  }
  @media screen and (max-width: 380px) {
    font-size: 12.8px;
    padding: 15px 20px;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 15px;

  & div {
    width: 280px;
    height: 441px;
  }

  @media screen and (max-width: 1031px) {
    flex-wrap: wrap;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div:first-child {
    font-size: 20px;
    line-height: 1.4;
    font-weight: 700;
    color: #343a40;
    margin-bottom: 10px;
  }

  div:last-child {
    display: flex;
    gap: 15px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: #8e8d8d;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

export const SeeMore = styled(AddButton)`
  width: 140px;
  font-size: 20px;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    margin-top: 20px;
  }
`;
