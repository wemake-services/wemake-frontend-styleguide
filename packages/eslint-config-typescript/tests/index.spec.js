const fs = require('node:fs')
const path = require('node:path')

const eslint = require('eslint')

const packagePath = path.resolve(__dirname, '..')

function readFixtureFile(fixtureName) {
  const fixturePath = `${packagePath}/tests/fixtures/${fixtureName}`
  return String(fs.readFileSync(fixturePath))
}

function eslintConfigTester(fixtureName, configType) {
  const rootConfig = require(`${packagePath}/index.js`)

  const cli = new eslint.CLIEngine({
    'cwd': packagePath,
    'baseConfig': {
      ...rootConfig.configs[configType],
      'root': true,
    },
    'useEslintrc': false,
  })
  return cli.executeOnText(readFixtureFile(fixtureName), fixtureName)
}

describe('eslint-config-typescript e2e tests', () => {
  test.each([
    { 'filename': 'recommended.ts', 'config': 'recommended' },
    { 'filename': 'base.ts', 'config': 'base' },
    { 'filename': 'recommended.ts', 'config': 'base' },
    { 'filename': 'base.ts', 'config': 'recommended' },
  ])('correct fixture: %p', ({ filename, config }) => {
    expect.hasAssertions()

    const lintResult = eslintConfigTester(filename, config)
    expect(lintResult.errorCount).toBe(0)
  })

  test('incorrect fixture', () => {
    expect.hasAssertions()

    const lintResult = eslintConfigTester('incorrect.ts', 'recommended')
    expect(lintResult.errorCount).toBeGreaterThan(0)
  })
})
