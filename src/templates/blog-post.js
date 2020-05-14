import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Comments from '../components/comments';
import SEO from '../components/seo';

export default function BlogPost({ data }) {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Comments slug={frontmatter.slug} title={frontmatter.title} />
    </Layout>
  );
}

export const postQuery = graphql`
  query Post($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
        description
        image
        slug
        title
      }
      html
    }
  }
`;
