import React from 'react';
import { MobileNavBar, NavbarR, NavButton } from './styled';
import Search from 'images/icons/search-icon.png';
import Menubar from 'images/icons/menubar.png';
import Cancelbar from 'images/icons/cancelbar.png';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from 'store/modal-slice';

const MobileNav = () => {
  const dispatch = useDispatch();

  return (
    <MobileNavBar>
      <div>
        <div>
          <img src={Menubar} alt="menu-bar" />
          <img src={Cancelbar} alt="menu-bar" />
        </div>
        <NavbarR>
          <img src={Search} alt="search-icon" />
          <NavButton onClick={() => dispatch(showLoginModal(true))}>
            로그인
          </NavButton>
          <NavButton onClick={() => dispatch(showSignupModal(true))}>
            회원가입
          </NavButton>
        </NavbarR>
      </div>
    </MobileNavBar>
  );
};

export default MobileNav;
