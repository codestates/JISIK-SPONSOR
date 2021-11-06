import styled from 'styled-components';

export const MobileNavBar = styled.div`
  padding: 10px;
  background-color: #f3f0ff;
  position: sticky;
  bottom: 0;
  z-index: 10;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media screen and (min-width: 718px) {
    display: none;
  }
`;

export const MobileNavIcon = styled.div`
  > button {
    background-color: none;
    border: none;
    cursor: pointer;
  }

  .menu {
    /* display: none; */
  }

  .cancel img {
    /* display: none; */
    width: 25px;
    height: 25px;
  }
`;

export const Menubox = styled.div`
  background-color: rgba(255, 255, 255, 1);
  height: 45vh;
  width: 50vw;
  position: sticky;
  bottom: 0;
  transition: all 0.5s;
  z-index: 9;

  img {
    height: 15%;
    width: 90%;
    margin-bottom: 30px;
    margin-top: 15px;
  }
`;

export const MenuboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const NavbarL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 15px;
  color: #495057;
  font-size: 27px;
  font-weight: 700;
`;

export const NavbarR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  padding: 10px 20px;
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
`;
