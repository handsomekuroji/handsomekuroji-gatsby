module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  plugins: ['react'],
  extends: ['plugin:prettier/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    'import/resolver': {
      alias: [['~src', './src']],
    },
    'import/core-modules': ['react'],
  },
  rules: {
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off',
    properties: 0,
    ignoreDestructuring: 0,
    'no-await-in-loop': 'error',
    'no-var': 'error',
    'no-console': 'off',
    'no-trailing-spaces': 'warn',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    camelcase: ['warn', { properties: 'never' }],
    'prettier/prettier': [
      'error',
      {
        'arrow-parens': ['warn', 'as-needed'],
      },
    ],
  },
}
