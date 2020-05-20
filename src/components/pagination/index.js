import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import { themes } from '../../styles/themes';
import Icons from '../icons';

export default function Pagination({ currentPage, totalPages }) {
  const previousPage = currentPage === 2 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <S.PaginationContent>
      <S.PaginationWrap
        className={`${isFirstPage ? 'first-page' : ''} ${isLastPage ? 'last-page' : ''}`}>
        {currentPage > 1 && (
          <>
            <S.ActionLinks
              cover
              direction="left"
              bg={themes.palette.general.bgTransition}
              duration={0.6}
              to="/"
              className="first">
              <S.Icon>
                <Icons name="arrow-double" />
              </S.Icon>{' '}
              <S.Text>Primeira página</S.Text>
            </S.ActionLinks>
            <S.ActionLinks
              cover
              direction="left"
              bg={themes.palette.general.bgTransition}
              duration={0.6}
              to={previousPage}
              className="previous">
              <S.Icon>
                <Icons name="arrow-single" />
              </S.Icon>{' '}
              <S.Text>Página anterior</S.Text>
            </S.ActionLinks>
          </>
        )}
        {currentPage < totalPages && (
          <>
            <S.ActionLinks
              cover
              direction="left"
              bg={themes.palette.general.bgTransition}
              duration={0.6}
              to={nextPage}
              className="next">
              <S.Text>Próxima página</S.Text>{' '}
              <S.Icon>
                <Icons name="arrow-single" />
              </S.Icon>
            </S.ActionLinks>
            <S.ActionLinks
              cover
              direction="left"
              bg={themes.palette.general.bgTransition}
              duration={0.6}
              to={`/page/${totalPages}`}
              className="last">
              <S.Text>Última página</S.Text>{' '}
              <S.Icon>
                <Icons name="arrow-double" />
              </S.Icon>
            </S.ActionLinks>
          </>
        )}
      </S.PaginationWrap>
      <S.TextPages>
        Página <S.ActualPage>{currentPage}</S.ActualPage> de {totalPages}
      </S.TextPages>
    </S.PaginationContent>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
