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
    // textTransform: `uppercase`,
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
      {navLinks.map(
        navLink =>
          navLink.hidden || (
            <Link to={navLink.path} key={navLink.path} className={classes.link}>
              <ListItem button>
                <ListItemText>
                  <Typography color="textPrimary">
                    <Box fontWeight="fontWeightNormal" fontSize="h6.fontSize">
                      {navLink.title}
                    </Box>
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          )
      )}
    </List>
  );
};

export default MenuItems;
