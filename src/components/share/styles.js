import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from '../../styles/themes';

export const ButtonShare = styled.button`
  ${media.lessThan('medium')`
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 10px 1px ${themes.palette.general.boxShadows};
    cursor: pointer;
    display: flex;
    height: 70px;
    justify-content: center;
    position: relative;
    width: 70px;

    .share {
      height: 32px;
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
  font-size: 1rem;
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
    display: none;
  
    &.-opened {
      display: block;
    }
  `}
`;

export const ShareItem = styled.li`
  ${media.greaterThan('769px')`
    display: inline-block;
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
