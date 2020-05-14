import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import PostItem from '../components/post-item';

const Div = styled.div`
  display: grid;
  grid-area: posts;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
`;

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

      <Div>
        {allPosts.map(({ node }, index) => (
          <PostItem key={index} post={node.frontmatter} time={node.timeToRead} />
        ))}
      </Div>
    </Layout>
  );
}
