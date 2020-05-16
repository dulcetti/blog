import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import PostsList from '../components/posts-list';

const BlogList = (props) => {
  console.info(props);
  const postList = props.data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Profile />

      <PostsList posts={postList} />
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
          frontmatter {
            slug
            category
            date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
