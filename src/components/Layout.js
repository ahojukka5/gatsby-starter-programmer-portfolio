import React, { useState } from 'react';

import { useMediaQuery, CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export const light = {
  palette: {
    type: 'light',
  },
};

export const dark = {
  palette: {
    type: 'dark',
  },
};

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // console.log('prefersDarkMode? ', prefersDarkMode);

  const theme = React.useMemo(() => createMuiTheme(darkMode ? dark : light), [
    darkMode,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        darkMode={darkMode}
        onClickDarkMode={() => setDarkMode(!darkMode)}
      />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
