'use strict'

import path from 'path'
import stylelint from 'stylelint'

// eslint-disable-next-line unicorn/import-index
import config from '../'

const fixturesDir = path.resolve(__dirname, 'fixtures')

const checks = {
  declarations: {
    errors: 9,
    messages: [
      'scale-unlimited/declaration-strict-value',
      'plugin/declaration-block-no-ignored-properties',
      'declaration-empty-line-before',
      'scss/declaration-nested-properties',
      'font-weight-notation',
      'color-format/format',
      'color-named'
    ]
  },

  functions: {
    errors: 6,
    messages: [
      'function-name-case',
      'scss/at-function-parentheses-space-before',
      'scss/at-function-pattern',
      'scss/at-function-named-arguments'
    ]
  },

  'if-else-loop': {
    errors: 12,
    messages: [
      'at-rule-empty-line-before',
      'at-rule-name-space-after',
      'block-opening-brace-space-before',
      'scss/at-else-if-parentheses-space-before',
      'scss/at-if-closing-brace-space-after',
      'scss/at-else-closing-brace-newline-after',
      'scss/at-else-closing-brace-space-after',
      'block-opening-brace-space-before',
      'block-opening-brace-space-after',
      'block-closing-brace-space-before'
    ]
  },

  imports: {
    errors: 2,
    messages: [
      'scss/at-import-no-partial-leading-underscore',
      'scss/at-import-partial-extension-blacklist'
    ]
  },

  'media-queries': {
    errors: 2,
    messages: [
      'scss/media-feature-value-dollar-variable',
      'media-feature-name-no-unknown'
    ]
  },

  mixins: {
    errors: 5,
    messages: [
      'scss/at-mixin-parentheses-space-before',
      'scss/at-mixin-pattern',
      'block-opening-brace-space-before',
      'scss/at-mixin-argumentless-call-parentheses',
      'scss/at-mixin-named-arguments'
    ]
  },

  operators: {
    errors: 5,
    messages: [
      'scss/operator-no-newline-before',
      'scss/operator-no-newline-after',
      'scss/operator-no-unspaced'
    ]
  },

  order: true,

  placeholders: {
    errors: 2,
    messages: [
      'scss/percent-placeholder-pattern',
      'scss/at-extend-no-missing-placeholder'
    ]
  },

  selectors: {
    errors: 7,
    messages: [
      'string-quotes',
      'selector-attribute-quotes',
      'scss/selector-no-redundant-nesting-selector',
      'selector-max-universal',
      'selector-max-compound-selectors',
      'selector-max-specificity'
    ]
  },

  url: {
    errors: 2,
    messages: [
      'function-url-quotes',
      'function-url-no-scheme-relative'
    ]
  },

  variables: {
    errors: 5,
    messages: [
      'scss/dollar-variable-colon-space-after',
      'scss/no-duplicate-dollar-variables',
      'scss/dollar-variable-colon-space-before',
      'scss/dollar-variable-pattern',
      'scss/dollar-variable-no-missing-interpolation'
    ]
  },

  vendor: {
    errors: 5,
    messages: [
      'value-no-vendor-prefix',
      'property-no-vendor-prefix',
      'selector-no-vendor-prefix',
      'media-feature-name-no-vendor-prefix',
      'at-rule-no-vendor-prefix'
    ]
  }
}

function runStylelint (fixtureName, filename) {
  return stylelint.lint({
    files: path.join(fixturesDir, fixtureName, filename),
    config
  })
}

function createCorrectStyleCheck (name, rule) {
  describe('correct style', () => {
    let result

    beforeAll(() => {
      result = runStylelint(name, 'correct.scss')
    })

    test('flags no warnings', async () => {
      expect.hasAssertions()
      expect.assertions(2)

      const data = await result

      expect(data.results[0].warnings).toHaveLength(0)
      expect(data.errored).toBeFalsy()
    }, 15000) // some tasks are executed for a long time
  })
}

function createIncorrectStyleCheck (name, rule) {
  describe('incorrect style', () => {
    let result

    beforeAll(() => {
      result = runStylelint(name, 'incorrect.scss')
    })

    test('flags correct number of warnings', async () => {
      expect.hasAssertions()
      expect.assertions(2)

      const data = await result

      expect(data.results[0].warnings).toHaveLength(rule.errors)
      expect(data.errored).toBeTruthy()
    })

    test('flags correct rule warnings', async () => {
      expect.hasAssertions()
      expect.assertions(rule.messages.length)

      const data = await result
      const received = data.results[0].warnings.map((warning) => warning.rule)

      for (const warning of rule.messages) {
        expect(received).toContain(warning)
      }
    })
  })
}

describe('stylelint-config-strict-scss', () => {
  for (const feature of Object.keys(checks)) {
    const rule = checks[feature]

    describe(`feature ${feature}`, () => {
      createCorrectStyleCheck(feature, rule)

      if (rule !== true) { // This means that rule only has correct styles
        createIncorrectStyleCheck(feature, rule)
      }
    })
  }
})
