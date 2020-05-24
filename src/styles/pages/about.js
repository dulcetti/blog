import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

import { themes } from '../themes';

export const AboutSection = styled.section`
  display: flex;
  margin-bottom: 20px;

  ${media.greaterThan('medium')`
    min-height: calc(100vh - 50px);
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ColumnImage = styled.aside`
  order: 1;

  ${media.greaterThan('medium')`
    margin-right: 30px;
  `}
`;

export const AboutImage = styled(Img)`
  ${media.greaterThan('medium')`
    height: 900px;
    width: 600px;
  `}

  &:after, &:before {
    border-right: 10px solid;
    border-bottom: 10px solid;
    content: '';
    display: block;
    position: absolute;
    transition: border-color 0.3s, right 0.3s, bottom 0.3s;
    z-index: 1;
  }

  &:after {
    border-right-color: rgba(${themes.palette.about.secondBorder}, 0.5);
    border-bottom-color: rgba(${themes.palette.about.secondBorder}, 0.5);
    bottom: 50px;
    height: 35%;
    right: 50px;
    width: 45%;
  }

  &:before {
    border-right-color: rgba(${themes.palette.about.firstBorder}, 0.5);
    border-bottom-color: rgba(${themes.palette.about.firstBorder}, 0.5);
    bottom: 30px;
    height: 55%;
    right: 30px;
    width: 60%;
  }

  &:hover {
    &:after,
    &:before {
      transition: border-color 0.3s, right 0.3s, bottom 0.3s;
    }

    &:after {
      border-color: rgba(${themes.palette.about.secondBorder}, 0.75);
      bottom: 55px;
      right: 55px;
    }

    &:before {
      border-color: rgba(${themes.palette.about.firstBorder}, 0.75);
      bottom: 35px;
      right: 35px;
    }
  }
`;

export const ColumnContent = styled.div`
  flex-grow: auto;
  flex-basis: auto;
  order: 2;
`;
