export const font = {
  $f_0: `'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif`,
  $f_1: `YuMincho, 'Hiragino Mincho ProN', Meiryo, serif`,
}

const sizes = {
  xs: '375px',
  s: '414px',
  sm: '470px',
  ms: '600px',
  m: '680px',
  ml: '768px',
  ls: '900px',
  l: '1040px',
  lm: '1280px',
  ll: '1400px',
  xl: '1800px',
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = () => `@media screen and (min-width: ${sizes[label]})`
  return acc
}, {})
