import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

import { themes } from '../themes';

export const PageFluid = styled.div`
  ${media.lessThan('767px')`
    padding: 5px 20px;
  `}

  ${media.greaterThan('769px')`
    margin: -2rem 0 -2rem -2rem;
    position: relative;
  `}
`;

export const AboutSection = styled.section`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  ${media.greaterThan('769px')`
    min-height: 100vh;
    padding-left: 600px;
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ColumnImage = styled.aside`
  order: 1;

  ${media.lessThan('medium')`
    margin-bottom: 20px;
  `}

  ${media.greaterThan('769px')`
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    transition: opacity .3s ease-out;

    &.active {
      opacity: 1;
      transition: opacity .3s ease-out;
    }
  `}
`;

export const AboutImage = styled(Img)`
  ${media.greaterThan('769px')`
    height: 100vh;
    min-width: 600px;
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

  ${media.greaterThan('769px')`
    padding: 30px 40px;
  `}
`;
