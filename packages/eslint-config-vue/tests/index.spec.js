const fs = require('fs')
const path = require('path')

const eslint = require('eslint')

const defaultConfig = require('..')
const packagePath = path.resolve(__dirname, '..')

const readFixtureFile = (fixtureName) => {
  const path = `${packagePath}/tests/fixtures/${fixtureName}`
  return String(fs.readFileSync(path))
}

function eslintConfigTester (fixtureName) {
  const cli = new eslint.CLIEngine({
    'cwd': packagePath,
    'baseConfig': Object.assign({
      'root': true,
    }, defaultConfig),
    'useEslintrc': false,
  })
  return cli.executeOnText(readFixtureFile(fixtureName))
}

describe('correct fixture', () => {
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
