import { css } from 'styled-components'

export const font = {
  $f_0: `'Montserrat', 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans', 'ヒラギノ角ゴシック', YuGothic,
  'Yu Gothic', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif`,
  $f_1: `'游明朝', YuMincho, 'Hiragino Mincho ProN', Meiryo, serif`
}

export const color = {
  $c_0: '#404040',
  $c_1: '#757575',
  $c_2: '#ebebeb',
  $c_3: '#fcfcfc',
  $c_4: '#ffffff',
  $c_5: '#0090c6',
  $c_6: '#5f4b8b',
  $c_7: '#888c96',
  $c_8: '#66d7d1'
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
