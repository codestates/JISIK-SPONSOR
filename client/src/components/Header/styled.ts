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
  padding: 0 3rem;
  width: 100%;
  height: 7rem;
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
    padding: 1rem 1.5rem;
    justify-content: center;
    div {
      display: none;
    }
  }
  @media all and (max-width: 580px) {
    height: 5rem;
  }
`;

export const NavbarL = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: left;
  font-size: 2rem;
  font-weight: 700;
  color: #495057;
  @media all and (max-width: 1200px) {
    font-size: 1.6rem;
    gap: 1rem;
  }
  @media all and (max-width: 1000px) {
    font-size: 1.28rem;
  }
`;

export const NavbarR = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  gap: 1rem;
  img {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  img.userIcon {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
    border-radius: 50%;
  }
  @media all and (max-width: 1200px) {
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 0.5rem;
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
  top: 4rem;
  right: 5.5rem;
  padding: 1.5rem 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  button {
    display: block;
    font-size: 1.6rem;
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
    right: 5rem;
  }
  @media all and (max-width: 960px) {
    z-index: 5;
    position: fixed;
    top: auto;
    right: 12.5rem;
    bottom: 3.5rem;
  }
`;

export const NoticeMenuBox = styled.div`
  z-index: 5;
  position: absolute;
  top: 4rem;
  right: 11rem;
  padding: 1.5rem 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  button {
    display: block;
    font-size: 1.6rem;
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
    right: 9.5rem;
  }
  @media all and (max-width: 960px) {
    z-index: 5;
    position: fixed;
    top: auto;
    right: 8rem;
    bottom: 3.5rem;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  cursor: pointer;
  font-size: 2rem;
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
    font-size: 1.6rem;
  }
`;

export const SearchBoxWrap = styled.div<SearchHeaderProp>`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;
  position: absolute;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 3rem;
  text-align: right;
  transition: all 0.3s;
  transform: ${(props) =>
    props.searchHeader ? 'translateX(-100%)' : 'translateX(100%)'};
  & > img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
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
    height: 4.8rem;
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
