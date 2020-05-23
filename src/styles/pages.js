import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from './themes';
import SocialMedias from '../components/social-medias';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

export const PagesWrap = styled.div`
  margin: auto;
  max-width: ${themes.grid.maxWidth};

  ${media.lessThan('767px')`
    padding: 5px 20px;
  `}

  img {
    display: block;
    max-width: 100%;
  }
`;

export const PageTitle = styled.h1`
  font-size: min(60px, 10vw);
  line-height: min(66px, 11vw);

  ${media.lessThan('medium')`
    margin-bottom: .25rem;
  `}

  ${media.greaterThan('769px')`
    margin-bottom: 1rem;
  `}
`;

export const PageSubTitle = styled.h2`
  font-size: min(52px, 9vw);
  line-height: min(56px, 10vw);

  ${media.lessThan('medium')`
    margin-bottom: .25rem;
  `}

  ${media.greaterThan('769px')`
    margin-bottom: 1rem;
  `}
`;

export const PageSubSubTitle = styled.h3`
  font-size: min(42px, 8vw);
  line-height: min(46px, 9vw);

  ${media.lessThan('medium')`
    margin-bottom: .25rem;
  `}

  ${media.greaterThan('769px')`
    margin-bottom: 1rem;
  `}
`;

export const PageText = styled.p`
  ${media.lessThan('medium')`
    font-size: 1.15rem;
    margin-bottom: 1rem;
  `}

  ${media.greaterThan('769px')`
    font-size: 1.25rem;
    margin-bottom: 2rem;
  `}

  &.text-right {
    text-align: right;
  }
`;

export const SocialMediasContact = styled(SocialMedias)`
  ${media.lessThan('medium')`
    flex-wrap: wrap;
    margin: 40px 0;
  `}

  ${media.greaterThan('769px')`
    justify-content: flex-start;
    margin-bottom: 50px;
  `}

  > li {
    height: 64px;
    width: 64px;

    ${media.lessThan('medium')`
      margin-bottom: 20px;
      
      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    `}

    ${media.greaterThan('769px')`
      margin: 0 20px;
    `}
  }
`;

export const ThumbContact = styled(Img)`
  ${media.lessThan('medium')`
    margin-bottom: 25px;
  `}

  ${media.greaterThan('769px')`
    float: right;
    height: 640px;
    margin-left: 50px;
    width: 445px;
  `}
`;

export const BackLinkSearch = styled(AniLink)`
  ${media.lessThan('medium')`
    font-size: 1rem;
    margin-bottom: 5px;
  `}

  ${media.greaterThan('769px')`
    font-size: 1.25rem;
  `}
`;
