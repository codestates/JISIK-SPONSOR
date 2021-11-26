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
  padding: 4rem 2rem;
  text-align: center;
  word-break: keep-all;

  @media screen and (max-width: 1200px) {
    max-width: 600px;
    margin-bottom: 3rem;
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
    height: 10rem;
    width: 10rem;
    margin-bottom: 2rem;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
  }

  span {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #212529;
    margin-bottom: 2rem;
  }

  small {
    display: block;
    font-size: 1.6rem;
    line-height: 1.6;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    color: #868e96;
    margin-bottom: 4rem;
  }

  div {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }

  div > button:first-child {
    display: inline-block;
    color: #495057;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.4;
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background: #ced4da;
  }

  div > button:last-of-type {
    display: inline-block;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.4;
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background: #495057;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
    padding: 3rem;

    div {
      display: flex;
      gap: 2rem;
      flex-direction: row;
    }

    span {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
  @media all and (max-width: 620px) {
    div > button:first-child,
    div > button:last-of-type {
      font-size: 1.28rem;
      padding: 1rem 1.5rem;
    }
  }
`;

// MyInfoBox
export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 3rem;
  @media all and (max-width: 1200px) {
    padding: 0;
    text-align: center;
  }
`;

export const MyInfoTabs = styled.div`
  display: flex;
  gap: 1.5rem;
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
  font-size: 1.6rem;
  line-height: 1.4;
  font-weight: 700;
  color: #343a40;
  padding: 1.5rem 2.5rem;
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
    font-size: 1.28rem;
    padding: 1.5rem 2rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 1.5rem;

  & div {
    width: 28rem;
    height: 44.1rem;
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
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 700;
    color: #343a40;
    margin-bottom: 1rem;
  }

  div:last-child {
    display: flex;
    gap: 1.5rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.4;
    color: #8e8d8d;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

export const SeeMore = styled(AddButton)`
  width: 14rem;
  font-size: 2rem;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    margin-top: 2rem;
  }
`;
