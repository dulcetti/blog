import styled from 'styled-components';
import Img from 'gatsby-image';
import Icons from '../icons';
import { themes } from '../../styles/themes';

export const BoxImage = styled.div`
  position: relative;

  > .gatsby-image-wrapper {
    max-height: 450px;
  }
`;

export const FeaturedImage = styled(Img)``;

export const BoxCredits = styled.div`
  background-color: ${themes.palette.posts.bgCredits};
  padding: 6px 10px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const LabelCredits = styled.p``;

export const Photographer = styled.span`
  vertical-align: middle;

  > a {
    color: ${themes.palette.posts.links};
  }
`;

export const IconPhotographer = styled(Icons)`
  height: 25px;
  margin-right: 10px;
  vertical-align: middle;
  width: 32px;
`;
