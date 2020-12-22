import React, { useState } from 'react';

import { useMediaQuery, CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const light = {
  palette: {
    type: 'light',
  },
};

const dark = {
  palette: {
    type: 'dark',
  },
};

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // console.log('prefersDarkMode? ', prefersDarkMode);

  const createTheme = theme => responsiveFontSizes(createMuiTheme(theme));
  const themeSettings = darkMode ? dark : light;
  const theme = React.useMemo(() => createTheme(themeSettings), [darkMode]);
  const switchDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} onClickDarkMode={switchDarkMode} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
