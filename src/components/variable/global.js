import { createGlobalStyle } from 'styled-components'
import { font } from '~src/components/variable/mixin'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --c_0: #404040;
    --c_0-rgb: 64, 64, 64;
    --c_1: #404040;
    --c_1-rgb: 64, 64, 64;
    --c_2: #e8e8e8;
    --c_3: #f4f5f6;
    --c_4: #fcfcfc;
    --c_4-rgb: 252, 252, 252;
    --c_5: #0090c6;
    --c_5-rgb: 0, 144, 198;
    --c_6: #5f4b8b;
    --c_7: #888c96;
    --c_7-rgb: 136, 140, 150;
    --c_8: #f1f2f3;
    --c_8-rgb: 241, 242, 243;
    --c_9: #131b36;
    --c_9-rgb: 19, 27, 54;
    --c_10: #f0f0f1;
    --c_11-rgb: 25, 25, 26;
    --c_12: #e4e4e4;
  }

  ::before,
  ::after {
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    appearance: none;
    display: none;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
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

    &.fixed {
      overflow: hidden;
    }
  }

  body {
    background: var(--c_3);
    color: var(--c_0);
    font: 62.5% / 1 ${font.$f_0};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 320px;
    -webkit-tap-highlight-color: rgba(var(--c_7-rgb), 0.2);
    text-size-adjust: 100%;

    &.dark {
      --c_0: #fcfcfc;
      --c_1: #fcfcfc;
      --c_1-rgb: 206, 216, 222;
      --c_2: rgba(0, 0, 0, 0.3);
      --c_3: #19191a;
      --c_4: #23232a;
      --c_4-rgb: 35, 35, 42;
      --c_7: #fcfcfc;
      --c_7-rgb: 206, 216, 222;
      --c_8: #19191a;
      --c_8-rgb: 25, 25, 26;
      --c_10: #34353d;
      --c_12: #22222a;
    }

    &.fixed {
      overflow: hidden;
    }
  }

  a {
    background: 0 / 0 100%;
    color: var(--c_5);
    outline: none;
    transition: color 0.2s ease-in-out;

    &:visited {
      color: var(--c_6);
    }

    @media (hover: hover) {
      &:hover {
        outline: none;
      }
    }

    &:active {
      outline: none;
    }

    &:focus {
      outline: thin solid rgba(var(--c_5-rgb), 0.5);
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
      outline: thin solid rgba(var(--c_5-rgb), 0.5);
    }
  }

  input,
  textarea {
    appearance: none;
    border-radius: 0;

    &:focus {
      outline: thin solid var(--c_2);
    }
  }

  input::selection,
  textarea::selection {
    border-color: var(--c_0);
    color: var(--c_0);
  }

  ::selection {
    background: var(--c_0);
    color: var(--c_3);
  }
`
