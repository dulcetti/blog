import styled from 'styled-components';
import { themes } from '../../styles/themes';

export const Wrapper = styled.section`
  iframe[src*='ads-iframe'] {
    display: none;
  }
`;

export const TitleComments = styled.h2`
  color: ${themes.palette.general.color};
  font-size: 2rem;
  font-weight: 700;
`;
