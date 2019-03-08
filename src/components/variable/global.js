import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import { font } from '../variable/mixin'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --c_0: #404040;
    --c_1: #757575;
    --c_2: #dedede;
    --c_3: #f3f7f9;
    --c_4: #fcfcfc;
    --c_5: #0090c6;
    --c_6: #5f4b8b;
    --c_7: #888c96;
  }

  ::before,
  ::after {
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  dl,
  li,
  dt,
  dd,
  p,
  div,
  span,
  img,
  a,
  table,
  tr,
  th,
  td {
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
  }

  article,
  header,
  footer,
  aside,
  figure,
  figcaption,
  nav,
  section {
    display: block;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }

  body {
    background: var(--c_3);
    color: var(--c_0);
    font: 62.5% / 1 ${font.$f_0};
    min-width: 320px;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(var(--c_0), 0.2);
  }

  a {
    background: 0 / 0 100%;
    color: var(--c_5);
    outline: none;
    transition: 0.2s ease-in-out;
    &:visited {
      color: var(--c_6);
    }
    &:hover,
    &:active {
      outline: none;
    }
    &:focus {
      outline: thin solid rgba(var(--c_5), 0.5);
    }
  }

  img,
  svg {
    height: auto;
    vertical-align: bottom;
  }

  ol,
  ul {
    list-style: none;
    list-style-type: none;
  }

  ins {
    display: block;
  }

  button {
    background: none;
    border: none;
    border-radius: 0;
    cursor: pointer;
    outline: none;
    &:focus {
      outline: thin solid rgba(var(--c_0), 0.5);
    }
  }

  input,
  textarea {
    appearance: none;
    border-radius: 0;
    &:focus {
      outline: thin solid rgba(var(--c_0), 0.5);
    }
  }

  input::selection,
  textarea::selection {
    border-color: var(--c_0);
    color: var(--c_0);
  }

  ::selection {
    background: rgba(var(--c_0), 0.3);
    color: var(--c_1);
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${fonts.MontserratRegularEot});
    src: local('Montserrat Regular'),
      url(${fonts.MontserratRegularWoff2}) format('woff2'),
      url(${fonts.MontserratRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${fonts.MontserratBoldEot});
    src: local('Montserrat Bold'),
      url(${fonts.MontserratBoldWoff2}) format('woff2'),
      url(${fonts.MontserratBoldWoff}) format('woff');
  }
`
