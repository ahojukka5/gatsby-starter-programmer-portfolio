import React from 'react';
import SEO from '../components/seo';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <SEO title="Jukka Aho" />
      <SEO title="ahojukka5" />
      <header>
        <Header siteTitle={title} siteDescription={description} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
