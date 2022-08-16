'use strict';

const { join } = require('path');

module.exports = {
  extends: join(__dirname, './12.js'),
  globals: { globalThis: 'off' },
};
