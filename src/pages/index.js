import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import PostsList from '../components/posts-list';

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostsListQuery {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, limit: 3) {
        edges {
          node {
            frontmatter {
              category
              description
              slug
              title
              date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
            }
            timeToRead
          }
        }
      }
    }
  `);

  const allPosts = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Profile />

      <PostsList posts={allPosts} />
    </Layout>
  );
}
