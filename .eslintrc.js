module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  plugins: [
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
