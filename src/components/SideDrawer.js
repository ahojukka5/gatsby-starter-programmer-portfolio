import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  link: {
    textDecoration: `none`,
  },
});

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(navLink => (
          <Link to={navLink.path} key={navLink.path} className={classes.link}>
            <ListItem button>
              {navLink.icon && (
                <ListItemIcon>
                  <navLink.icon />
                </ListItemIcon>
              )}
              <ListItemText>
                <Typography variant="h6" color="textPrimary">
                  {navLink.title}
                </Typography>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer('right', true)}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </>
  );
};

export default SideDrawer;
