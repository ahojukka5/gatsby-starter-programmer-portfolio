import React from 'react';
import { Link, graphql } from 'gatsby';
import { Box, Divider, Typography } from '@material-ui/core';

import Layout from '../components/Layout';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    textDecoration: `none`,
  },
});

const Post = ({ id, frontmatter, fields }) => {
  const classes = useStyles();
  return (
    <Box key={id} py={1}>
      <Box my={1} lineHeight="normal">
        <Link to={fields.slug} className={classes.link}>
          <Typography variant="h5" color="textPrimary">
            {frontmatter.title}
          </Typography>
        </Link>
      </Box>
      <Box mb={1}>
        <Typography variant="body2" color="textSecondary">
          By {frontmatter.author}, {frontmatter.date}
        </Typography>
      </Box>
    </Box>
  );
};

const Posts = ({ data }) => {
  const posts = data.allMdx.nodes;
  return <Layout>{posts.map(Post)}</Layout>;
};

export default Posts;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          author
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;
