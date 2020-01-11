import fs from 'fs'
import path from 'path'

import eslint from 'eslint'

const packagePath = path.resolve(__dirname, '..')

function readFixtureFile (fixtureName) {
  const fixturePath = `${packagePath}/tests/fixtures/${fixtureName}`
  return String(fs.readFileSync(fixturePath))
}

function eslintConfigTester (fixtureName, configType) {
  const cli = new eslint.CLIEngine({
    'cwd': packagePath,
    'baseConfig': {
      // eslint-disable-next-line security/detect-non-literal-require
      ...require(`../${configType}.js`),
      'root': true,
    },
    'useEslintrc': false,
  })
  return cli.executeOnText(readFixtureFile(fixtureName))
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
