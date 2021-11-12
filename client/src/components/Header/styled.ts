import styled from 'styled-components';

interface SearchHeaderProp {
  searchHeader: boolean;
}

export const HeaderTag = styled.header`
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div<SearchHeaderProp>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  height: 70px;
  transition: all 0.3s;
  transform: ${(props) =>
    props.searchHeader ? 'translateX(-100%)' : 'translateX(0%)'};
  & > div {
    flex: 1 1 40%;
  }
  & > a {
    display: block;
    width: auto;
    height: 100%;
    flex: 1 1 auto;
    text-align: center;
  }
  & > a > img {
    width: auto;
    height: 100%;
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
  @media all and (max-width: 960px) {
    padding: 10px 15px;
    justify-content: center;
    div {
      display: none;
    }
  }
  @media all and (max-width: 580px) {
    height: 50px;
  }
`;

export const NavbarL = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: left;
  font-size: 20px;
  font-weight: 700;
  color: #495057;
  @media all and (max-width: 1200px) {
    font-size: 16px;
    gap: 10px;
  }
  @media all and (max-width: 1000px) {
    font-size: 12.8px;
  }
`;

export const NavbarR = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    cursor: pointer;
  }
  @media all and (max-width: 1200px) {
    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  }
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: absolute;
  top: 40px;
  right: 55px;
  padding: 15px 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  button {
    display: block;
    font-size: 16px;
    font-weight: 600;
    border: none;
    color: #404040;
    cursor: pointer;
    background: inherit;
  }
  button:hover {
    color: ${({ theme }) => theme.colors.violet};
  }
  @media all and (max-width: 1200px) {
    right: 50px;
  }
  @media all and (max-width: 960px) {
    z-index: 5;
    position: fixed;
    top: auto;
    right: 125px;
    bottom: 35px;
  }
`;

export const NoticeMenuBox = styled.div`
  z-index: 5;
  position: absolute;
  top: 40px;
  right: 110px;
  padding: 15px 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  button {
    display: block;
    font-size: 16px;
    font-weight: 600;
    border: none;
    color: #404040;
    cursor: pointer;
    background: inherit;
  }
  button:hover {
    color: ${({ theme }) => theme.colors.violet};
  }
  @media all and (max-width: 1200px) {
    right: 95px;
  }
  @media all and (max-width: 960px) {
    z-index: 5;
    position: fixed;
    top: auto;
    right: 80px;
    bottom: 35px;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #7950f2;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #7950f2;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    transition: all 0.3s;
    background-color: #7950f2;
  }
  @media all and (max-width: 1200px) {
    font-size: 16px;
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
  padding: 0 30px;
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
    height: 48px;
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
    line-height: 48px;
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
