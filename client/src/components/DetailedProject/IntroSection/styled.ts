import styled, { css } from 'styled-components';

interface DisplayProps {
  noDisplay: any;
}

export const Section = styled.section`
  width: 100%;
  padding: 60px 0;
  @media all and (max-width: 620px) {
    padding: 40px 0;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  @media all and (max-width: 620px) {
    padding: 0 15px;
  }
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
    font-size: 39.06px;
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
  @media all and (max-width: 620px) {
    & > h1 {
      font-size: 31.25px;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const LeftWrap = styled.div`
  width: 70%;
  padding-right: 30px;
  img {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  @media all and (max-width: 900px) {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    img {
      margin-bottom: 10px;
    }
  }
`;

export const RightWrap = styled.div`
  width: 30%;
  @media all and (max-width: 900px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const SubContent = styled.div`
  width: 100%;
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
  margin: 5px 0 20px 0;
  > p {
    display: flex;
    justify-content: space-between;
  }
  & > p:first-child span:first-child {
    font-size: 16px;
    font-weight: 600;
    color: #f08c00;
    line-height: 1.4;
  }
  & > p:first-child span {
    font-size: 16px;
    font-weight: 600;
    color: #343a40;
    line-height: 1.4;
  }
  & > p {
    font-size: 12px;
    font-weight: 700;
    color: #868e96;
    line-height: 1.4;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const FundInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > div {
    display: flex;
    align-items: center;
  }
  & > div > span {
    display: block;
    width: 100px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.6;
    color: #343a40;
    margin-right: 10px;
  }
  & > div:last-child {
    margin-bottom: 20px;
  }
  > div input {
    width: 100%;
    padding: 10px;
    height: 40px;
    border: 2px solid #e9ecef;
    border-radius: 3px;
    margin: 5px 0;
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

export const DisplayNone = css`
  display: none;
`;

export const Notice = styled.div<DisplayProps>`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  color: #ff0200;
  margin-top: 20px;
  ${(props) => {
    return props.noDisplay && DisplayNone;
  }}
`;

export const HashTagContainer = styled.div`
  display: flex;
  gap: 5px;
  @media all and(max-width: 900px) {
    margin-bottom: 30px;
  }
`;

export const HashTag = styled.button`
  cursor: pointer;
  border: 0;
  background: none;
  strong {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    color: #5f3dc4;
    margin-right: 2px;
    vertical-align: middle;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    color: #495057;
    line-height: 1.4;
    vertical-align: middle;
  }
`;

export const SubContentFinished = styled.div`
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

export const SubContentAlready = styled.div`
  width: 100%;
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

export const StyledButton = styled.button`
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  border: 0;
  color: #fff;
  border-radius: 5px;
  background: #7950f2;
`;

export const FinishedButton = styled.button`
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #868e96;
  border-radius: 5px;
  background: #ffff;
  border: 2px solid #868e96;
`;

export const AlreadyButton = styled.button`
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #fff;
  border-radius: 5px;
  background: #0dbd7e;
  border: none;
`;
