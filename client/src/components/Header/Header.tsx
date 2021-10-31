import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'images/logo-img.png';
import Search from 'images/icons/search-icon.png';
import { NavContainer, NavbarL, NavbarR, NavButton } from './styled';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from 'store/modal-slice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
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
        <NavButton onClick={() => dispatch(showLoginModal(true))}>
          로그인
        </NavButton>
        <NavButton onClick={() => dispatch(showSignupModal(true))}>
          회원가입
        </NavButton>
      </NavbarR>
    </NavContainer>
  );
};

export default Header;
