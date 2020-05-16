import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Pagination({ currentPage, totalPages }) {
  const previousPage = currentPage === 2 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <S.PaginationWrap>
      {currentPage > 1 && (
        <>
          <S.ActionLinks to="/">&laquo; Primeira página</S.ActionLinks>
          <S.ActionLinks to={previousPage}>&lsaquo; Página anterior</S.ActionLinks>
        </>
      )}
      <S.TextPages>
        Página {currentPage} de {totalPages}
      </S.TextPages>
      {currentPage < totalPages && (
        <>
          <S.ActionLinks to={nextPage}>Próxima página &rsaquo;</S.ActionLinks>
          <S.ActionLinks to={`/page/${totalPages}`}>&raquo; Última página</S.ActionLinks>
        </>
      )}
    </S.PaginationWrap>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
