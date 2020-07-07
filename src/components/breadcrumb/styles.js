import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { themes } from '../../styles/themes';

export const BreadcrumbWrapper = styled.p`
  color: ${themes.palette.breadcrumb.color};
  margin-bottom: 10px;
`;

export const HomeLink = styled(AniLink)`
  color: ${themes.palette.breadcrumb.homeColor};
  font-weight: bold;
`;

export const CategoryLink = styled.span`
  text-transform: lowercase;
`;

export const Title = styled.strong`
  font-family: ${themes.fonts.others};
  font-size: 1.1rem;
`;
