import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

import { themes } from '../themes';

export const PageFluid = styled.div`
  ${media.lessThan('large')`
    padding: 20px;
  `}

  ${media.greaterThan('large')`
    margin: -2rem 0 -2rem -2rem;
    position: relative;
  `}
`;

export const AboutSection = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}

  ${media.greaterThan('large')`
    border-bottom: 1px solid ${themes.palette.general.borders};
    min-height: 100vh;
    padding-left: 30vw;
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ColumnImage = styled.aside`
  order: 1;
  position: relative;

  ${media.lessThan('large')`
    margin-bottom: 20px;
  `}

  ${media.between('medium', '1169px')`
    max-width: 400px;
  `}

  ${media.greaterThan('large')`
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
  ${media.greaterThan('large')`
    height: 100vh;
    max-width: 600px;
    width: 30vw;
  `}

  &:after, &:before {
    border-bottom: 10px solid;
    border-right: 10px solid;
    content: '';
    display: block;
    position: absolute;
    transition: border-color 0.3s, right 0.3s, bottom 0.3s;
    z-index: 1;
  }

  &:after {
    border-bottom-color: rgba(${themes.palette.about.secondBorder}, 0.5);
    border-right-color: rgba(${themes.palette.about.secondBorder}, 0.5);
    height: 35%;
    width: 45%;

    ${media.lessThan('medium')`
      bottom: 30px;
      right: 30px;`}

    ${media.greaterThan('medium')`
      bottom: 50px;
      right: 50px;
    `}
  }

  &:before {
    border-bottom-color: rgba(${themes.palette.about.firstBorder}, 0.5);
    border-right-color: rgba(${themes.palette.about.firstBorder}, 0.5);
    bottom: 30px;
    height: 55%;
    right: 30px;
    width: 60%;

    ${media.lessThan('medium')`
      bottom: 10px;
      right: 10px;
    `}

    ${media.greaterThan('medium')`
      bottom: 30px;
      right: 30px;
    `}
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

export const TitleSection = styled.h2`
  border-bottom: 4px solid ${themes.palette.about.titleBorder};
  display: inline-block;
  font-size: min(52px, 9vw);
  line-height: min(56px, 10vw);
  position: relative;

  ${media.lessThan('medium')`
    margin-bottom: 1.25rem;
  `}

  ${media.greaterThan('769px')`
    margin-bottom: 1.5rem;
  `}

  &:before {
    background-color: ${themes.palette.about.titleBorderBefore};
    bottom: -6px;
    content: '';
    display: block;
    height: 8px;
    left: 4%;
    position: absolute;
    transition: left 0.3s ease-in-out;
    width: 10%;
  }

  &:hover {
    &:before {
      left: 14%;
      transition: left 0.3s ease-in-out;
    }
  }
`;

export const TitleSectionImage = styled.h2`
  color: ${themes.palette.general.negativeColor};
  position: absolute;
  text-shadow: 2px 2px 2px ${themes.palette.general.textShadows};
  z-index: 2;

  ${media.lessThan('767px')`
    bottom: 50px;
    font: bold 2rem ${themes.fonts.titles};
    line-height: 2rem;
    right: 55px;
  `}

  ${media.greaterThan('medium')`
    bottom: 70px;
    font: bold 3rem ${themes.fonts.titles};
    line-height: 3rem;
    right: 75px;
  `}
`;

export const ColumnContent = styled.div`
  flex-grow: auto;
  flex-basis: auto;
  order: 2;

  ${media.greaterThan('large')`
    padding: 30px 40px;
    width: 100%;
  `}
`;

export const CareerList = styled.div`
  display: flex;

  ${media.lessThan('767px')`
    flex-direction: column;
  `}

  ${media.greaterThan('medium')`
    flex-wrap: wrap;
  `}

  ${media.greaterThan('900px')`
    padding: 30px 40px;
  `}
`;

export const CareerItem = styled.article`
  ${media.greaterThan('medium')`
    margin-bottom: 20px;
    width: 48%;
  `}
`;

export const CareerCompany = styled.h3`
  font-size: 2rem;
`;

export const IconWrapper = styled.span`
  display: inline-block;
  margin-right: 7px;

  &:not(.graduation) {
    height: 28px;
    width: 29px;
  }

  &.graduation {
    height: 28px;
    vertical-align: middle;
    width: 37px;
  }

  > svg {
    display: block;
    height: inherit;
    width: inherit;
  }
`;

export const CareerTitle = styled.p`
  font-family: ${themes.fonts.others};
  font-size: 1.3rem;
`;

export const CareerDates = styled.p`
  font-size: 0.9rem;
  margin-bottom: 12px;
`;
