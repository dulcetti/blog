import React from 'react';

import { Layout, SEO, Search } from '../components';

import * as S from '../styles/pages/general';

export default function SearchPage() {
  return (
    <Layout>
      <SEO
        description="Encontre o que você procura nesse formulário. Digite o(s) termo(s) que você deseja e
          aguarde os resultados aparecerem."
        title="Busca"
      />
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
