import styled from 'styled-components';
import Img from 'gatsby-image';
import Icons from '../icons';
import { themes } from '../../styles/themes';
import media from 'styled-media-query';

export const BoxImage = styled.div`
  position: relative;

  > .gatsby-image-wrapper {
    max-height: 450px;
  }
`;

export const FeaturedImage = styled(Img)``;

export const BoxCredits = styled.div`
  background-color: ${themes.palette.posts.bgCredits};
  border-radius: 3px 0 0 3px;
  position: absolute;

  ${media.lessThan('large')`
    padding: 4px 8px;
    right: -5px;
    top: 7px;
  `}

  ${media.greaterThan('large')`
    padding: 8px 12px;
    right: -5px;
    top: 15px;
  `}

  &:after {
    border-color: ${themes.palette.posts.shadowCredits} transparent transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0 0;
    bottom: -5px;
    content: '';
    display: block;
    height: 0;
    position: absolute;
    right: 0;
    width: 0;
  }
`;

export const LabelCredits = styled.p`
  font-family: ${themes.fonts.titles};

  ${media.greaterThan('large')`
    font-size: 1.1rem;
  `}
`;

export const Photographer = styled.span`
  vertical-align: middle;

  > a {
    color: ${themes.palette.posts.links};
  }
`;

export const IconPhotographer = styled(Icons)`
  margin-right: 10px;
  vertical-align: middle;

  ${media.lessThan('large')`
    height: 20px;
    width: 26px;
  `}

  ${media.greaterThan('large')`
    height: 25px;
    width: 32px;
  `}
`;
