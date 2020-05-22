import styled from 'styled-components';
import media from 'styled-media-query';
// import { themes } from './themes';
import SocialMedias from '../components/social-medias';

export const PagesWrap = styled.div`
  margin: auto;
  max-width: 70rem;

  ${media.lessThan('medium')`
    padding: 5px 20px;
  `}
`;

export const PageTitle = styled.h1`
  font-size: min(60px, 10vw);
  line-height: min(66px, 13vw);
  margin-bottom: 1rem;
`;

export const PageText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
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
