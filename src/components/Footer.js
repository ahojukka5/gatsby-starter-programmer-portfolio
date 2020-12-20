import React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';

import Typography from '@material-ui/core/Typography';

const Footer = () => {
  const { author, title, description } = useSiteMetadata();
  const year = new Date().getFullYear();
  const text = `Copyright © ${author} ${year}.`;
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {text}
      </Typography>
    </footer>
  );
};

export default Footer;
