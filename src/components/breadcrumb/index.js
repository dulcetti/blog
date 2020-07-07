import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Breadcrumb({ category, title }) {
  return (
    <S.BreadcrumbWrapper>
      <S.HomeLink className="link-animated" to="/">
        @dulcetti
      </S.HomeLink>{' '}
      / <S.CategoryLink>{category}</S.CategoryLink> / <S.Title>{title}</S.Title>
    </S.BreadcrumbWrapper>
  );
}

Breadcrumb.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
