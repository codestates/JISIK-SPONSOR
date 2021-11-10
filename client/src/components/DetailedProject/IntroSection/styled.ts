import { StyledButton } from 'components/Button';
import styled, { css } from 'styled-components';

interface DisplayProps {
  noDisplay: any;
}

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
    cursor: pointer;
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
    margin-bottom: 10px;
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
  width: 100%;
  max-width: 270px;

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

  @media screen and (max-width: 900px) {
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
  }

  @media screen and (max-width: 718px) {
    img {
      width: 70%;
    }
  }
`;

export const Funding = styled.div`
  > p {
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
    width: 100%;
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
    margin-bottom: 20px;
  }

  > div input {
    height: 25px;
    width: 200px;
    border: 2px solid #e9ecef;
    border-radius: 2px;
    margin-bottom: 3px;
  }

  > div input::placeholder {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    color: #8d959d;
    -webkit-appearance: none;
  }

  > p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: #ff0200;
    margin-bottom: 10px;
  }

  & > div input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (max-width: 718px) {
    width: 100%;
  }
`;

export const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 525px) {
    flex-direction: column;
  }
`;

export const DisplayNone = css`
  display: none;
`;

export const Notice = styled.p<DisplayProps>`
  display: flex;
  justify-content: flex-start;
  width: 250px;
  font-size: 12.8px;
  font-weight: 500;
  line-height: 1.4;
  color: #dd584a;
  ${(props) => {
    return props.noDisplay && DisplayNone;
  }}

  @media screen and (max-width: 900px) {
    margin-left: 30px;
  }
`;

export const HashTagContainer = styled.div`
  display: flex;
  gap: 7px;
  /* margin-bottom: 50px; */
`;

export const HashTag = styled.button`
  width: 100%;
  height: 23px;
  color: #495057;
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 30px;

  span {
    color: #5f3dc4;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    margin-right: 2px;
  }
`;

export const SubContentFinished = styled.div`
  /* background-color: yellowgreen; */

  & > p:nth-child(odd) {
    font-size: 32px;
    font-weight: 700;
    color: #212529;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  & > p:nth-child(even) {
    font-size: 16px;
    font-weight: 700;
    color: #343a40;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  div {
    width: 250px;
    font-size: 12.8px;
    font-weight: 500;
    line-height: 1.4;
    color: #dd584a;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
  }

  @media screen and (max-width: 718px) {
    img {
      width: 70%;
    }
  }
`;

export const FinishedButton = styled(StyledButton)`
  background: none;
  border: 2px solid #868e96;
  color: #868e96;
  margin-bottom: 15px;
`;

export const AlreadyButton = styled(FinishedButton)`
  background: #0dbd7e;
  border: none;
  color: #fff;
  margin-bottom: 15px;
`;

export const SubContentAlready = styled.div`
  /* background-color: yellowgreen; */
  width: 100%;
  /* max-width: 270px; */

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

  div {
    width: 250px;
    font-size: 12.8px;
    font-weight: 500;
    line-height: 1.4;
    color: #dd584a;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
  }

  @media screen and (max-width: 718px) {
    img {
      width: 70%;
    }
  }
`;
