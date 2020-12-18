import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

const Layout = styled.div``;
const Header = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`;

const Posts = ({ data }) => {
  return (
    <Layout>
      <div>
        <Header>Blog posts</Header>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Posts;

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
