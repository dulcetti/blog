import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
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
    padding: 20px 0;
    right: 0;
    top: 0;
    width: 250px;
  `}

  ${media.lessThan('767px')`
    align-items: center;
    bottom: 0;
    box-shadow: 0px 3px 6px 2px ${themes.palette.general.boxShadows};
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
  `}
`;

export const LogoLink = styled(Link)`
  display: block;
  position: relative;
  text-align: center;

  ${media.lessThan('medium')`
    padding: 10px 0;
    position: relative;
    z-index: 2;
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
    background-color: ${themes.palette.sidebar.bgMobile};
    border-bottom: 1px solid ${themes.palette.general.boxShadows};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 55px);
    justify-content: center;
    left: 0;
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
  margin-bottom: 40px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  border-bottom: 1px solid ${themes.palette.general.borders};
  width: 100%;

  &:first-child {
    border-top: 1px solid ${themes.palette.general.borders};
  }
`;

export const LinkMenu = styled(Link)`
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

export const Name = styled.h2`
  color: ${themes.palette.sidebar.name};
  font-family: ${themes.fonts.titles};
  font-size: 38px;
  line-height: 40px;
  margin-bottom: 30px;
  text-align: center;
`;

export const ToggleOpenClose = styled.button`
  ${media.greaterThan('769px')`
    display:none;
  `}

  ${media.lessThan('medium')`
    border: 0;
    height: 32px;
    width: 32px;

    &:not(.active) {
      background: url('/assets/images/icons/menu.svg') no-repeat;
    }

    &.active {
      background: url('/assets/images/icons/close.svg') no-repeat;
    }
  `}
`;

export const SocialMedias = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Media = styled.li`
  height: 32px;
  margin: 0 5px;
  width: 32px;

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
