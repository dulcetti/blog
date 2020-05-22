import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from './themes';
import SocialMedias from '../components/social-medias';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PagesWrap = styled.div`
  margin: auto;
  max-width: ${themes.grid.maxWidth};

  ${media.lessThan('767px')`
    padding: 5px 20px;
  `}
`;

export const PageTitle = styled.h1`
  font-size: min(60px, 10vw);
  line-height: min(66px, 13vw);

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
  justify-content: flex-start;

  > li {
    ${media.lessThan('medium')`
      height: auto;
      width: 50px;
    `}

    ${media.greaterThan('medium')`
      height: auto;
      width: 64px;
    `}
  }
`;

export const BackLinkSearch = styled(AniLink)`
  color: ${themes.palette.general.links};

  ${media.lessThan('medium')`
    font-size: 1rem;
    margin-bottom: 5px;
  `}

  ${media.greaterThan('769px')`
    font-size: 1.25rem;
  `}

  &:hover {
    text-decoration: underline;
  }
`;
