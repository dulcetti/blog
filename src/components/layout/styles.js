import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;
  grid-template-areas: 'content' / 'sidebar';

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.main`
  background-color: var(--bg);
  grid-template-areas: 'posts';
  min-height: 100vh;
  width: 100%;

  ${media.lessThan('large')`
    flex-direction: column;
    padding-bottom: 1rem;
    padding-top: 3.55rem;
  `}

  ${media.greaterThan('large')`
    padding: 1.5rem 18rem 1.75rem 1.75rem;
  `}
`;
