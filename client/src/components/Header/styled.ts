import styled from 'styled-components';

export const NavContainer = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  /* background-color: beige; */
  width: 100%;
  height: 70px;

  img {
    width: 272px;
    cursor: pointer;
  }
`;

export const NavbarL = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 407px;
  height: 29px;
  color: #495057;
  font-size: 20px;
  font-weight: 700;
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
`;
