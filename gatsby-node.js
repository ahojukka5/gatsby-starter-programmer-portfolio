const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  const isMdx = node => node.internal.type === 'Mdx';
  const isMd = node => node.internal.type === 'MarkdownRemark';
  const isPost = node => node.fileAbsolutePath.match(/\/posts\//);

  if ((isMdx(node) || isMd(node)) && isPost(node)) {
    const slug = '/posts' + createFilePath({ node, getNode });
    createNodeField({ name: 'type', node, value: 'post' });
    createNodeField({ name: 'slug', node, value: slug });
  }
};

const createPosts = async ({ graphql, actions: { createPage } }) => {
  const response = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "post" } } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (response.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPosts" query');
  }

  const posts = response.data.allMdx.nodes;

  posts.forEach(({ fields: { slug } }) => {
    createPage({
      path: slug,
      component: path.resolve('./src/templates/post.js'),
      context: { slug },
    });
  });
};

exports.createPages = createPosts;
