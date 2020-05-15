import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { themes } from '../../styles/themes';

export const Sidebar = styled.aside`
  background-color: ${themes.palette.sidebar.bg};
  box-shadow: 0 1px 6px 0 ${themes.palette.general.boxShadows};
  display: grid;
  grid-area: sidebar;
  position: fixed;

  ${media.greaterThan('medium')`
    grid-template-rows: 50px auto 15px;
    min-height: 100vh;
    padding: 20px 0;
    right: 0;
    top: 0;
    width: 250px;
  `}

  ${media.lessThan('767px')`
    bottom: 0;
    width: 100%;
  `}
`;

export const LogoLink = styled(Link)`
  display: block;
  position: relative;
  text-align: center;
`;

export const Title = styled.h1`
  height: 0px;
  overflow: hidden;
  width: 0;
`;

export const InternalTitle = styled.strong`
  height: 0;
  overflow: hidden;
  width: 0;
`;

export const Text = styled.p`
  font-family: ${themes.fonts.titles};
  font-size: 0.95rem;
  text-align: center;

  ${media.lessThan('large')`
    display: none;
  `}
`;
