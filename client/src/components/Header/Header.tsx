import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { showLoginModal, showSignupModal } from 'store/modal-slice';
import {
  HeaderTag,
  NavContainer,
  NavbarL,
  NavbarR,
  NavButton,
  SearchBoxWrap
} from './styled';
import Logo from 'images/logo-img.png';
import Search from 'images/icons/search-icon.png';
import XIcon from 'images/icons/search-x-icon.png';
import BellIcon from 'images/icons/bell-icon.png';
import UserIcon from 'images/icons/user-icon.png';
import { searchContent } from '../../store/headerSearch-slice';
import { RootState } from 'index';

interface showProps {
  showMenuBox: () => void;
  showNoticeMenuBox: () => void;
}

const Header = ({ showMenuBox, showNoticeMenuBox }: showProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState<string>('');
  const [searchHeader, setSearchHeader] = useState<boolean>(false);

  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const searchHandle = (e: any) => {
    setSearch(e.target.value);
  };

  const moveBoardPageFn = (e: any) => {
    if (e.key === 'Enter' || e.target.localName === 'span') {
      dispatch(searchContent(search));
      history.push({ pathname: '/board', state: { search } });
      setSearchHeader(false);
      setSearch('');
    }
  };

  const searchBtnClick = () => {
    setSearchHeader(!searchHeader);
  };

  return (
    <HeaderTag>
      <NavContainer searchHeader={searchHeader}>
        <NavbarL>
          <Link to="/board">
            <span>모든 프로젝트</span>
          </Link>
          <Link to="/start">
            <span>프로젝트 시작하기</span>
          </Link>
          <Link to="/about">
            <span>서비스 소개</span>
          </Link>
        </NavbarL>
        <Link to="/">
          <img src={Logo} alt="logo-image" />
        </Link>
        <NavbarR>
          <img src={Search} alt="search-icon" onClick={searchBtnClick} />
          {isLogin ? (
            <>
              <img
                src={BellIcon}
                alt="notification-icon"
                onClick={showNoticeMenuBox}
                className="noticeIcon"
              />
              <img
                src={UserIcon}
                alt="mypage-icon"
                onClick={showMenuBox}
                className="userIcon"
              />
            </>
          ) : (
            <>
              <NavButton onClick={() => dispatch(showLoginModal(true))}>
                로그인
              </NavButton>
              <NavButton onClick={() => dispatch(showSignupModal(true))}>
                회원가입
              </NavButton>
            </>
          )}
        </NavbarR>
      </NavContainer>
      <SearchBoxWrap searchHeader={searchHeader}>
        <img src={XIcon} alt="search-icon" onClick={searchBtnClick} />
        <label>
          <input
            value={search}
            placeholder="검색어를 입력하세요."
            onChange={(e) => searchHandle(e)}
            onKeyPress={(e) => moveBoardPageFn(e)}
          />
          <span onClick={(e) => moveBoardPageFn(e)}>검색</span>
        </label>
      </SearchBoxWrap>
    </HeaderTag>
  );
};

export default Header;
