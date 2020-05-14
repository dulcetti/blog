import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import PostItem from '../components/post-item';

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostsList {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: '0 auto',
          maxWidth: '1380px',
        }}>
        {allPosts.map(({ node }, index) => (
          <PostItem key={index} post={node.frontmatter} time={node.timeToRead} />
        ))}
      </div>
    </Layout>
  );
}
