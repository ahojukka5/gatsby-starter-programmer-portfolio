import React from 'react';
import { Link } from 'gatsby';

import useSiteMetadata from '../hooks/useSiteMetadata';

const ColorChangeSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      onClick={e => {
        setColorMode(colorMode === 'default' ? 'light' : 'default');
      }}
    >
      Toggle {colorMode === 'default' ? 'Light' : 'Dark'}
    </button>
  );
};

const Header = () => {
  const { title } = useSiteMetadata();
  return (
    <header>
        <Link to="/">
          {title}
        </Link>
        <Link to="/posts">
          Posts
        </Link>
        <Link to="/projects">
          Projects
        </Link>
        <Link to="/research">
          Research
        </Link>
        <Link to="/cv">
          CV
        </Link>
    </header>
  );
};

export default Header;
