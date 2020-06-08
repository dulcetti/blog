import React from 'react';

import * as S from '../styles/pages/general';
import * as S4 from '../styles/pages/404';
import { themes } from '../styles/themes';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO
        description="Página não encontrada, busque algo ou vá para a lista de artigos."
        title="404: Página não encontrada"
      />

      <S4.Wrap404>
        <S4.Content404>
          <S.PageTitle>Vish, deu merda! Página não encontrada...</S.PageTitle>
          <S.PageText>
            Mas relaxa, pega um copo e brinda comigo, ou então faça uma busca por algo{' '}
            <AniLink
              swipe
              direction="left"
              bg={themes.palette.general.bgTransition}
              duration={0.6}
              className="link-animated"
              to="/busca/">
              na página de busca
            </AniLink>
            .
          </S.PageText>
          <S.PageText>
            Ou então vá para a{' '}
            <AniLink
              swipe
              direction="left"
              bg={themes.palette.general.bgTransition}
              duration={0.6}
              className="link-animated"
              to="/">
              home do Blog
            </AniLink>{' '}
            e veja os últimos artigos.
          </S.PageText>
        </S4.Content404>
      </S4.Wrap404>
    </Layout>
  );
}
