module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    es2020: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx",],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/no-explicit-any': [
          'warn',
          {
            ignoreRestArgs: true,
          },
        ],
        '@typescript-eslint/camelcase': [
          'error',
          {
            properties: 'never',
            ignoreDestructuring: true,
          },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'import/extensions': [
          'error',
          'always',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
      parser: '@typescript-eslint/parser',
    },
  ],
  parserOptions: {
    sourceType: 'module',
  },
};
