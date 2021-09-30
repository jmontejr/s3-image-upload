import React from 'react';
import Home from './pages/Home';

import {GlobalStyle} from './styles/global';
import { theme } from './styles/theme/default';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
