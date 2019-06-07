'use strict'

const base = require('./base')
const recommended = require('./recommended')
const strict = require('./strict')

module.exports = {
  'configs': {
    base,
    recommended,
    strict,
  },
}
