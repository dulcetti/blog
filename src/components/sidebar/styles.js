import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { themes } from '../../styles/themes';

export const Sidebar = styled.aside`
  background-color: ${themes.palette.sidebar.bg};
  position: fixed;

  ${media.greaterThan('medium')`
    box-shadow: 0 1px 6px 0 ${themes.palette.general.boxShadows};
    display: grid;
    grid-area: sidebar;
    grid-template-rows: 50px auto 15px;
    min-height: 100vh;
    padding: 30px 0 20px;
    right: 0;
    top: 0;
    width: 250px;
  `}

  ${media.lessThan('767px')`
    align-items: center;
    bottom: 0;
    box-shadow: 0px 3px 6px 2px ${themes.palette.general.boxShadows};
    display: flex;
    height: 55px;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
  `}
`;

export const LogoLink = styled(AniLink)`
  display: block;
  position: relative;

  ${media.lessThan('medium')`
    box-sizing: content-box;
    height: 30px;
    padding: 10px 0;
    width: 95px;
    z-index: 3;
  `}

  ${media.greaterThan('medium')`
    margin: 0 auto;
    height: auto;
    width: 140px;
  `}
`;

export const Title = styled.h1`
  height: 0px;
  overflow: hidden;
  width: 0;
`;

export const InternalTitle = styled.strong`
  display: block;
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

export const ToggleOpenClose = styled.button`
  ${media.greaterThan('769px')`
    display:none;
  `}

  ${media.lessThan('medium')`
    border: 0;
    height: 32px;
    position: relative;
    width: 32px;
    z-index: 3;

    &:not(.active) {
      background: url('/assets/images/icons/menu.svg') no-repeat;
    }

    &.active {
      background: url('/assets/images/icons/close.svg') no-repeat;
    }
  `}
`;
