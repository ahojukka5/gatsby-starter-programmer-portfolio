import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Box, Divider, Typography } from '@material-ui/core';

import SEO from '../components/seo';
import Layout from '../components/Layout';

const Post = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <Typography variant="h6" color="textPrimary" align="center">
        <Box my={1} lineHeight="normal">
          {post.frontmatter.title}
        </Box>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {post.frontmatter.date}
      </Typography>
      <Box my={1}>
        <Typography variant="body2" color="textPrimary" align="center">
          {post.frontmatter.author}
        </Typography>
      </Box>
      <Divider />
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    mdx: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        author
        date(formatString: "YYYY MMMM Do")
      }
      excerpt
    }
  }
`;
