import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header/Header';

const theme = {
  colors: {
    violet: '#7950F2',
    orange: '#F59F00',
    footer: '#343A40'
  },
  mobile: '768px'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Body />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
