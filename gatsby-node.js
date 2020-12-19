const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
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
      allMdx: { nodes: posts },
    },
  } = await graphql(`
    query {
      allMdx {
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

  posts.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component,
        context: { slug },
      });
    }
  );
};
