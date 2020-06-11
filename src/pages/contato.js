import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Layout, SEO } from '../components';

import { themes } from '../styles/themes';
import * as S from '../styles/pages/general';

export default function ContactPage() {
  const title = 'Contato - Críticas, sugestões, elogios? Perfeito!';
  const description =
    'Este espaço serve para você criticar, sugerir algo ou ate mesmo elogiar. Como os formulários hoje em dia são tudo uns fodasses e só vêm SPAM, então entra em contato via Rede Social mesmo que tá tudo certo ;)';
  const { thumb } = useStaticQuery(graphql`
    query {
      thumb: file(relativePath: { eq: "dulcetti-meditando.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 640, maxWidth: 445) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO description={description} image={thumb.childImageSharp.fluid.src} title={title} />
      <S.PagesWrap>
        <S.PageTitle>{title}</S.PageTitle>
        <S.ThumbContact fluid={thumb.childImageSharp.fluid} />
        <S.PageText>{description}</S.PageText>
        <S.SocialMediasContact />
        <S.PageText>
          <AniLink
            className="link-animated"
            cover
            direction="left"
            bg={themes.palette.general.bgTransition}
            duration={0.6}
            to="/">
            &laquo; Voltar para a Listagem de Posts
          </AniLink>
        </S.PageText>
      </S.PagesWrap>
    </Layout>
  );
}
