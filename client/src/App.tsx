import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { MenuBox, NoticeMenuBox } from '../src/components/Header/styled';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/Header/Header';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import MobileNav from 'components/MobileNav/MobileNav';
import { REACT_APP_API_URL } from 'config';
import { logout } from 'store/login-slice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const theme = {
  colors: {
    violet: '#7950F2',
    orange: '#F59F00',
    footer: '#343A40',
    violetWord: '#5F3DC4',
    suppotWord: '#868e96'
  },
  mobile: '768px'
};

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const menuBoxRef = useRef(null);
  const NoticeMenuBoxRef = useRef(null);
  const [showBox, setShowBox] = useState<boolean>(false);
  const [showNoticeBox, setShowNoticeBox] = useState<boolean>(false);

  document.addEventListener('click', (e: any) => {
    if (e.target !== menuBoxRef.current && e.target.className !== 'userIcon') {
      setShowBox(false);
    }
    if (
      e.target !== NoticeMenuBoxRef.current &&
      e.target.className !== 'noticeIcon'
    ) {
      setShowNoticeBox(false);
    }
  });

  const handleLogout = async () => {
    try {
      await axios.post(
        `${REACT_APP_API_URL}/logout`,
        {},
        { withCredentials: true }
      );
      history.push('/');
      dispatch(logout());
      localStorage.removeItem('root');
      setShowBox(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showMenuBox = () => {
    setShowBox(!showBox);
  };

  const showNoticeMenuBox = () => {
    setShowNoticeBox(!showNoticeBox);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header
          showMenuBox={showMenuBox}
          showNoticeMenuBox={showNoticeMenuBox}
        />
        <Body />
        <Footer />
        <Modal />
        {showBox && (
          <MenuBox ref={menuBoxRef}>
            <Link to="/mypage">
              <button>마이페이지</button>
            </Link>
            <Link to="/setting">
              <button>설정</button>
            </Link>
            <button onClick={handleLogout}>로그아웃</button>
          </MenuBox>
        )}
        {showNoticeBox && (
          <NoticeMenuBox ref={NoticeMenuBoxRef}>
            <Link to="/">
              <button>준비중입니다!</button>
            </Link>
          </NoticeMenuBox>
        )}
        <MobileNav
          showMenuBox={showMenuBox}
          showNoticeMenuBox={showNoticeMenuBox}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
