import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Menu, Home } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import useSiteMetadata from '../hooks/useSiteMetadata';

const useStyles = makeStyles({ list: { width: 250 } });

const NavLink = navLink => {
  return (
    <ListItem button key={navLink.path} component={Link} to={navLink.path}>
      <ListItemIcon>{navLink.children}</ListItemIcon>
      <ListItemText>
        <Typography variant="h6" color="textPrimary">
          {navLink.title}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

const SideDrawer = ({ navLinks }) => {
  const [open, setOpen] = useState(false);
  const { author } = useSiteMetadata();
  const classes = useStyles();

  return (
    <>
      <IconButton edge="start" onClick={() => setOpen(true)}>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div onClick={() => setOpen(false)}>
          <List component="nav" className={classes.list}>
            <NavLink title={author} path={'/'}>
              <Home />
            </NavLink>
            <Divider />
            {navLinks.map(NavLink)}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SideDrawer;
