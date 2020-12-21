import React from 'react';

import { Link } from 'gatsby';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';

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
          <Typography variant="h6" color="textPrimary">
            {navLink.title}
          </Typography>
        </Link>
      </ListItemText>
    </ListItem>
  );
};

const MenuItems = ({ navLinks }) => {
  const classes = useStyles();
  const visible = navLink => !navLink.hidden;
  return (
    <List component="nav" className={classes.navDisplayFlex}>
      {navLinks.filter(visible).map(NavLink)}
    </List>
  );
};

export default MenuItems;
