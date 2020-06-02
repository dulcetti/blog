import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrap404 = styled.section`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  ${media.greaterThan('medium')`
    align-items: flex-end;
    justify-content: space-around;
    min-height: 100%;
  `}
`;

export const Content404 = styled.div`
  order: 2;
`;

export const Thumb404 = styled.aside`
  order: 1;
`;
