import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import { themes } from '../../styles/themes';
import { getCategoryBg } from '../../utils/categories';

export default function Hit({ hit }) {
  const { category, date, description, fields, title, _snippetResult } = hit;

  return (
    <>
      <S.LinkPostSearch
        cover
        direction="left"
        bg={themes.palette.general.bgTransition}
        duration={0.6}
        to={fields.slug}>
        <S.CategoryPostSearch bg={getCategoryBg(category)}>{category}</S.CategoryPostSearch>
        <S.InfosPost>
          <S.TitlePostSearch color={getCategoryBg(category)}>{title}</S.TitlePostSearch>
          <S.DescriptionPostSearch>
            {description || `${_snippetResult.excerpt.value}...`}
          </S.DescriptionPostSearch>
          <S.DatePostSearch>{date}</S.DatePostSearch>
        </S.InfosPost>
      </S.LinkPostSearch>
    </>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
