import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components';
import * as S from './styles';

export default function CategoriesPage({ data, pageContext }) {
  return (
    <Layout>
      <S.CategoriesContainer>Olar</S.CategoriesContainer>
    </Layout>
  );
}
