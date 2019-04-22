module.exports = {
  'roots': [
    '<rootDir>/packages',
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest',
  },
  'moduleFileExtensions': [
    'js',
    'jsx',
    'json',
    'node',
  ],
  'collectCoverage': false,
  'verbose': true,
}
