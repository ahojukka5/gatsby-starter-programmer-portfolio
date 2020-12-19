import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Posts = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => {
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

Posts.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        excerpt: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }).isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
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
