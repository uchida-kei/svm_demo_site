module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
  },
};
