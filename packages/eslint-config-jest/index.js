'use strict'

module.exports = {
  'extends': [
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  'rules': {
    // warnings to errors from recommended
    'jest/no-disabled-tests': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-alias-methods': 'error',

    'jest/consistent-test-it': ['error', { 'fn': 'test' }],
    'jest/prefer-lowercase-title': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',
    'jest/expect-expect': 'error',

    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-done-callback': 'error',

    'jest/prefer-expect-assertions': 'error',
    'jest/prefer-todo': 'error',

    // style
    'jest/prefer-strict-equal': 'error',

    // warn users about too large snapshots:
    'jest/no-large-snapshots': ['warn', { 'maxSize': 50 }],

    // sometimes `fn()` works better because of types
    'jest/prefer-spy-on': 'off',

    // allows to use long functions inside tests
    'max-lines-per-function': 'off',

    // Is not suitable to be used with Vuex actions
    // 'jest/prefer-called-with': 'error',
  },
}
