import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './utils/Router';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
