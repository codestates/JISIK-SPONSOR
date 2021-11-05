import styled from 'styled-components';

interface SearchHeaderProp {
  searchHeader: boolean;
}

export const HeaderTag = styled.header`
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div<SearchHeaderProp>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 70px;
  transition: all 0.3s;
  transform: ${(props) =>
    props.searchHeader ? 'translateX(-100%)' : 'translateX(0%)'};
  & img {
    width: 272px;
    cursor: pointer;
    transition: all 0.3s;
  }
  & img:hover {
    transform: matrix(1, 0, 0, 1, 0, -2.5);
    transition: all 0.3s;
  }
  & a:hover {
    color: #7950f2;
  }

  @media screen and (max-width: 1031px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 250px;
    }
  }

  @media screen and (max-width: 940px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 230px;
    }
  }

  @media screen and (max-width: 718px) {
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;

    img {
      width: 200px;
    }

    div {
      display: none;
    }
  }
`;

export const NavbarL = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 29px;
  color: #495057;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 1031px) {
    font-size: 17px;
    gap: 10px;
  }

  @media screen and (max-width: 940px) {
    font-size: 14px;
    gap: 7px;
  }
`;

export const NavbarR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1031px) {
    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  }
`;

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  padding: 10px 25px;
  border-radius: 5px;
  border: 2px solid #7950f2;
  color: #7950f2;
  background-color: transparent;
  line-height: 1.4;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #7950f2;
  }

  @media screen and (max-width: 1031px) {
    padding: 5px 12px;
    font-size: 15px;
  }

  @media screen and (max-width: 940px) {
    padding: 3px 6px;
    font-size: 12px;
  }
`;

export const SearchBoxWrap = styled.div<SearchHeaderProp>`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
  position: absolute;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 15px 30px;
  text-align: right;
  transition: all 0.3s;
  transform: ${(props) =>
    props.searchHeader ? 'translateX(-100%)' : 'translateX(100%)'};
  & > img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
  }
  & > label {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
  }
  & > label > input {
    position: relative;
    display: block;
    width: 250px;
    height: 100%;
    font-size: 16px;
    color: #343a40;
    border-radius: 5px;
    padding: 5px 10px;
    border: 2px solid #868e96;
  }
  & > label > input::placeholder {
    font-size: 16px;
    color: #868e96;
  }
  & > label > span {
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    display: block;
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    line-height: 38px;
    text-align: center;
    background: #868e96;
    cursor: pointer;
  }
  & > label > input:focus {
    border: 2px solid #7950f2;
  }
  & > label > input:focus::placeholder {
    color: #7950f2;
  }
  & > label > input:focus + span {
    background: #7950f2;
  }
`;
