import React from 'react';

import { themes } from '../styles/themes';
import * as S from '../styles/pages/general';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search';

export default function SearchPage() {
  return (
    <Layout>
      <SEO title="Busca" />
      <S.PagesWrap>
        <S.PageTitle>Busca</S.PageTitle>
        <S.PageText>
          Digite o(s) termo(s) que você deseja e aguarde os resultados aparecerem
        </S.PageText>
        <Search />
      </S.PagesWrap>
    </Layout>
  );
}
