import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { themes } from '../../styles/themes';

export const Sidebar = styled.aside`
  align-items: center;
  background-color: ${themes.palette.sidebar.bg};
  box-shadow: 0 1px 6px 0 ${themes.palette.general.boxShadows};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;

  ${media.greaterThan('large')`
    min-height: 100vh;
    padding: 20px 10px;
    right: 0;
    top: 0;
    width: 250px;
  `}

  ${media.lessThan('large')`
    bottom: 0;
    width: 100%;
  `}
`;

export const LogoLink = styled(Link)`
  display: block;
  position: relative;
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
`;
