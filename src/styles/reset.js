import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';

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

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    min-height: 100%;
    overflow-x: hidden;
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
    font-family: ${themes.fonts.titles};
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
    background-color: ${themes.palette.posts.blockquoteBg};
    color: ${themes.palette.general.color};
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
    color: ${themes.palette.posts.links};
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
        background-color: ${themes.palette.posts.linksBorder};
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
`;
