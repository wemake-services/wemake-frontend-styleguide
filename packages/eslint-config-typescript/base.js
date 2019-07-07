'use strict'

const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.vue']

module.exports = {
  'extends': [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  'settings': {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts', '.vue'],
    },
    'import/resolver': {
      // See: https://www.npmjs.com/package/eslint-import-resolver-typescript
      'typescript': {},
    },
  },

  'rules': {
    // Special rules when typescript support is active:
    // See: https://github.com/benmosher/eslint-plugin-import
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/no-absolute-path': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-unused-modules': ['error', { 'unusedExports': true }],
    'import/export': 'error',
    'import/no-mutable-exports': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/max-dependencies': ['error', { 'max': 15 }],
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': ['error', {
      'allowObject': true,
      'allowArrowFunction': true,
    }],
  },
}
