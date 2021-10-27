import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'images/logo-img.png';
import Search from 'images/icons/search-icon.png';

const NavContainer = styled.header`
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

const NavbarL = styled.div`
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

const NavbarR = styled.div`
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

const NavButton = styled.button`
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

const Header: React.FC = () => {
  return (
    <NavContainer>
      <NavbarL>
        <Link to="/board">
          <span>모든 프로젝트</span>
        </Link>
        <Link to="/start-project">
          <span>프로젝트 시작하기</span>
        </Link>
        <Link to="/about">
          <span>서비스 소개</span>
        </Link>
      </NavbarL>
      <Link to="/board">
        <img src={Logo} alt="logo-image" />
      </Link>
      <NavbarR>
        <img src={Search} alt="search-icon" />
        <NavButton>로그인</NavButton>
        <NavButton>회원가입</NavButton>
      </NavbarR>
    </NavContainer>
  );
};

export default Header;
