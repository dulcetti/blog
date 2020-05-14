import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';

export default function Sidebar({ siteTitle }) {
  const location = window && window.location.pathname;
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logos/logo.png" }) {
          childImageSharp {
            fixed(height: 30, width: 95) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <S.Sidebar>
      <S.LogoLink to="/">
        <Img fixed={logo.childImageSharp.fixed} />
        {location === '/' ? (
          <S.Title>{siteTitle}</S.Title>
        ) : (
          <S.InternalTitle>{siteTitle}</S.InternalTitle>
        )}
      </S.LogoLink>

      <S.Text>© {new Date().getFullYear()}, Todos os fodasses reservados.</S.Text>
    </S.Sidebar>
  );
}
