import { ThemeProvider } from 'styled-components';

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
        <div></div>;
      </>
    </ThemeProvider>
  );
}

export default App;
