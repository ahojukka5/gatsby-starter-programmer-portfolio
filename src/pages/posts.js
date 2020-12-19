import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Posts = ({ data }) => {
  const posts = data.allMdx.nodes;

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
    allMdx(
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
