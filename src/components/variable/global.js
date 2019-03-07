import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import { font, color, media } from '../variable/mixin'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
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
    background: ${color.$c_3};
    color: ${color.$c_0};
    font: 62.5% / 1 ${font.$f_0};
    min-width: 320px;
    -moz-osx-font-smoothing: grayscale;
    padding: 0 0 16px;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(${color.$c_0}, 0.2);
  }

  a {
    background: 0 / 0 100%;
    color: ${color.$c_5};
    outline: none;
    transition: 0.2s ease-in-out;
    &:visited {
      color: ${color.$c_6};
    }
    &:hover,
    &:active {
      outline: none;
    }
    &:focus {
      outline: thin solid rgba(${color.$c_5}, 0.5);
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

  blockquote {
    background: rgba(${color.$c_1}, 0.2);
    padding: 16px 32px 24px;
    margin: 0 -32px;
    ${media.m`
      margin: 0;
    `}
    &[data-title] {
      background: ${color.$c_0};
      margin: 0;
      padding: 24px 32px;
      &::before {
        background: ${color.$c_0};
        color: ${color.$c_1};
        content: '🍿' attr(data-title);
        border-radius: 36px;
        display: inline-block;
        font-weight: bold;
        letter-spacing: 0.05em;
        margin: 0 0 12px;
        padding: 0 16px 0 12px;
        z-index: 1;
      }
    }
    p {
      font-size: 0.9rem;
      &:first-of-type {
        margin: 0;
        &:first-letter {
          font-size: 2.2rem;
          font-weight: bold;
          float: left;
          line-height: 1.4;
          letter-spacing: 0.2em;
        }
      }
    }
  }

  button {
    background: none;
    border: none;
    border-radius: 0;
    cursor: pointer;
    outline: none;
    &:focus {
      outline: thin solid rgba(${color.$c_0}, 0.5);
    }
  }

  input,
  textarea {
    appearance: none;
    border-radius: 0;
    &:focus {
      outline: thin solid rgba(${color.$c_0}, 0.5);
    }
  }

  input::selection,
  textarea::selection {
    border-color: ${color.$c_0};
    color: ${color.$c_0};
  }

  ::selection {
    background: rgba(${color.$c_0}, 0.3);
    color: ${color.$c_1};
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
