module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true
  },
  extends: ['plugin:prettier/recommended', 'gatsby-standard', 'react-app'],
  plugins: ['react'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    properties: 0,
    ignoreDestructuring: 0
  },
  settings: {
    'import/resolver': {
      alias: [['~src', './src']]
    }
  }
}
