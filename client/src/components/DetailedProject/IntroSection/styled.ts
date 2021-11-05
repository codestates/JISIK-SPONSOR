import styled from 'styled-components';

export const ProjectContainer = styled.div`
  /* background-color: beige; */
  width: 100vw;
  padding: 60px 0;
`;

export const ProjectWrapper = styled.div`
  /* background-color: pink; */
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  > button {
    border: none;
    background: none;
  }

  > button > img {
    width: 35px;
    height: 35px;
  }
`;

export const ProjectTitle = styled.div`
  margin-bottom: 35px;

  & > h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.4;
    color: #212529;
    margin-bottom: 5px;
  }

  & > span {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: #495057;
  }
`;

export const MainContent = styled.div`
  /* background-color: aquamarine; */
  width: 100%;
  max-width: 960px;
  display: flex;
  gap: 30px;

  img {
    width: 600px;
    height: 320px;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 718px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    img {
      width: 100%;
      margin-bottom: 0;
    }
  }
`;

export const SubContent = styled.div`
  /* background-color: yellowgreen; */

  & > p:first-child {
    font-size: 32px;
    font-weight: 700;
    color: #212529;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  & > p {
    font-size: 16px;
    font-weight: 700;
    color: #343a40;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  img {
    width: 270px;
    height: 15px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 30px;
    img {
      width: 70%;
    }
  }

  @media screen and (max-width: 718px) {
    margin-bottom: 30px;

    img {
      width: 70%;
    }
  }
`;

export const Funding = styled.div`
  & > p {
    display: flex;
    justify-content: space-between;
  }

  & > p:first-child span:first-child {
    font-size: 16px;
    font-weight: 700;
    color: #f08c00;
    line-height: 1.4;
  }

  & > p:first-child span {
    font-size: 16px;
    font-weight: 700;
    color: #343a40;
    line-height: 1.4;
  }

  & > p {
    font-size: 12px;
    font-weight: 700;
    color: #868e96;
    line-height: 1.4;
  }

  & > p:last-child {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }

  @media screen and (max-width: 718px) {
    width: 70%;
  }
`;

export const FundInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > div > span {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    color: #343a40;
    margin-right: 10px;
  }

  & > div:last-child {
    margin-bottom: 35px;
  }

  & > div input {
    height: 25px;
    width: 200px;
    border: 2px solid #e9ecef;
    border-radius: 2px;
  }

  & > div input::placeholder {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    color: #8d959d;
    -webkit-appearance: none;
  }

  & > div input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (max-width: 718px) {
    width: 100%;
  }
`;

export const HashTagContainer = styled.div`
  display: flex;
  gap: 15px;
  /* margin-bottom: 50px; */
`;

export const HashTag = styled.button`
  width: 85px;
  height: 30px;
  background-color: ${(props) => (props.color ? 'white' : '#7950f2')};
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  border-radius: 3px;
  cursor: pointer;
`;
