import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

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
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  { title: `Posts`, path: `/posts` },
  { title: `Projects`, path: `/projects` },
  { title: `Research`, path: `/research` },
];

const DarkModeIcon = ({ darkMode, onClick }) => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="home"
      onClick={onClick}
    >
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
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Hidden xsDown>
            <MenuItems navLinks={navLinks} />
          </Hidden>
          <div>
            <DarkModeIcon darkMode={darkMode} onClick={onClickDarkMode} />
            <Hidden smUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
