import React from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const MenuItems = ({ navLinks }) => {
  const classes = useStyles();
  return (
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
  );
};

export default MenuItems;
