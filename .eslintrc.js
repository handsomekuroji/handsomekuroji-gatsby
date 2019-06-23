module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: ['prettier', 'prettier/standard', 'gatsby-standard'],
  plugins: ['prettier', 'react'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    properties: 0,
    ignoreDestructuring: 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        semi: false,
        printWidth: 120
      }
    ]
  }
}
