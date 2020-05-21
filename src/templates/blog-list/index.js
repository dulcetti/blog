import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PostsList from '../../components/posts-list';
import Pagination from '../../components/pagination';

const BlogList = (props) => {
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
};

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
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
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

export default BlogList;
