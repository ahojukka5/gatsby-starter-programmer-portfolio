import { Link } from 'gatsby';
import React from 'react';
import { useColorMode } from 'theme-ui';

const Header = ({ siteTitle, siteDescription }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'light' : 'default');
        }}
      >
        Toggle {colorMode === 'default' ? 'Light' : 'Dark'}
      </button>
      <Link to="/">
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
      </Link>
    </header>
  );
};

export default Header;
