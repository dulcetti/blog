import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function CreditsImage({ image, photographer }) {
  return (
    <S.BoxImage>
      <S.FeaturedImage fluid={image} />
      {photographer && (
        <S.BoxCredits>
          <S.LabelCredits>
            <S.IconPhotographer name="cam" />
            <S.Photographer dangerouslySetInnerHTML={{ __html: photographer }} />
          </S.LabelCredits>
        </S.BoxCredits>
      )}
    </S.BoxImage>
  );
}

CreditsImage.propTypes = {
  image: PropTypes.object.isRequired,
  photographer: PropTypes.string,
};
