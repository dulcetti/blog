import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    min-height: 100%;
  }

  article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
  }

  audio, canvas, progress, video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  template, [hidden] {
    display: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--fontStyles);
    font-weight: 700;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
  }

  a:active, a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b, strong {
    font-weight: inherit;
  }

  dfn {
    font-style: italic;
  }

  li {
    list-style: none;
  }

  mark {
    background-color: #fff;
    color: var(--textColor);
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  img, fieldset {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code, kbd, pre, samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    display: none;
  }

  button, input, select, textarea {
    font: inherit;
  }

  optgroup {
    font-weight: bold;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button, html [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner {
    border-style: none;
  }

  button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  label {
    display: block;
  }

  [type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button, [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #fff inset;
    -webkit-text-fill-color: initial;
  }

  .link-animated {
    color: var(--links);
    position: relative;
    transition: color 0.3s;

    &:before {
      bottom: -2px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
      visibility: hidden;
      width: 100%;
    }

    &:hover {
      &:before {
        background-color: var(--linksBorder);
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }

  body {
    --black: #000;
    --blue: #1660AA;
    --blueLight: #2BA8DF;
    --bronze: #AA735F;
    --green: #046A2E;
    --greenSea: #79B791;
    --orange: #f26a00;
    --pink: #852E50;
    --purpleDark: #31263E;
    --red: #D62828;
    --xanadu: #7E846B;
    --yellow: #f3a91a;

    --aboutFirstBorder: 255, 204, 0;
    --aboutSecondBorder: 230, 146, 74;
    --aboutTitleBorder: var(--yellow);
    --aboutTitleBorderBefore: #e6a528;
    --creditsBg: #ffF;
    --creditsLink: var(--orange);
    --creditsShadow: #bbb;
    --fontStyles: 'Khand-Regular', sans-serif;
    --maxWidth: 68em;
    --textThumbs: #eee;
    --negativeColor: #fff;
    color: var(--textColor);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    min-height: 100%;
    overflow-x: hidden;
  }

  body.light {
    --bgTransition: #f5f6f6;

    --bg: #f5f6f6;
    --blockquoteBg: #fff;
    --blockquoteBorder: var(--green);
    --borders: #bbb;
    --breadcrumbText: #666;
    --iconsColor: #555;
    --links: #f26a00;
    --linksBorder: #046A2E;
    --paginationActive: var(--orange);
    --paginationBg: #ece7e1;
    --paginationBorderDark: #cec2ac;
    --paginationBorderLight: #f3f0ed;
    --paginationBorderWrap: #a68e69;
    --paginationLink: #5a5038;
    --paginationLinkBg: #eadabe;
    --paginationLinkHover: var(--orange);
    --postsBorderInfos: #f5f6f6;
    --postListReadMore: var(--green);
    --postListBgCategories: var(--orange);
    --shadows: #bbb;
    --sidebarBg: #efecdf;
    --sidebarBgLinkHover: #fff;
    --sidebarLinksHover: #046A2E;
    --textColor: #333;
    --textShadows: #333;
    --titlesImages: #fff;
  }

  body.dark {
    --bgTransition: #333;

    --bg: #444;
    --blockquoteBg: #000;
    --blockquoteBorder: var(--green);
    --borders: #777;
    --breadcrumbText: #ccc;
    --iconsColor: #eee;
    --links: #FCBF49;
    --linksBorder: #f26a00;
    --paginationActive: var(--orange);
    --paginationBg: #333;
    --paginationBorderDark: #000;
    --paginationBorderLight: #666;
    --paginationBorderWrap: #555;
    --paginationLink: #ccc;
    --paginationLinkBg: #444;
    --paginationLinkHover: var(--yellow);
    --postsBorderInfos: #555;
    --postListReadMore: var(--green);
    --postListBgCategories: var(--orange);
    --shadows: #555;
    --sidebarBg: #333;
    --sidebarBgLinkHover: #444;
    --sidebarLinksHover: #ccc;
    --textColor: #eee;
    --textShadows: #333;
    --titlesImages: #fff;
  }

  .icons {
    fill: var(--iconsColor);
  }
`;
