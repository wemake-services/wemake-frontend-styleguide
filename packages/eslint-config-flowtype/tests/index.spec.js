'use strict'

const path = require('path')
const { CLIEngine } = require('eslint')

function fixtureFile (name) {
  return path.resolve(__dirname, 'fixtures', name)
}

describe('eslint-config-flowtype', () => {
  let cli

  beforeAll(() => {
    cli = new CLIEngine({
      'useEslintrc': true,
      'configFile': path.resolve(__dirname, '..', 'index.js'),
    })
  })

  test('correct style', () => {
    expect.hasAssertions()
    expect.assertions(1)

    const lintResult = cli.executeOnFiles([fixtureFile('correct.js')])
    expect(lintResult.errorCount).toEqual(0)
  })

  test('incorrect style', () => {
    expect.hasAssertions()

    const lintResult = cli.executeOnFiles([fixtureFile('incorrect.js')])
    expect(lintResult.errorCount).toEqual(18)

    const errors = [
      'flowtype/no-primitive-constructor-types',
      'flowtype/union-intersection-spacing',
      'flowtype/boolean-style',
      'flowtype/delimiter-dangle',
      'flowtype/space-after-type-colon',
      'flowtype/generic-spacing',
      'flowtype/array-style-complex-type',
      'flowtype/array-style-simple-type',
    ]

    const eslintErrors = []
    for (const error of lintResult.results[0].messages) {
      eslintErrors.push(error.ruleId)
    }

    for (const error of errors) {
      expect(eslintErrors).toContain(error)
    }
  })
})
