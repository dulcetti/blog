import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Comments from '../../components/comments';
import SEO from '../../components/seo';

import * as S from './styles';

export default function BlogPost({ data }) {
  const { fields, frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.featuredImage}
      />
      <S.PostWrap>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        <S.PostInfos>
          <S.CategoryPost color={frontmatter.category}>{frontmatter.category}</S.CategoryPost> |{' '}
          <S.DatePost>{frontmatter.date}</S.DatePost>
        </S.PostInfos>
        {frontmatter.description && (
          <S.PostDescription>{frontmatter.description}</S.PostDescription>
        )}
        <S.PostContent dangerouslySetInnerHTML={{ __html: html }}></S.PostContent>
        <Comments slug={fields.slug} title={frontmatter.title} />
      </S.PostWrap>
    </Layout>
  );
}

export const postQuery = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        category
        date(locale: "pt-br", formatString: "DD[/]MM[/]YYYY")
        description
        featuredImage
        title
      }
      html
    }
  }
`;
