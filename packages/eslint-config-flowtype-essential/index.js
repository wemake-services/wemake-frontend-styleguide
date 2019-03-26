/**
 * Copyright (c) 2018-present, wemake.services
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

module.exports = {
  'plugins': [
    'flowtype',
  ],

  'parserOptions': {
    'parser': 'babel-eslint',
  },

  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false,
    },
  },

  'rules': {
    // Rules come in the same order as in
    // https://github.com/gajus/eslint-plugin-flowtype#rules

    // enforces to use `Array<>` over `[]`:
    'flowtype/array-style-complex-type': [2, 'verbose'],
    'flowtype/array-style-simple-type': [2, 'verbose'],

    // enforces a particular style for boolean type annotations
    'flowtype/boolean-style': [2, 'boolean'],

    // fixes some "no-undef" from eslint
    'flowtype/define-flow-type': 1,

    // disallows trailing commas
    'flowtype/delimiter-dangle': 2,

    // disallows spaces in generics: `< >`
    'flowtype/generic-spacing': [2, 'never'],

    // disallows Number, String, Boolean in favor of number, string, boolean:
    'flowtype/no-primitive-constructor-types': 2,

    // disallows to use flow types without `// @flow` comment
    'flowtype/no-types-missing-file-annotation': 2,

    // fixes some "no-unused-expressions" from eslint
    'flowtype/no-unused-expressions': 2,

    // disallows to use `;` in type declarations
    'flowtype/object-type-delimiter': [2, 'comma'],

    // disallows to use `;` after type declarations
    'flowtype/semi': [2, 'never'],

    // prefer `(a: string)` over `(a:string)`
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/space-after-type-colon': [
      2, 'always', { 'allowLineBreak': true },
    ],

    // prefer `Promise<number>` over `Promise <number>`
    'flowtype/space-before-generic-bracket': [2, 'never'],

    // prefer `string | number` over `string|number`
    'flowtype/union-intersection-spacing': [2, 'always'],
  },
}
