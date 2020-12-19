const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  const isMdx = node => node.internal.type === 'Mdx';
  const isMd = node => node.internal.type === 'MarkdownRemark';
  if (isMdx(node) || isMd(node)) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allMarkdownRemark: { nodes: posts },
    },
  } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const component = path.resolve('./src/templates/post.js');

  posts.forEach(({ fields: { slug } }) => {
    createPage({
      path: slug,
      component,
      context: { slug },
    });
  });
};
