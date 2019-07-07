'use strict'

module.exports = {
  'plugins': [
    'jsdoc',
  ],

  'settings': {
    'jsdoc': {
      'tagNamePreference': {
        'param': 'param',
        'returns': 'returns',
      },
    },
  },

  'rules': {
    // general validation
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-syntax': 'error',

    // description validation
    'jsdoc/newline-after-description': ['error', 'always'],
    'jsdoc/require-description-complete-sentence': 'error',

    // @implements validation
    'jsdoc/implements-on-classes': 'error',

    // @param tag validation
    'jsdoc/require-param': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param-description': 'error',

    // @return tag validation
    'jsdoc/require-returns-description': 'error',
  },
}
