import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { themes } from '../../styles/themes';

export const Sidebar = styled.aside`
  background-color: ${themes.palette.sidebar.bg};
  position: fixed;

  ${media.greaterThan('large')`
    box-shadow: 0 1px 6px 0 ${themes.palette.general.boxShadows};
    display: grid;
    grid-area: sidebar;
    grid-template-rows: 50px auto 15px;
    min-height: 100vh;
    padding: 20px 0 20px;
    right: 0;
    top: 0;
    width: 250px;
  `}

  ${media.lessThan('large')`
    align-items: center;
    box-shadow: 0px 1px 1px 1px ${themes.palette.general.boxShadows};
    display: flex;
    height: 55px;
    justify-content: space-between;
    padding-left: 15px;
    top: 0;
    width: 100%;
  `}
`;

export const LogoLink = styled(AniLink)`
  display: block;
  position: relative;

  ${media.lessThan('large')`
    box-sizing: content-box;
    height: 30px;
    padding: 10px 0;
    width: 95px;
    z-index: 3;
  `}

  ${media.greaterThan('large')`
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

export const SidebarIcons = styled.div`
  ${media.lessThan('large')`
    display: inline-flex;
    height: 100%;
  `}

  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const SearchLink = styled(AniLink)`
  ${media.lessThan('large')`
    align-items: center;
    border-left: 1px solid ${themes.palette.general.borders};
    border-right: 1px solid ${themes.palette.general.borders};
    display: inline-flex;
    height: inherit;
    padding: 0 15px;
  `}
`;

export const SearchLinkWrap = styled.span`
  ${media.lessThan('large')`
    display: block;
    height: 28px;
    vertical-align: middle;
    width: 28px;

    > svg {
      height: inherit;
      width: inherit;
    }
  `}
`;

export const ToggleOpenClose = styled.button`
  ${media.lessThan('large')`
    border: 0;
    display: inline-block;
    height: inherit;
    padding: 0 15px;
    position: relative;
    vertical-align: middle;
    width: 56px;
    z-index: 3;

    &:not(.active) {
      background: url('/assets/images/icons/menu.svg') no-repeat center;
    }

    &.active {
      background: url('/assets/images/icons/close.svg') no-repeat center;
    }
  `}
`;
