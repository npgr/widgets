module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true
  },
  plugins: ['import', 'react', 'prettier', 'jest', 'module-resolver'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'module-resolver/use-alias': 2,
    'import/no-unresolved': 0,
    semi: 0,
    strict: 0
  }
}
