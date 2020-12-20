import React from 'react';

import { Link } from 'gatsby';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  link: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  linkText: {
    fontWeight: `bold`,
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
        <Link to={path} key={title} className={classes.link}>
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default MenuItems;
