import React from 'react';
import { Link } from 'gatsby';

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

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <header>
        <Link to="/">
          {siteTitle}
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
