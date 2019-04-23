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
}

module.exports = {
  'extends': [
    'plugin:vue/essential',
  ],

  'rules': Object.assign(mergedRules, customRules),
}
