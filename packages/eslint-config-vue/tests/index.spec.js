import fs from 'fs'
import path from 'path'

import eslint from 'eslint'

const defaultConfig = require('..')
const packagePath = path.resolve(__dirname, '..')

function readFixtureFile (fixtureName) {
  const fixturePath = `${packagePath}/tests/fixtures/${fixtureName}`
  return String(fs.readFileSync(fixturePath))
}

function eslintConfigTester (fixtureName) {
  const cli = new eslint.CLIEngine({
    'cwd': packagePath,
    'baseConfig': {
      ...defaultConfig,
      'root': true,
    },
    'useEslintrc': false,
  })
  return cli.executeOnText(readFixtureFile(fixtureName))
}

describe('eslint-config-vue e2e tests', () => {
  test('correct fixture', () => {
    expect.hasAssertions()

    const lintResult = eslintConfigTester('Correct.vue')
    expect(lintResult.errorCount).toBe(0)
  })

  test('incorrect fixture', () => {
    expect.hasAssertions()

    const lintResult = eslintConfigTester('Incorrect.vue')
    expect(lintResult.errorCount).toBe(2)
  })
})
