import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, PostsList, Pagination } from '../../components';

export default function BlogList(props) {
  const postList = props.data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const { description, title } = props.data.site.siteMetadata;

  return (
    <Layout>
      <SEO description={description} title={title} />

      <PostsList posts={postList} />
      <Pagination totalPages={numPages} currentPage={currentPage} />
    </Layout>
  );
}

export const query = graphql`
  query PostsListQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 622, maxWidth: 960) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
          }
          timeToRead
        }
      }
    }
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
