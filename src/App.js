import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';

import {GlobalStyle} from './styles/global';
import { theme } from './styles/theme/default';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
