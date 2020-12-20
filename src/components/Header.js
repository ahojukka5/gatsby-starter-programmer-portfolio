import React from 'react';
import { Link } from 'gatsby';

import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Home, Brightness4, Brightness5 } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import useSiteMetadata from '../hooks/useSiteMetadata';
import MenuItems from './MenuItems';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  title: {
    fontWeight: 'bold',
  },
  toolbar: {
    padding: 0,
  },
});

const navLinks = [
  { title: `Home`, path: `/`, hidden: true },
  { title: `Posts`, path: `/posts` },
  { title: `Projects`, path: `/projects` },
  { title: `Research`, path: `/research` },
];

const DarkModeIcon = ({ darkMode, onClick }) => {
  return (
    <IconButton edge="start" aria-label="home" onClick={onClick}>
      {darkMode ? (
        <Brightness4 fontSize="large" />
      ) : (
        <Brightness5 fontSize="large" />
      )}
    </IconButton>
  );
};

const Header = ({ darkMode, onClickDarkMode }) => {
  const { author, title, description } = useSiteMetadata();
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={classes.toolbar}>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton component={Link} to="/" edge="start">
            <Home fontSize="large" />
          </IconButton>
          <Hidden xsDown>
            <MenuItems navLinks={navLinks} />
          </Hidden>
          <div>
            <DarkModeIcon darkMode={darkMode} onClick={onClickDarkMode} />
            <SideDrawer navLinks={navLinks} />
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
