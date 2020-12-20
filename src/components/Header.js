import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

import {
  AppBar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import { Home, Brightness4, Brightness5 } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import useSiteMetadata from '../hooks/useSiteMetadata';

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
  { title: `About me`, path: `/about` },
  { title: `Posts`, path: `/posts` },
  { title: `Projects`, path: `/projects` },
  { title: `Research`, path: `/research` },
  { title: `CV`, path: `/cv` },
];

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
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={onClickDarkMode}
          >
            {darkMode ? (
              <Brightness4 fontSize="large" />
            ) : (
              <Brightness5 fontSize="large" />
            )}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
