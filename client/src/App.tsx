import { ThemeProvider } from 'styled-components';
import { useState, useRef } from 'react';
import { MenuBox } from '../src/components/Header/styled';

import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/Header/Header';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import MobileNav from 'components/MobileNav/MobileNav';

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
  const [showBox, setShowBox] = useState<boolean>(false);

  const testRef = useRef(null);

  // document.addEventListener('click', (e: MouseEvent) => {
  //   if (showBox && !testRef.contains(target)) {
  //     setShowBox(false);
  //   }
  // });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header showBox={showBox} setShowBox={setShowBox} />
        {showBox && (
          <MenuBox ref={testRef}>
            <button>마이페이지</button>
            <button>로그아웃</button>
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
