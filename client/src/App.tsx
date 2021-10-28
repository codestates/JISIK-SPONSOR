import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';

import GlobalStyles from 'styles/GlobalStyles';

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
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Body />
        <Footer />
        <Modal />
      </>
    </ThemeProvider>
  );
}

export default App;
