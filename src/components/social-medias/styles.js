import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialMediasList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${media.lessThan('large')`
    padding: 0 1.75rem;
  `}
  ${media.greaterThan('large')`
    padding: 0 1.5rem;
  `}
`;

export const Media = styled.li`
  ${media.lessThan('large')`
    height: 42px;
    margin: 0 5px 0.5rem;
    width: 42px;
  `}

  ${media.greaterThan('large')`
    height: 36px;
    margin: 0 3px 0.5rem;
    width: 36px;
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
