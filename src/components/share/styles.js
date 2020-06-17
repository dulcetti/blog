import styled from 'styled-components';
import { themes } from '../../styles/themes';

export const ButtonShare = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 10px 1px ${themes.palette.general.boxShadows};
  cursor: pointer;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 70px;

  > svg {
    height: 32px;
    width: 32px;
  }
`;

export const LabelShare = styled.strong`
  font-family: ${themes.fonts.titles};
  font-size: 1.5rem;
`;

export const ShareList = styled.ul`
  display: none;

  &.-opened {
    display: block;
  }
`;

export const ShareItem = styled.li``;

export const ShareLink = styled.a``;
