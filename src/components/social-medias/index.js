import React from 'react';
import PropTypes from 'prop-types';

import Icons from '../icons';
import * as S from './styles';

export default function SocialMedias({ className }) {
  return (
    <S.SocialMediasList className={className}>
      <S.Media>
        <a href="https://github.com/dulcetti" target="_blank" rel="noopener noreferrer">
          <Icons name="github" />
        </a>
      </S.Media>
      <S.Media>
        <a href="https://www.linkedin.com/in/dulcetti/" target="_blank" rel="noopener noreferrer">
          <Icons name="linkedin" />
        </a>
      </S.Media>
      <S.Media>
        <a href="https://twitter.com/dulcetti" target="_blank" rel="noopener noreferrer">
          <Icons name="twitter" />
        </a>
      </S.Media>
      <S.Media>
        <a href="https://instagram.com/dulcetti" target="_blank" rel="noopener noreferrer">
          <Icons name="instagram" />
        </a>
      </S.Media>
      <S.Media>
        <a href="https://facebook.com/dulcetti" target="_blank" rel="noopener noreferrer">
          <Icons name="facebook" />
        </a>
      </S.Media>
    </S.SocialMediasList>
  );
}

SocialMedias.propTypes = {
  className: PropTypes.string,
};
