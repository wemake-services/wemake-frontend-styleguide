'use strict'

module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:unicorn/recommended'
  ],

  plugins: [
    'security',
    'unicorn'
  ],

  rules: {
    // base
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'nonblock-statement-body-position': ['error', 'beside'],
    'computed-property-spacing': ['error', 'never'],
    'func-name-matching': ['error', 'always'],
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'getter-return': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'no-shadow': 'error',

    // warn about using console or debugger in development, fail in production
    'no-console': process.env.NODE_ENV !== 'production' ? 1 : 2,
    'no-debugger': process.env.NODE_ENV !== 'production' ? 1 : 2,

    // raise errors on long lines
    'max-len': ['error', {
      'code': 80,
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': false,
      'ignoreStrings': false,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false
    }],

    // use new syntax
    'prefer-arrow-callback': 'error',
    'prefer-rest-params': 'error',
    'object-shorthand': 'error',
    'require-yield': 'error',

    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true
    }],
    'no-var': 'error',
    'semi': ['error', 'never'],
    'prefer-const': ['error', {
      'ignoreReadBeforeAssign': false
    }],

    // security hardening
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    // this plugin is too overwhelming:
    // security/detect-object-injection': 'error',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'error'
  }
}
