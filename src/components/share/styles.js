import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from '../../styles/themes';

export const ShareContainer = styled.div`
  ${media.lessThan('medium')`
    bottom: -120px;
    height: 70px;
    position: fixed;
    right: 15px;
    transition: bottom .25s ease-in;
    width: 70px;
    z-index: 3;

    &.-visible {
      bottom: 15px;
      transition: bottom .25s ease-in-out;
    }
  `}
`;

export const ButtonShare = styled.button`
  ${media.lessThan('medium')`
    align-items: center;
    background-color: rgba(255, 255, 255, .9);
    border-radius: 50%;
    border: 0;
    border: none;
    box-shadow: 0 0 10px 1px ${themes.palette.general.boxShadows};
    cursor: pointer;
    display:flex;
    height: inherit;
    justify-content: center;
    outline: 0;
    position: absolute;
    width: inherit;
    z-index: 4;

    .share {
      height: 32px;
      margin-bottom: 16px;
      width: 32px;
    }
  `}

  ${media.greaterThan('769px')`
    display: none;
  `}
`;

export const ShareTitle = styled.h2`
  ${media.lessThan('medium')`
    display: none;
  `}

  ${media.greaterThan('medium')`
    margin-bottom: 10px;
  `}
`;

export const LabelShare = styled.div`
  bottom: -37px;
  font-family: ${themes.fonts.titles};
  font-size: 0.85rem;
  font-weight: bold;
  height: 80px;
  letter-spacing: 3px;
  position: absolute;
  text-transform: uppercase;
  width: 80px;

  svg {
    height: inherit;
    width: inherit;
  }
`;

export const ShareList = styled.ul`
  ${media.lessThan('medium')`
    border-radius: 50%;
    height: 70px;
    left: 50%;
    margin: -35px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: rotateZ(180deg);
    transition: opacity .25s, transform .25s ease-in;
    width: 70px;
  
    &.-opened {
      opacity: 1;
      transform: rotateZ(0deg);
      transition: opacity .1s, transform .25s ease-in-out;
      

      > .-facebook {
        left: 35px;
        top: -50px;
      }

      > .-twitter {
        left: -10px;
        top: -42px;
      }

      > .-linkedin {
        left: -44px;
        top: -9px;
      }

      > .-whatsapp {
        left: -49px;
        top: 35px;
      }
    }
  `}
`;

export const ShareItem = styled.li`
  display: inline-block;

  ${media.lessThan('medium')`
    height: 38px;
    left: 20px;
    position: absolute;
    top: 30px;
    transition: all .25s;
    width: 38px;
  `}

  ${media.greaterThan('769px')`
    height: 52px;
    margin-left: 15px;
    width: 52px;
  `}
`;

export const ShareLink = styled.a`
  height: inherit;
  width: inherit;

  > svg {
    height: inherit;
    width: inherit;
  }
`;
