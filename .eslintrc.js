module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off',
    properties: 0,
    ignoreDestructuring: 0,
  },
  settings: {
    'import/resolver': {
      alias: [['~src', './src']]
    },
    'import/core-modules': [
      'react'
    ]
  }
}
