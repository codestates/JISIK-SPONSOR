import styled from 'styled-components';

export const MypageContainer = styled.div`
  background-color: beige;
  width: 100vw;
  padding: 60px 0;
`;

export const MypageWrapper = styled.div`
  display: flex;
  background-color: pink;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 60px 30px;
`;

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
  }
`;

export const MyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 30px;
`;

export const MyInfoTabs = styled.div`
  display: flex;
  gap: 15px;

  button {
    padding: 12px 24px;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 700;
    color: #343a40;
    background-color: #fff;
    border-radius: 5px;
    border-style: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button:first-child {
    padding: 12px 24px;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 700;
    color: #fff;
    background-color: #7950f2;
    border-radius: 5px;
    border-style: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
`;
