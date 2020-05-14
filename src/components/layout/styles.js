import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.main`
  background-color: #fff;
  grid-template-areas: 'posts';
  min-height: 100vh;

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 2rem;
  `}

  ${media.greaterThan('medium')`
    padding: 1rem 20rem 0 3.75rem;
  `}

  width: 100%;
`;
