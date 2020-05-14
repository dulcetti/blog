/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'AdventPro-Regular';
    src: url('/assets/fonts/AdventPro/AdventPro-Regular.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Khand-Regular';
    src: url('/assets/fonts/Khand/Khand-Regular.ttf') format('truetype');
    font-display: fallback;
  }
`;
