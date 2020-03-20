import { css } from 'styled-components'

export const font = {
  $f_0: `'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif`,
  $f_1: `YuMincho, 'Hiragino Mincho ProN', Meiryo, serif`
}

const sizes = {
  xs: 'screen and (min-width: 375px)',
  s: 'screen and (min-width: 414px)',
  sm: 'screen and (min-width: 470px)',
  ms: 'screen and (min-width: 600px)',
  m: 'screen and (min-width: 680px)',
  ml: 'screen and (min-width: 768px)',
  ls: 'screen and (min-width: 900px)',
  l: 'screen and (min-width: 1040px)',
  lm: 'screen and (min-width: 1280px)',
  ll: 'screen and (min-width: 1400px)',
  xl: 'screen and (min-width: 1800px)',
  ix: 'screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)'
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${sizes[label]} {
      ${css(...args)}
    }
  `
  return acc
}, {})
