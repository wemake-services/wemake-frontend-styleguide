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

    // design
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    '@typescript-eslint/consistent-type-assertions': ['error', {
      'assertionStyle': 'as',
      'objectLiteralTypeAssertions': 'allow-as-parameter',
    }],
  },
}
