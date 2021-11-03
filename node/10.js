'use strict';

const { join } = require('path');

module.exports = {
  extends: join(__dirname, 'index.js'),
  globals: { globalThis: 'off' },
};
