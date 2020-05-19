require('dotenv').config();

const postsQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
          date_timestamp: date
          description
          featuredImage
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flattenData = (dataArray) =>
  dataArray.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt((new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)),
    ...rest,
  }));

const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flattenData(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = queries;
