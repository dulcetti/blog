import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { themes } from '../../styles/themes';

export const Navigation = styled.section`
  ${media.lessThan('large')`
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

  ${media.greaterThan('large')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Thumb = styled(Img)`
  border-radius: 50%;

  ${media.lessThan('large')`
    margin: 0 auto 10px;
    width: 40%;
  `}

  ${media.greaterThan('large')`
    margin: 0 auto 20px;
    width: 75%;
  `}
`;

export const Name = styled.h2`
  color: ${themes.palette.sidebar.name};
  font-family: ${themes.fonts.titles};
  text-align: center;

  ${media.lessThan('large')`
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 20px;
  `}

  ${media.greaterThan('large')`
    font-size: 35px;
    line-height: 37px;
    margin-bottom: 20px;
  `}
`;

export const Menu = styled.nav`
  ${media.lessThan('large')`
    margin-bottom: 25px;
  `}

  ${media.greaterThan('large')`
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

  &:hover,
  &.active {
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
