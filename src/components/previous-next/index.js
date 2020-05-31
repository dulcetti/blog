import React from 'react';

import * as S from './styles';
import Icons from '../icons';
import PropTypes from 'prop-types';

export default function PreviousNext({ next, previous }) {
  return (
    <S.WrapPreviousNext className={(!next && '-singlePrevious') || (!previous && '-singleNext')}>
      {next && (
        <S.LinksNavigation className="-previous" to={next.fields.slug}>
          <Icons name="arrow-single" />
          <S.LinkInfos>
            <S.LinksLabel>Próximo post:</S.LinksLabel>
            <S.LinksTitle>{next.frontmatter.title}</S.LinksTitle>
          </S.LinkInfos>
        </S.LinksNavigation>
      )}
      {previous && (
        <S.LinksNavigation className="-next" to={previous.fields.slug}>
          <S.LinkInfos>
            <S.LinksLabel>Post anterior:</S.LinksLabel>
            <S.LinksTitle>{previous.frontmatter.title}</S.LinksTitle>
          </S.LinkInfos>
          <Icons name="arrow-single" />
        </S.LinksNavigation>
      )}
    </S.WrapPreviousNext>
  );
}

PreviousNext.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
};
