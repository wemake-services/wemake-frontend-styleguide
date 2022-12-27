'use strict'

module.exports = {
  'roots': [
    '<rootDir>/packages',
  ],
  'transform': {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  'moduleFileExtensions': [
    'ts',
    'js',
    'jsx',
    'json',
    'node',
  ],
  'collectCoverage': false,
  'verbose': true,
}
