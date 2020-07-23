import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const BreadcrumbWrapper = styled.p`
  color: var(--textBreadcrumb);
  margin-bottom: 10px;
`;

export const HomeLink = styled(AniLink)`
  color: var(--links);
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export const CategoryLink = styled.span`
  text-transform: lowercase;
`;

export const Title = styled.strong`
  font-family: var(--fontStyles);
  font-size: 1.1rem;
`;
