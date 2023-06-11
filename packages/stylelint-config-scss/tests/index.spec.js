/* eslint-disable max-lines-per-function, sonarjs/no-duplicate-string */

require('core-js/stable')
require('regenerator-runtime/runtime')

const path = require('node:path')
const stylelint = require('stylelint')

// eslint-disable-next-line unicorn/import-index
const config = require('..')

const fixturesDirectory = path.resolve(__dirname, 'fixtures')

const checks = {
  'declarations': {
    'errors': 9,
    'messages': [
      'scale-unlimited/declaration-strict-value',
      'plugin/declaration-block-no-ignored-properties',
      'declaration-empty-line-before',
      'scss/declaration-nested-properties',
      'font-weight-notation',
      'color-format/format',
      'color-named',
    ],
  },

  'functions': {
    'errors': 7,
    'messages': [
      'function-name-case',
      'scss/at-function-parentheses-space-before',
      'scss/at-function-pattern',
      'scss/at-function-named-arguments',
      'csstree/validator',
    ],
  },

  'if-else-loop': {
    'errors': 5,
    'messages': [
      'scss/at-else-closing-brace-newline-after',
      'scss/at-else-closing-brace-space-after',
      'scss/at-else-if-parentheses-space-before',
      'scss/at-if-closing-brace-space-after',
      'at-rule-empty-line-before',
    ],
  },

  'imports': {
    'errors': 3,
    'messages': [
      'scss/at-import-no-partial-leading-underscore',
      'scss/at-import-partial-extension-blacklist',
      'scss/at-import-partial-extension',
    ],
  },

  'media-queries': {
    'errors': 3,
    'messages': [
      'scss/media-feature-value-dollar-variable',
      'media-feature-name-no-unknown',
    ],
  },

  'mixins': {
    'errors': 4,
    'messages': [
      'scss/at-mixin-named-arguments',
      'scss/at-mixin-parentheses-space-before',
      'scss/at-mixin-argumentless-call-parentheses',
      'scss/at-mixin-pattern',
    ],
  },

  'operators': {
    'errors': 6,
    'messages': [
      'scss/operator-no-newline-before',
      'scss/operator-no-newline-after',
      'scss/operator-no-unspaced',
      'scss/dollar-variable-colon-space-after',
    ],
  },

  'order': true,

  'placeholders': {
    'errors': 2,
    'messages': [
      'scss/percent-placeholder-pattern',
      'scss/at-extend-no-missing-placeholder',
    ],
  },

  'plugins': {
    'errors': 3,
    'messages': [
      'plugin/no-low-performance-animation-properties',
      'plugin/stylelint-no-indistinguishable-colors',
      'csstree/validator',
    ],
  },

  'selectors': {
    'errors': 8,
    'messages': [
      'string-quotes',
      'selector-attribute-quotes',
      'scss/selector-no-redundant-nesting-selector',
      'selector-max-universal',
      'selector-max-compound-selectors',
      'selector-max-specificity',
      'csstools/use-nesting',
    ],
  },

  'url': {
    'errors': 2,
    'messages': [
      'function-url-quotes',
      'function-url-no-scheme-relative',
    ],
  },

  'variables': {
    'errors': 5,
    'messages': [
      'scss/dollar-variable-colon-space-after',
      'scss/no-duplicate-dollar-variables',
      'scss/dollar-variable-colon-space-before',
      'scss/dollar-variable-pattern',
      'scss/dollar-variable-no-missing-interpolation',
    ],
  },

  'vendor': {
    'errors': 5,
    'messages': [
      'value-no-vendor-prefix',
      'property-no-vendor-prefix',
      'selector-no-vendor-prefix',
      'media-feature-name-no-vendor-prefix',
      'at-rule-no-vendor-prefix',
    ],
  },
}

function runStylelint(fixtureName, filename) {
  return stylelint.lint({
    'files': path.join(fixturesDirectory, fixtureName, filename),
    config,
  })
}

function createCorrectStyleCheck(name) {
  describe('correct style', () => {
    let lintResult

    beforeAll(() => {
      lintResult = runStylelint(name, 'correct.scss')
    })

    test('flags no warnings', async () => {
      expect.hasAssertions()
      expect.assertions(2)

      const lintData = await lintResult
      expect(lintData.results[0].warnings).toHaveLength(0)
      expect(lintData.errored).toBe(false)
    }, 15000) // some tasks are executed for a long time
  })
}

function createIncorrectStyleCheck(name, rule) {
  describe('incorrect style', () => {
    let lintResult

    beforeAll(() => {
      lintResult = runStylelint(name, 'incorrect.scss')
    })

    test('flags correct number of warnings', async () => {
      expect.hasAssertions()
      expect.assertions(2)

      const lintData = await lintResult

      expect(lintData.results[0].warnings).toHaveLength(rule.errors)
      expect(lintData.errored).toBe(true)
    })

    test('flags correct rule warnings', async () => {
      expect.hasAssertions()
      expect.assertions(rule.messages.length)

      const lintData = await lintResult
      const received = lintData.results[0].warnings.map((warning) => {
        return warning.rule
      })

      for (const warning of rule.messages) {
        expect(received).toContain(warning)
      }
    })
  })
}

describe('stylelint-config-scss', () => {
  for (const feature of Object.keys(checks)) {
    const rule = checks[feature]

    describe(`feature ${feature}`, () => {
      createCorrectStyleCheck(feature)

      if (rule !== true) { // This means that rule only has correct styles
        createIncorrectStyleCheck(feature, rule)
      }
    })
  }
})
