import styled, { css } from 'styled-components';

interface DisplayProps {
  noDisplay: any;
}

export const Section = styled.section`
  width: 100%;
  padding: 6rem 0;

  @media all and (max-width: 620px) {
    padding: 4rem 0;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 3rem;

  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
  }
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  align-items: center;
  margin-bottom: 1.5rem;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }
  }
  > button {
    border: none;
    background: none;
    cursor: pointer;
  }
  > button > img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const ProjectTitle = styled.div`
  margin-bottom: 3.5rem;
  & > h1 {
    font-size: 3.9rem;
    font-weight: 500;
    line-height: 1.4;
    color: #212529;
    margin-bottom: 1.5rem;
  }
  & > span {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.6;
    color: #495057;
  }
  @media all and (max-width: 620px) {
    & > h1 {
      font-size: 3.125rem;
    }
    & > span {
      font-size: 1.6rem;
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
  padding-right: 3rem;
  > span {
    position: relative;
    display: block;
    width: 100%;
    height: 42rem;
    overflow: hidden;
    margin-bottom: 2rem;
    border-radius: 5px;
  }
  > span:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    clear: both;
    background: rgba(0, 0, 0, 0.3);
  }
  img {
    width: 100%;
    height: auto;
    min-height: 100%;
  }
  @media all and (max-width: 900px) {
    width: 100%;
    padding: 0;
    margin-bottom: 2rem;
  }
  @media all and (max-width: 620px) {
    > span {
      height: auto;
      max-height: 300px;
    }
    img {
      min-height: auto;
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
    font-size: 3.2rem;
    font-weight: 700;
    color: #212529;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  & > p {
    font-size: 1.6rem;
    font-weight: 700;
    color: #343a40;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
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
  margin: 0.5rem 0 2rem 0;
  > p {
    display: flex;
    justify-content: space-between;
  }
  & > p:first-child span:first-child {
    font-size: 1.6rem;
    font-weight: 600;
    color: #f08c00;
    line-height: 1.4;
  }
  & > p:first-child span {
    font-size: 1.6rem;
    font-weight: 600;
    color: #343a40;
    line-height: 1.4;
  }
  & > p {
    font-size: 1.2rem;
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
  gap: 0.5rem;
  & > div {
    display: flex;
    align-items: center;
  }
  & > div > span {
    display: block;
    width: 10rem;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.6;
    color: #343a40;
    margin-right: 1rem;
  }
  & > div:last-child {
    margin-bottom: 2rem;
  }
  > div input {
    width: 100%;
    padding: 1rem;
    height: 4rem;
    border: 2px solid #e9ecef;
    border-radius: 3px;
    margin: 0.5rem 0;
  }
  > div input::placeholder {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
    color: #8d959d;
    -webkit-appearance: none;
  }
  > p {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4;
    color: #dd584a;
    margin-bottom: 1rem;
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
  font-size: 1.4rem;
  line-height: 1.4;
  font-weight: 500;
  color: #ff0200;
  margin-top: 2rem;
  ${(props) => {
    return props.noDisplay && DisplayNone;
  }}
`;

export const HashTagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  @media all and(max-width: 900px) {
    margin-bottom: 3rem;
  }
`;

export const HashTag = styled.button`
  border: 0;
  background: none;
  strong {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
    color: #5f3dc4;
    margin-right: 0.2rem;
    vertical-align: middle;
  }
  span {
    font-size: 1.6rem;
    font-weight: 600;
    color: #495057;
    line-height: 1.4;
    vertical-align: middle;
  }
`;

export const SubContentFinished = styled.div`
  & > p:nth-child(odd) {
    font-size: 3.2rem;
    font-weight: 700;
    color: #212529;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  & > p:nth-child(even) {
    font-size: 1.6rem;
    font-weight: 700;
    color: #343a40;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
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
    font-size: 3.2rem;
    font-weight: 700;
    color: #212529;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  & > p {
    font-size: 1.6rem;
    font-weight: 700;
    color: #343a40;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  div {
    font-size: 1.28rem;
    font-weight: 500;
    line-height: 1.4;
    color: #dd584a;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
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
  padding: 2rem 3rem;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.4;
  border: 0;
  color: #fff;
  border-radius: 5px;
  background: #7950f2;
`;

export const GrayButton = styled.button`
  width: 100%;
  padding: 2rem 3rem;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.4;
  color: #868e96;
  border-radius: 5px;
  background: #ffff;
  border: 2px solid #868e96;
`;

export const AlreadyButton = styled.button`
  width: 100%;
  padding: 2rem 3rem;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.4;
  color: #fff;
  border-radius: 5px;
  background: #0dbd7e;
  border: none;
`;
