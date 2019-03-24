import { createGlobalStyle } from 'styled-components'
import { font } from '../variable/mixin'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --c_0: #404040;
    --c_1: #404040;
    --c_2: #ededed;
    --c_3: #f4f5f6;
    --c_4: #fcfcfc;
    --c_5: #0090c6;
    --c_5_1: rgba(0, 144, 198, 0.5);
    --c_6: #5f4b8b;
    --c_7: #888c96;
    --c_7_1: rgba(136, 140, 150, 0.2);
    --c_8: #f1f2f3;
    --c_9: rgba(19, 27, 54, 0.1);
    --c_9_1: rgba(19, 27, 54, 0.8);
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
    transition: background 0.3s;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: var(--c_7_1);
    &.dark {
      transition: none;
      --c_0: #ced8de;
      --c_1: #fcfcfc;
      --c_2: rgba(0, 0, 0, 0.3);
      --c_3: #0d2538;
      --c_4: #0f2d44;
      --c_7: #ced8de;
      --c_7_1: rgba(206, 216, 222, 0.2);
      --c_8: #0d2538;
    }
    &light {
      transition: none;
    }
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
      outline: thin solid var(--c_2);
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
