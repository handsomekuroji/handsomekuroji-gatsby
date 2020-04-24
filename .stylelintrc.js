module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components', 'stylelint-prettier/recommended'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    indentation: 2,
    'color-named': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'font-weight-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'max-line-length': null,
    'no-duplicate-selectors': true,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'selector-no-qualifying-type': true,
    'selector-attribute-quotes': 'always',
    'selector-no-qualifying-type': null,
    'selector-combinator-space-after': 'always',
    'selector-type-no-unknown': [true, {
      'ignore': ['custom-elements']
    }],
    'string-quotes': 'single'
  }
};
