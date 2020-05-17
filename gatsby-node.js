const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
              description
              image
              slug
              title
            }
            timeToRead
          }
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMarkdownRemark.edges;

    // Create posts
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve('./src/templates/blog-post/index.js'),
        context: {
          slug: node.frontmatter.slug,
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
