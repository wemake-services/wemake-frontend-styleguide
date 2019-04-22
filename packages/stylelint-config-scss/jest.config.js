const base = require('../../jest.config.base.js')
const pack = require('./package')

const shortName = pack.name.split('/')[1]

module.exports = {
  ...base,
  'preset': 'jest-preset-stylelint',
  'displayName': pack.name,
  'name': shortName,
  'rootDir': '../..',
  'testMatch': [`<rootDir>/packages/${shortName}/**/*.spec.js`],
}
