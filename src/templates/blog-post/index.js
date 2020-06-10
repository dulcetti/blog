import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Comments from '../../components/comments';
import SEO from '../../components/seo';
import PreviousNext from '../../components/previous-next';
import CreditsImage from '../../components/credits-image';

import * as S from './styles';

export default function BlogPost({ data, pageContext }) {
  const { fields, frontmatter, html, timeToRead } = data.markdownRemark;
  const nextPost = pageContext.nextPost;
  const previousPost = pageContext.previousPost;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.featuredImage.childImageSharp.fluid.src}
      />
      <S.PostWrap>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        {frontmatter.description && (
          <S.PostDescription>{frontmatter.description}</S.PostDescription>
        )}
        <CreditsImage fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        <S.PostInfos color={frontmatter.category}>
          <S.CategoryPost>{frontmatter.category}</S.CategoryPost>
          <S.TimeToRead>
            <strong>Tempo de leitura:</strong> {timeToRead}min
          </S.TimeToRead>
          <S.DatePost>{frontmatter.date}</S.DatePost>
        </S.PostInfos>
        <S.PostContent dangerouslySetInnerHTML={{ __html: html }}></S.PostContent>
        <PreviousNext next={nextPost} previous={previousPost} />
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
      html
    }
  }
`;
