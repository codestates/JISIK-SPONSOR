import { ThemeProvider } from 'styled-components';
import { useState, useRef } from 'react';
import { MenuBox } from '../src/components/Header/styled';
import { Link } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/Header/Header';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import MobileNav from 'components/MobileNav/MobileNav';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
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
  const [showBox, setShowBox] = useState<boolean>(false);

  const menuBoxRef = useRef(null);

  const handleLogout = async () => {
    try {
      await axios.post(
        `
      ${REACT_APP_API_URL}/logout`,
        {},
        {
          withCredentials: true
        }
      );
      dispatch(logout());
      setShowBox(false);
      localStorage.removeItem('abc');
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  document.addEventListener('click', (e: any) => {
    if (e.target !== menuBoxRef.current && e.target.className !== 'userIcon') {
      setShowBox(false);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header showBox={showBox} setShowBox={setShowBox} />
        {showBox && (
          <MenuBox ref={menuBoxRef}>
            <Link to="/mypage">
              <button>마이페이지</button>
            </Link>

            <button onClick={handleLogout}>로그아웃</button>
          </MenuBox>
        )}
        <Body />
        <Footer />
        <Modal />
        <MobileNav />
      </>
    </ThemeProvider>
  );
}

export default App;
