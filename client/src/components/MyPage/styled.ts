import styled, { css } from 'styled-components';
// import { PostcardsWrap, Ul } from '../ProjectsCards/Postcards/styled';

interface MypageTab {
  myProject?: boolean;
  backedProject?: boolean;
  favorites?: boolean;
  myComments?: boolean;
  onClick?: () => void;
}

//MyProfileBox
export const MyprofileBox = styled.div`
  width: 300px;
  background-color: yellowgreen;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  background-color: aquamarine;

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

  button {
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

  button:last-of-type {
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
