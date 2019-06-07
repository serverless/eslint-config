"use strict";

module.exports = {
  extends: "eslint:recommended",
  env: { es6: true },
  parserOptions: { ecmaVersion: 2015 },
  rules: {
    "no-extra-semi": "off", // Handled by Prettier
    "no-mixed-spaces-and-tabs": "off", // Handled by Prettier
    "no-unexpected-multiline": "off" // Handled by Prettier
  }
};
