"use strict";

const { join } = require("path");

module.exports = {
  // The only way to ensure that ESLint resolves expected config from any location
  extends: join(__dirname, "index.js"),
  env: { node: true }
};
