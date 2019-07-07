/**
 * Copyright (c) 2018-present, wemake.services company.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
