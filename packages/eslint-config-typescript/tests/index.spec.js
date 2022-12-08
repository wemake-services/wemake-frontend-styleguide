const fs = require('node:fs')
const path = require('node:path')

const { ESLint } = require('eslint')

const packagePath = path.resolve(__dirname, '..')

function readFixtureFile(fixtureName) {
  const fixturePath = `${packagePath}/tests/fixtures/${fixtureName}`
  return String(fs.readFileSync(fixturePath))
}

async function eslintConfigTester(fixtureName, configType) {
  const rootConfig = require(`${packagePath}/index.js`)

  const cli = new ESLint({
    'cwd': packagePath,
    'baseConfig': {
      ...rootConfig.configs[configType],
      'root': true,
    },
    'useEslintrc': false,
  })
  return await cli.lintText(readFixtureFile(fixtureName), {
    'filePath': fixtureName,
  })
}

describe('eslint-config-typescript e2e tests', () => {
  test.each([
    { 'filename': 'recommended.ts', 'config': 'recommended' },
    { 'filename': 'base.ts', 'config': 'base' },
    { 'filename': 'recommended.ts', 'config': 'base' },
    { 'filename': 'base.ts', 'config': 'recommended' },
  ])('correct fixture: %p', async ({ filename, config }) => {
    expect.hasAssertions()

    const lintResult = await eslintConfigTester(filename, config)
    expect(lintResult[0].errorCount).toBe(0)
  })

  test('incorrect fixture', async () => {
    expect.hasAssertions()

    const lintResult = await eslintConfigTester('incorrect.ts', 'recommended')
    expect(lintResult[0].errorCount).toBeGreaterThan(0)
  })
})
