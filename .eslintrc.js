const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  env: { node: true },
  plugins: ['prettier'], 
  extends: [
    'problems',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {},
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.mock.js',
      ],
      env: { jest: true },
    },
  ],
};
