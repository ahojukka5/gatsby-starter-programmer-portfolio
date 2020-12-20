import React from 'react';

import { Link } from 'gatsby';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  link: {
    textDecoration: `none`,
  },
  linkText: {
    fontWeight: `bold`,
  },
});

const NavLink = navLink => {
  const classes = useStyles();
  return (
    <ListItem button key={navLink.path}>
      <ListItemText>
        <Link to={navLink.path} key={navLink.path} className={classes.link}>
          <Typography color="textPrimary">{navLink.title}</Typography>
        </Link>
      </ListItemText>
    </ListItem>
  );
};

const MenuItems = ({ navLinks }) => {
  const classes = useStyles();
  const visible = navLink => !navLink.hidden;
  return (
    <List
      component="nav"
      aria-labelledby="main navigation"
      className={classes.navDisplayFlex}
    >
      {navLinks.filter(visible).map(NavLink)}
    </List>
  );
};

export default MenuItems;
