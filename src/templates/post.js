import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/seo';
import Layout from '../components/Layout';

const Post = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
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
        date(formatString: "YYYY MMMM Do")
      }
      excerpt
    }
  }
`;
