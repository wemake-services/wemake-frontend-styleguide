'use strict'

// This configuration does not require your code to compile,
// only uses AST that is fast and cheap.

module.exports = {
  'extends': './base.js',
  'rules': {
    // naming
    '@typescript-eslint/no-this-alias': [
      'error', { 'allowDestructuring': true },
    ],
    '@typescript-eslint/generic-type-naming': ['error', '^T[A-Z][a-zA-Z]+$'],

    // indentation and spacing
    '@typescript-eslint/indent': ['error', 2],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // parens and semicolons
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'error',

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': { 'delimiter': 'none', 'requireLast': false },
      'singleline': { 'delimiter': 'comma', 'requireLast': false },
    }],

    // design
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    // overrides of recommended config
    '@typescript-eslint/explicit-function-return-type': ['error', {
      'allowTypedFunctionExpressions': true,
    }],
  },
}
