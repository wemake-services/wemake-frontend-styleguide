/**
 * Copyright (c) 2018-present, wemake.services
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

module.exports = {
  plugins: [
    'jsdoc'
  ],

  settings: {
    jsdoc: {
      tagNamePreference: {
        param: 'param',
        returns: 'returns'
      }
    }
  },

  rules: {
    // general validation
    'jsdoc/check-tag-names': 2,

    // description validation
    'jsdoc/newline-after-description': [2, 'always'],
    'jsdoc/require-description-complete-sentence': 2,

    // @param tag validation
    'jsdoc/require-param': 2,
    'jsdoc/check-param-names': 2,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-hyphen-before-param-description': 2,
    'jsdoc/require-param-description': 2,

    // @return tag validation
    'jsdoc/require-returns-description': 2
  }
}
