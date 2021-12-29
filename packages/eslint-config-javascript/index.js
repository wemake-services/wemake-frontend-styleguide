'use strict'

const variableNamesBlacklist = [
  'result',
  'results',
  'item',
  'items',
  'values',
  'val',
  'vals',
  'var',
  'vars',
  'content',
  'contents',
  'info',
  'handle',
  'handler',
  'file',
  'obj',
  'objects',
  'objs',
  'foo',
  'bar',
  'baz',
]

module.exports = {
  'extends': [
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'standard',
  ],

  'plugins': [
    'unicorn',
    'sonarjs',
  ],

  'rules': {
    // parens, spaces, new lines, and styling
    'arrow-parens': ['error', 'always'],
    'nonblock-statement-body-position': ['error', 'beside'],
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'always'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'consistent'],
    'lines-between-class-members': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'named': 'never',
      'anonymous': 'always',
      'asyncArrow': 'always',
    }],

    // ternary expressions
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',

    // operators
    'operator-assignment': ['error', 'always'],

    // control statements
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'no-else-return': ['error', { 'allowElseIf': false }],
    'no-empty': 'error',
    'no-labels': 'error',
    'no-extra-label': 'error',
    'no-loop-func': 'error',
    'no-bitwise': 'error',
    'no-multi-assign': 'error',
    'no-plusplus': 'error',

    // naming
    'no-shadow': 'error',
    'func-name-matching': ['error', 'always'],
    'no-native-reassign': 'error',
    'consistent-this': ['error', 'self'],
    'no-catch-shadow': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-vars': ['error', {
      'varsIgnorePattern': '^_',
      'caughtErrorsIgnorePattern': '^_',
      'argsIgnorePattern': '^_',
    }],
    'id-blacklist': ['error', ...variableNamesBlacklist],
    'id-length': ['error', { 'min': 2 }],
    'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],

    // returns
    'consistent-return': 'error',
    'getter-return': 'error',

    // strings
    'prefer-template': 'error',
    'no-useless-concat': 'error',

    // generators
    'require-yield': 'error',

    // async/await
    'no-async-promise-executor': 'error',
    'require-atomic-updates': 'error',

    // switch/case
    'no-case-declarations': 'error',
    'default-case': ['error', { 'commentPattern': '^no default$' }],

    // regex
    'require-unicode-regexp': 'error',
    'no-misleading-character-class': 'error',

    // comments
    'multiline-comment-style': ['error', 'separate-lines'],

    // warn about using console or debugger in development, fail in production
    'no-console': process.env.NODE_ENV !== 'production' ? 1 : 2,
    'no-debugger': process.env.NODE_ENV !== 'production' ? 1 : 2,
    'no-alert': process.env.NODE_ENV !== 'production' ? 1 : 2,

    // complexity
    'complexity': ['error', { 'max': 6 }],
    'max-len': ['error', {
      'code': 80,
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': false,
      'ignoreStrings': false,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false,
    }],
    'max-statements': ['error', 10, { 'ignoreTopLevelFunctions': true }],
    'max-depth': ['error', { 'max': 4 }],
    'max-params': ['error', { 'max': 5 }],
    'max-nested-callbacks': ['error', { 'max': 3 }],
    'max-classes-per-file': ['error', 3],

    // use new syntax
    'no-void': 'error',
    'prefer-arrow-callback': 'error',
    'no-confusing-arrow': ['error', { 'allowParens': false }],
    'prefer-rest-params': 'error',
    'object-shorthand': 'error',
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'no-var': 'error',
    'prefer-const': ['error', { 'ignoreReadBeforeAssign': false }],

    // best practices
    'vars-on-top': 'error',
    'no-implicit-coercion': 'error',
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'radix': 'error',
    'no-div-regex': 'error',
    'prefer-object-spread': 'error',
    'no-empty-function': ['error', {
      'allow': [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],

    // promises
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/no-nesting': 'error',
    'promise/no-return-in-finally': 'error',

    // too restrictive on abbreviations, they are part of API
    'unicorn/prevent-abbreviations': 'off',
  },
  'overrides': [{
    // We use slightly different rules in .vue files:
    'files': ['*.vue'],
    'rules': {
      'unicorn/filename-case': ['error', { 'case': 'pascalCase' }],
    },
  }],
}
