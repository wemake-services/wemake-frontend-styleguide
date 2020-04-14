'use strict'

const isArrayish = require('is-arrayish')

const recommendedConfig = require('eslint-plugin-vue/lib/configs/recommended')
const stronglyRecommendedConfig =
  require('eslint-plugin-vue/lib/configs/strongly-recommended')

const isWarning = (configValue) => configValue === 'warn' || configValue === 1

/**
 * This function turns every `warn` level rule from a config to `error`.
 *
 * It does not touch other rules.
 *
 * @param config - Configuration to monkeypatch.
 */
function warningsToErrors (config) {
  for (const ruleName of Object.keys(config.rules)) {
    const rule = config.rules[ruleName]
    if (isArrayish(rule) && isWarning(rule[0])) {
      rule[0] = 'error'
    } else if (typeof rule === 'string' && isWarning(rule)) {
      config.rules[ruleName] = 'error'
    }
  }

  return config.rules
}

const mergedRules = Object.assign(
  warningsToErrors(stronglyRecommendedConfig),
  warningsToErrors(recommendedConfig),
)

const customRules = {
  // sometimes has false-positives
  'vue/comment-directive': 'off',

  'vue/html-closing-bracket-newline': ['error', {
    'singleline': 'never',
    'multiline': 'always',
  }],
  'vue/html-closing-bracket-spacing': ['error', {
    'startTag': 'never',
    'endTag': 'never',
    'selfClosingTag': 'always',
  }],
  'vue/prop-name-casing': ['error', 'camelCase'],

  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/component-name-in-template-casing': ['error', 'kebab-case', {
    'registeredComponentsOnly': false,
  }],
  'vue/no-restricted-syntax': 'error',
  'vue/no-static-inline-styles': ['error', {
    'allowBinding': false,
  }],
  // 'vue/require-direct-export' does not work well with class components.
  'vue/v-on-function-call': ['error', 'never'],

  // See standard-js rules to be compatible with our Vue ones:
  // https://github.com/standard/eslint-config-standard
  // All our `wemake` rules overrides are more important than standard-js ones.
  'vue/array-bracket-spacing': ['error', 'never'],
  'vue/arrow-spacing': 'error',
  'vue/block-spacing': ['error', 'always'],
  'vue/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
  // 'vue/camelcase' is ignored for now:
  // https://eslint.vuejs.org/rules/camelcase.html
  'vue/comma-dangle': ['error', 'always'],
  'vue/dot-location': ['error', 'property'],
  'vue/eqeqeq': ['error', 'always', { 'null': 'ignore' }],
  'vue/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
  'vue/keyword-spacing': ['error', { 'before': true, 'after': true }],
  'vue/max-len': ['error', {
    'code': 80,
    'template': 80,
    'tabWidth': 2,
    'comments': 80,
    'ignoreUrls': true,
    'ignoreStrings': true,
    'ignoreTemplateLiterals': true,
  }],
  'vue/no-empty-pattern': 'error',
  'vue/no-irregular-whitespace': 'error',
  'vue/object-curly-spacing': ['error', 'always'],
  'vue/space-infix-ops': 'error',
  'vue/space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
}

module.exports = {
  'extends': [
    'plugin:vue/essential',
  ],

  'rules': Object.assign(mergedRules, customRules),
}
