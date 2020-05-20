import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { themes } from '../styles/themes';
import * as S from '../styles/pages';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialMedias from '../components/social-medias';

export default function ContactPage() {
  const title = 'Contato - Críticas, sugestões, elogios? Perfeito!';
  const description =
    'Este espaço serve para você criticar, sugerir algo ou ate mesmo elogiar. Como os formulários hoje em dia são tudo uns fodasses e só vêm SPAM, então entra em contato via Rede Social mesmo que tá tudo certo ;)';

  return (
    <Layout>
      <SEO description={description} title={title} />
      <S.PagesWrap>
        <S.PageTitle>{title}</S.PageTitle>
        <S.PageText>{description}</S.PageText>
        <S.SocialMediasContact />
        <S.PageText>
          <AniLink
            cover
            direction="left"
            bg={themes.palette.general.bgTransition}
            duration={0.6}
            to="/">
            Voltar para a Listagem de Posts
          </AniLink>
        </S.PageText>
      </S.PagesWrap>
    </Layout>
  );
}
