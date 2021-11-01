import styled from 'styled-components';

export const MobileNavBar = styled.div`
  padding: 10px;
  background-color: #f3f0ff;
  position: sticky;
  bottom: 0;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 10px 15px; */
    width: 100%;

    div > img {
      height: 30px;
      width: 30px;
    }
  }

  @media screen and (min-width: 576px) {
    div {
      display: none;
    }
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
`;

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid #7950f2;
  color: #7950f2;
  background-color: transparent;
  line-height: 1.4;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #7950f2;
  }
`;
