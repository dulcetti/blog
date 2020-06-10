const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    });

    createNodeField({
      name: `slug`,
      node,
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
              photographer
              title
            }
            timeToRead
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMarkdownRemark.edges;

    // Create posts
    posts.forEach(({ next, node, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post/index.js'),
        context: {
          nextPost: previous,
          previousPost: next,
          slug: node.fields.slug,
        },
      });
    });

    // Create pagination
    const postsPerPage = 12;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/' : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list/index.js'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
