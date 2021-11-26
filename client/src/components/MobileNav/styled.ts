import styled from 'styled-components';

interface SearchHeaderProp {
  searchHeader: boolean;
}

export const MobileNavWrap = styled.div`
  z-index: 4;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #f3f0ff;
  border-top: 2px solid #adb5bd;
  overflow: hidden;
`;

export const MobileNavBar = styled.div<SearchHeaderProp>`
  position: relative;
  padding: 0 1.5rem;
  height: 6rem;
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
  height: 3rem;
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
    padding: 0.5rem;
  }
`;

export const Menubox = styled.div`
  position: sticky;
  left: 0;
  bottom: 6rem;
  width: 100%;
  padding: 3rem 2rem 4rem 2rem;
  background: #fff;
  transition: all 0.3s;
  img {
    width: auto;
    height: 3rem;
    margin-bottom: 3rem;
  }

  a:hover {
    color: #7950f2;
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const MenuboxOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 7rem;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const NavbarL = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  font-size: 2rem;
  text-indent: 5px;
  font-weight: 500;
  color: #495057;
`;

export const NavbarR = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  button {
    padding: 0;
    border: 0;
    height: 3rem;
    cursor: pointer;
  }
  img {
    height: 3rem;
  }
`;

export const NavButton = styled.a`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.2;
  padding: 1rem 2rem;
  color: #7950f2;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #7950f2;
  margin-right: -1rem;
  transition: all 0.3s;
  :hover {
    color: #fff;
    background: #7950f2;
    transition: all 0.3s;
  }
  @media all and (max-width: 380px) {
    font-size: 1.28rem;
    border: 2px solid #7950f2;
  }
`;

export const SearchBoxWrap = styled.div<SearchHeaderProp>`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 2rem;
  position: absolute;
  left: 100%;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  text-align: right;
  transition: all 0.3s;
  transform: ${(props) =>
    props.searchHeader ? 'translateX(-100%)' : 'translateX(100%)'};
  & > img {
    width: 2.5rem;
    height: 2.5rem;
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
    width: 25rem;
    height: 4rem;
    font-size: 1.6rem;
    color: #343a40;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    border: 2px solid #868e96;
  }
  & > label > input::placeholder {
    font-size: 1.6rem;
    color: #868e96;
  }
  & > label > span {
    position: absolute;
    right: 0;
    top: 0;
    width: 6rem;
    display: block;
    font-size: 1.6rem;
    color: #fff;
    font-weight: 400;
    line-height: 4rem;
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
