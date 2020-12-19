/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import { useColorMode, Flex, NavLink } from 'theme-ui';

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
      <Flex as="nav">
        <NavLink to="/" as={Link}>
          {siteTitle}
        </NavLink>
        <div sx={{ mx: 'auto' }} />
        <NavLink to="/posts" as={Link}>
          Posts
        </NavLink>
        <NavLink to="/projects" as={Link}>
          Projects
        </NavLink>
        <NavLink to="/research" as={Link}>
          Research
        </NavLink>
        <NavLink to="/cv" as={Link}>
          CV
        </NavLink>
        <ColorChangeSwitch />
      </Flex>
    </header>
  );
};

export default Header;
