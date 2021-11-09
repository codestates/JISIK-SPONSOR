import styled from 'styled-components';

interface SearchHeaderProp {
  searchHeader: boolean;
}

export const MobileNavWrap = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #f3f0ff;
  border-top: 2px solid #adb5bd;
  overflow: hidden;
`;

export const MobileNavBar = styled.div<SearchHeaderProp>`
  position: relative;
  padding: 0 15px;
  height: 60px;
  left: ${(props) => (props.searchHeader ? '-100%;' : '0')};
  transition: all 0.3s;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const MobileNavIcon = styled.div`
  height: 30px;
  > button {
    padding: 0;
    cursor: pointer;
    height: 100%;
    border: none;
    background: none;
  }
  > button img {
    height: 100%;
  }
  .cancel {
    padding: 5px;
  }
`;

export const Menubox = styled.div`
  position: sticky;
  left: 0;
  bottom: 60px;
  width: 100%;
  padding: 30px 20px 40px 20px;
  background: #fff;
  transition: all 0.3s;
  img {
    width: auto;
    height: 30px;
    margin-bottom: 30px;
  }
`;

export const MenuboxOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 70px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const NavbarL = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: 20px;
  text-indent: 5px;
  font-weight: 500;
  color: #495057;
`;

export const NavbarR = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  button {
    padding: 0;
    border: 0;
    height: 30px;
    cursor: pointer;
    background: none;
  }
  img {
    height: 30px;
  }
`;

export const NavButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  padding: 8px 20px;
  color: #7950f2;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #7950f2;
  &:hover {
    color: #fff;
    background-color: #7950f2;
  }
`;

export const SearchBoxWrap = styled.div<SearchHeaderProp>`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
  position: absolute;
  left: 100%;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  text-align: right;
  transition: all 0.3s;
  transform: ${(props) =>
    props.searchHeader ? 'translateX(-100%)' : 'translateX(100%)'};
  & > img {
    width: 25px;
    height: 25px;
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
    height: 40px;
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
    line-height: 40px;
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
