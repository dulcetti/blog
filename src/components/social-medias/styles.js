import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialMediasList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1.75rem;
`;

export const Media = styled.li`
  ${media.lessThan('large')`
    height: 44px;
    margin: 0 5px 0.5rem;
    width: 44px;
  `}

  ${media.greaterThan('large')`
    height: 52px;
    margin: 0 5px 0.75rem;
    width: 52px;
  `}

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  > a {
    display: inline-block;
    height: inherit;
    width: inherit;

    > svg {
      height: inherit;
      width: inherit;
    }
  }
`;
