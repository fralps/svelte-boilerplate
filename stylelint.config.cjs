module.exports = {
  extends: ['stylelint-config-recommended'],
  ignoreFiles: ['**/node_modules/**/*', '**/vendor/**/*', '**/build/**/*', 'src/assets/styles/app.css'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
      }
    ],
    'no-descending-specificity': null,
    'import-notation': 'string'
  }
};
