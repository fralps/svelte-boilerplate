module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],
  customSyntax: 'postcss-html',
  plugins: ['stylelint-scss'],
  ignoreFiles: ['**/node_modules/**/*', '**/vendor/**/*', '**/build/**/*'],
  rules: {
    'import-notation': null,
    'function-no-unknown': null,
    'no-invalid-position-at-import-rule': null,
    'scss/at-rule-no-unknown': null
  }
};
