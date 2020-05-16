import styled from 'styled-components';
import media from 'styled-media-query';

export const PostsListContainer = styled.div`
  display: grid;
  grid-area: posts;
  grid-gap: 20px;
  margin-bottom: 30px;

  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  `}
`;
