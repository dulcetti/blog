import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styles';

export default function Comments({ slug, title }) {
  const fullUrl = `https://www.brunodulcetti/${slug}`;

  return (
    <S.Wrapper>
      <S.TitleComments>Comentários</S.TitleComments>
      <ReactDisqusComments
        shortname="brunodulcetti"
        identifier={fullUrl}
        title={title}
        url={fullUrl}
      />
    </S.Wrapper>
  );
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
