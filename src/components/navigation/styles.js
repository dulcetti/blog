import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { themes } from '../../styles/themes';

export const Navigation = styled.nav`
  display: flex;

  ${media.greaterThan('medium')`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const List = styled.ul`
  /* ${media.between('medium', 'large')`
    display: flex;
  `} */
`;

export const Item = styled.li`
  border-bottom: 1px solid #ddd;

  &:first-child {
    border-top: 1px solid #ddd;
  }
`;

export const LinkNavigation = styled(Link)`
  color: ${themes.palette.sidebar.links};
  display: block;
  font-family: ${themes.fonts.others};
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: ${themes.palette.sidebar.linksHover};
    transition: color 0.3s;
  }
`;
