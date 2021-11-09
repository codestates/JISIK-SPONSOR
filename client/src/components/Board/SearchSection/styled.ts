/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
  max-width: 960px;
  margin: 0 auto;
  padding: 30px 30px 0 30px;
  @media all and (max-width: 620px) {
    flex-direction: column;
    padding: 30px 15px 0 15px;
  }
`;

export const SearchWrap = styled.div`
  position: relative;
  & input {
    position: relative;
    width: 250px;
    height: 45px;
    font-size: 16px;
    color: #343a40;
    padding: 0 15px;
    border-radius: 5px;
    border: 2px solid #868e96;
  }
  & button {
    position: absolute;
    top: 0;
    right: 0;
    height: 45px;
    color: #fff;
    padding: 0 15px;
    cursor: pointer;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #343a40;
  }
  @media all and (max-width: 620px) {
    & input {
      width: 100%;
    }
  }
`;

export const FilterWrap = styled.div`
  & select {
    cursor: pointer;
    width: 160px;
    height: 45px;
    padding: 0 15px;
    color: #343a40;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #868e96;
    background-image: linear-gradient(45deg, transparent 50%, #343a40 50%),
      linear-gradient(135deg, #343a40 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    outline: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
  & select::placeholder {
    color: #868e96;
  }
  @media all and (max-width: 620px) {
    & select {
      width: 100%;
    }
  }
`;
