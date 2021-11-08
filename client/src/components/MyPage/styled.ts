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
  /* background-color: yellowgreen; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    max-width: 800px;
    margin-bottom: 30px;
  }
`;

export const MyprofileBoxMini = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  width: 100%;
  max-width: 144px;
  margin: 0 auto;
  /* background-color: aquamarine; */

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
  }

  span {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.4;
    color: #212529;
    margin-bottom: 10px;
  }

  p {
    font-size: 12.8px;
    font-weight: 500;
    line-height: 1.4;
    color: #868e96;
    margin-bottom: 47px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div > button:first-child {
    width: 93px;
    height: 30px;
    border-radius: 3px;
    background-color: #ced4da;
    color: #495057;
    font-size: 12.8px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 15px;
    cursor: pointer;
  }

  div > button:last-of-type {
    width: 93px;
    height: 30px;
    border-radius: 3px;
    background-color: #495057;
    color: #fff;
    font-size: 12.8px;
    font-weight: 700;
    line-height: 1.4;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
    margin-bottom: 30px;

    div {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    span {
      font-size: 27px;
    }

    p {
      font-size: 16px;
    }
  }
`;

// MyInfoBox
export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 30px;
`;

export const MyInfoTabs = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 1200px) {
    /* flex-direction: column; */
    justify-content: center;
  }
`;

export const MyInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* background-color: violet; */
`;

const selectedTab = css`
  background-color: #7950f2;
  color: #fff;
`;

export const TabBtn = styled.button<MypageTab>`
  padding: 12px 24px;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 700;
  color: #343a40;
  background-color: #fff;
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

  @media screen and (max-width: 893px) {
    padding: 6px 12px;
    font-size: 15px;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 15px;

  & div {
    width: 280px;
    height: 441px;
    background-color: seagreen;
  }

  @media screen and (max-width: 1031px) {
    flex-wrap: wrap;
  }
`;

export const CommentContainer = styled.div`
  /* background-color: palevioletred; */
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
