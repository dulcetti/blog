import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrap404 = styled.section`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  ${media.greaterThan('medium')`
    align-items: flex-end;
    background: url('/assets/images/bgs/404.jpg') no-repeat;
    background-size: cover;
    flex-direction: row;
    margin: -2rem;
    min-height: 100vh;
  `}
`;

export const Content404 = styled.div`
  ${media.lessThan('medium')`
    padding: 1.25rem;
  `}

  ${media.greaterThan('medium')`
    background-color: rgba(255, 255, 255, 0.65);
    border-radius: 10px;
    margin: 4rem;
    padding: 2rem 2rem 0.5rem;
    width: 50%;

    > p {
      font-size: 1.75rem;
    }
  `}
`;
