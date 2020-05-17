import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Comments from '../../components/comments';
import SEO from '../../components/seo';

import * as S from './styles';

export default function BlogPost({ data }) {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <S.PostWrap>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        {frontmatter.description && (
          <S.PostDescription>{frontmatter.description}</S.PostDescription>
        )}
        <S.PostContent dangerouslySetInnerHTML={{ __html: html }}></S.PostContent>
        <Comments slug={frontmatter.slug} title={frontmatter.title} />
      </S.PostWrap>
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
