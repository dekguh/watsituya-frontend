import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from './utils/Router';
import theme from './utils/theme';
import { store } from './utils/redux/store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
