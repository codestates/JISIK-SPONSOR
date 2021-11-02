import React, { useState } from 'react';
import {
  MobileNavBar,
  NavbarR,
  NavbarL,
  NavButton,
  MobileNavIcon,
  Menubox,
  MenuboxOverlay
} from './styled';
import Search from 'images/icons/search-icon.png';
import Menubar from 'images/icons/menubar.png';
import Cancelbar from 'images/icons/cancelIcon.png';
import BellIcon from 'images/icons/bell-icon.png';
import UserIcon from 'images/icons/user-icon.png';
import Logo from 'images/logo-img.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showLoginModal, showSignupModal } from 'store/modal-slice';
import { RootState } from 'index';

const MobileNav = () => {
  const [clickedMenu, setClickedMenu] = useState<boolean>(false);

  const loggedIn = useSelector((state: RootState) => state.login);
  const { isLogin } = loggedIn;
  console.log(isLogin);
  const dispatch = useDispatch();

  const menubarHandler = () => {
    setClickedMenu(!clickedMenu);
  };

  return (
    <>
      {clickedMenu && (
        <>
          <MenuboxOverlay onClick={menubarHandler} />
          <Menubox>
            <img src={Logo} alt="logo-image" />
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
          </Menubox>
        </>
      )}
      <MobileNavBar>
        {isLogin && (
          <div>
            <MobileNavIcon>
              {!clickedMenu ? (
                <button className="menu" onClick={menubarHandler}>
                  <img src={Menubar} alt="menu-bar" />
                </button>
              ) : (
                <button className="cancel">
                  <img
                    src={Cancelbar}
                    alt="menu-bar"
                    onClick={menubarHandler}
                  />
                </button>
              )}
            </MobileNavIcon>
            <NavbarR>
              <button>
                <img src={Search} alt="search-icon" />
              </button>
              <button>
                <img src={BellIcon} alt="search-icon" />
              </button>
              <button>
                <img src={UserIcon} alt="search-icon" />
              </button>
            </NavbarR>
          </div>
        )}
        {!isLogin && (
          <div>
            <div></div>
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
        )}
      </MobileNavBar>
    </>
  );
};

export default MobileNav;
