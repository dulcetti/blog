import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import { PropTypes } from 'prop-types';

export default function Breadcrumb({ category, title }) {
  return (
    <S.BreadcrumbWrapper>
      <S.HomeLink to="/">Home</S.HomeLink> &raquo;
      <S.CategoryLink>{category}</S.CategoryLink> &rsaquo;
      <S.Title>{title}</S.Title>
    </S.BreadcrumbWrapper>
  );
}

Breadcrumb.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
