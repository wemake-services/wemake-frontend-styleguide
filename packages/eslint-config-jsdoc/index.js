/**
 * Copyright (c) 2018-present, wemake.services company.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
