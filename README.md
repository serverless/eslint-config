# @serverless/eslint-config

## Common ESLint, Prettier and Commitlint (experimental) configuration, for Serverless projects

### How to setup linters in a project

1. Install needed dependencies:

```bash
npm i --save-dev eslint eslint-plugin-import prettier git-list-updated
```

1. Configure ESLint

Add `eslintConfig` to package.json:

_For Node.js projects:_

```json
{
  "eslintConfig": {
    "extends": "@serverless/eslint-config/node",
    "root": true
  }
}
```

_For Browser projects:_

```json
{
  "eslintConfig": {
    "extends": "@serverless/eslint-config/browser",
    "root": true
  }
}
```

1. Configure Prettier

Add `.prettier.config.js` file with following content:

```javascript
'use strict';

module.exports = require('@serverless/eslint-config/prettier.config');
```

1. Configure npm scripts

Configure following scripts in package.json:

```json
{
  "scripts": {
    "lint": "eslint . --cache",
    "commitlint": "commitlint -f HEAD@{15}",
    "lint-updated": "pipe-git-updated --ext=js -- eslint --cache",
    "prettier-check-updated": "pipe-git-updated --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier -c",
    "prettify": "prettier --write --ignore-path .gitignore '**/*.{css,html,js,json,md,yaml,yml}'"
  }
}
```

1. Ensure to validate changes in CI

Run following validation in CI setup:

```bash
npm run lint-updated && npm run prettier-check-updated
```

#### Commitlint (experimental)

This project is also covered by [commitlint](https://commitlint.js.org/) which ensure readable and programmaticaly consumable git commit messages.

See proposed [Commit Message Guide](https://docs.google.com/document/d/1hKUs3qt_aVp_PBI1UqvfaIqKma3jAJimEoGCRGGbOqs/edit#)
