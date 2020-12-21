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
import { Brightness4, Brightness5 } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import useSiteMetadata from '../hooks/useSiteMetadata';
import MenuItems from './MenuItems';
import SideDrawer from './SideDrawer';
import SearchInput from './SearchInput';

const useStyles = makeStyles(theme => ({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  toolbar: {
    padding: 0,
  },
  link: {
    textDecoration: `none`,
    color: 'inherit',
  },
}));

const navLinks = [
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

const Spacer = () => <div style={{ flexGrow: 1 }} />;

const Header = ({ darkMode, onClickDarkMode }) => {
  const { author, title, description } = useSiteMetadata();
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.link}
          >
            {author}
          </Typography>
          <Hidden smDown>
            <div style={{ flexGrow: 0, paddingLeft: 12 }}>
              <MenuItems navLinks={navLinks} />
            </div>
          </Hidden>

          <Spacer />
          <DarkModeIcon darkMode={darkMode} onClick={onClickDarkMode} />
          <SearchInput />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
