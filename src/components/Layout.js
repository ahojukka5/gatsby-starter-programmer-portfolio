import React from 'react';
import SEO from '../components/seo';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Container>
      <SEO title="Jukka Aho" />
      <SEO title="ahojukka5" />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
