const fs = require('node:fs')
const path = require('node:path')

const { ESLint } = require('eslint')

const defaultConfig = require('..')
const packagePath = path.resolve(__dirname, '..')

function readFixtureFile(fixtureName) {
  const fixturePath = `${packagePath}/tests/fixtures/${fixtureName}`
  return String(fs.readFileSync(fixturePath))
}

async function eslintConfigTester(fixtureName) {
  const cli = new ESLint({
    'cwd': packagePath,
    'baseConfig': {
      ...defaultConfig,
      'root': true,
    },
    'useEslintrc': false,
  })
  return await cli.lintText(readFixtureFile(fixtureName))
}

describe('eslint-config-vue e2e tests', () => {
  test('correct fixture', async () => {
    expect.hasAssertions()

    const lintResult = await eslintConfigTester('Correct.vue')
    expect(lintResult[0].errorCount).toBe(0)
  })

  test('incorrect fixture', async () => {
    expect.hasAssertions()

    const lintResult = await eslintConfigTester('Incorrect.vue')
    expect(lintResult[0].errorCount).toBe(2)
  })
})
