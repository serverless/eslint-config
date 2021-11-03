'use strict';

const { join } = require('path');

module.exports = {
  extends: join(__dirname, 'index.js'),
  parserOptions: { ecmaVersion: 2015 },
  globals: { BigInt: 'off' },
};
