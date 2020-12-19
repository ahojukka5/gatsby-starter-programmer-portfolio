import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Posts = ({ data }) => {
  const getDate = post => new Date(post.frontmatter.date);
  const byDate = (a, b) => getDate(b) - getDate(a);
  const posts = [...data.md.nodes, ...data.mdx.nodes].sort(byDate);

  return (
    <Layout>
      <IndexWrapper>
        {posts.map(
          ({ id, excerpt, frontmatter: { title, date }, fields: { slug } }) => (
            <PostWrapper key={id}>
              <Link to={slug}>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          )
        )}
      </IndexWrapper>
    </Layout>
  );
};

export default Posts;

export const query = graphql`
  query SITE_INDEX_QUERY {
    md: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }

    mdx: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;
