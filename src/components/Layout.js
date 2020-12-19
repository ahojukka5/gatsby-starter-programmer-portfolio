import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';
import Footer from './Footer';

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <SEO title="Jukka Aho" />
      <SEO title="ahojukka5" />
      <Header siteTitle={title} siteDescription={description} />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </AppStyles>
  );
};

export default Layout;
