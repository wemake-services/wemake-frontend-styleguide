'use strict'

// This configuration requires your code to actually be compiled
// with typescript, that's why these rules are optional.
// Since, it might take a lot of time to actually compile stuff.

module.exports = {
  'extends': './recommended.js',
  'rules': {
    // naming
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // design
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/unbound-method': 'error',
  },
}
