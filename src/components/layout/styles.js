import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from '../../styles/themes';

export const LayoutWrapper = styled.section`
  display: flex;
  grid-template-areas: 'content' / 'sidebar';

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.main`
  background-color: ${themes.palette.general.bg};
  grid-template-areas: 'posts';
  min-height: 100vh;
  width: 100%;

  ${media.lessThan('medium')`
    flex-direction: column;
    padding: 1rem 0;
  `}

  ${media.greaterThan('medium')`
    padding: 1rem 18rem 0 2rem;
  `}
`;
