import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';

export default function Sidebar({ siteTitle }) {
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
      <S.Container>
        <S.LogoLink to="/">
          <Img fixed={logo.childImageSharp.fixed} />
          <S.Title>{siteTitle}</S.Title>
        </S.LogoLink>
      </S.Container>
    </S.Sidebar>
  );
}
