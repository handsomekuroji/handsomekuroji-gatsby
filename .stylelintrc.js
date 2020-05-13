module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components', 'stylelint-prettier/recommended'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': ['always', {
      'except': ['first-nested'],
      'ignore': ['blockless-after-same-name-blockless', 'after-comment']
    }],
    'color-named': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'comment-empty-line-before': 'always',
    'font-weight-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'max-line-length': null,
    'no-duplicate-selectors': true,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'rule-empty-line-before': ['always', {
      'except': ['first-nested']
    }],
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
