import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';
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

export const Thumb = styled(Img)`
  border-radius: 50%;

  ${media.lessThan('medium')`
    margin: 0 auto 10px;
    width: 40%;
  `}

  ${media.greaterThan('medium')`
    margin: 0 auto 20px;
    width: 75%;
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

export const Navigation = styled.section`
  ${media.lessThan('767px')`
    background-color: ${themes.palette.sidebar.bg};
    border-bottom: 1px solid ${themes.palette.general.boxShadows};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 55px);
    justify-content: flex-start;
    left: 0;
    padding-top: 20px;
    position: fixed;
    transform: translateX(-100%);
    transition: all 0.5s ease 0s;
    top: 0;
    width: 100%;
    z-index: 1;

    &.active {
      transform: translateX(0);
      transition: all 0.5s ease 0s;
    }
  `}

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Menu = styled.nav`
  ${media.lessThan('medium')`
    margin-bottom: 25px;
  `}

  ${media.greaterThan('medium')`
    margin-bottom: 40px;
  `}
`;

export const List = styled.ul``;

export const Item = styled.li`
  border-bottom: 1px solid ${themes.palette.general.borders};
  width: 100%;

  &:first-child {
    border-top: 1px solid ${themes.palette.general.borders};
  }
`;

export const LinkMenu = styled(AniLink)`
  color: ${themes.palette.sidebar.links};
  display: block;
  font-family: ${themes.fonts.others};
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: color 0.3s;

  &.active {
    color: red;
  }

  &:before {
    bottom: 0;
    content: '';
    height: 44px;
    right: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.2s ease-in-out 0s;
    visibility: hidden;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    color: ${themes.palette.sidebar.linksHover};
    transition: color 0.3s;

    &:before {
      background-color: #fff;
      transform: scaleX(1);
      transform-origin: 100% 50%;
      transition: transform 0.2s ease-in-out 0s;
      visibility: visible;
    }
  }
`;

export const LinkLabel = styled.span`
  position: relative;
  z-index: 2;
`;

export const Name = styled.h2`
  color: ${themes.palette.sidebar.name};
  font-family: ${themes.fonts.titles};
  text-align: center;

  ${media.lessThan('medium')`
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 20px;
  `}

  ${media.greaterThan('medium')`
    font-size: 38px;
    line-height: 40px;
    margin-bottom: 30px;
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
