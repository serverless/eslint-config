# @serverless/eslint-config

## Common ESLint, Prettier configuration for Serverless projects

### Configuration in a project

#### 1. Install needed dependencies & the config itself

```bash
npm i --save-dev eslint eslint-plugin-import prettier git-list-updated @serverless/eslint-config
```

#### 2. Configure ESLint

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

#### 3. Configure Prettier

Add `prettier.config.js` file with following content:

```javascript
'use strict';

module.exports = require('@serverless/eslint-config/prettier.config');
```

#### 4. Configure npm scripts

```json
{
  "scripts": {
    "lint": "eslint  --ignore-path .gitignore .",
    "lint:updated": "pipe-git-updated --ext=js -- eslint --ignore-path .gitignore",
    "prettier-check": "prettier -c --ignore-path .gitignore \"**/*.{css,html,js,json,md,yaml,yml}\"",
    "prettier-check:updated": "pipe-git-updated --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier -c",
    "prettify": "prettier --write --ignore-path .gitignore \"**/*.{css,html,js,json,md,yaml,yml}\"",
    "prettify:updated": "pipe-git-updated --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier --write"
  }
}
```

#### 5. Ensure to validate changes in CI

Run following validation of PR's in CI build.

Note: following should be run only for PR's (as `*:updated`) scripts may fail on _branch_ or _tag_ builds due to lack of existing reference to `main`)

```bash
npm run lint:updated && npm run prettier-check:updated
```

---

### Commitlint and automation of release process (experimental)

Commit messages in context of this project should follow [Convention Commits Convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary)

See proposed [Commit Message Guidelines](https://docs.google.com/document/d/1hKUs3qt_aVp_PBI1UqvfaIqKma3jAJimEoGCRGGbOqs/edit#)

#### Release process automation with help of Travis CI

1. Commit messages are validated (with [commitlint](https://commitlint.js.org/)) in context of PR's that are coming from local branches.
   To not increase difficulty of contribution, we do not enforce that on external contributors. Still in turn PR's coming from forks (if commit messages do not follow CC), are expected to be squash merged with a valid CC commit message.
1. In Release PR by running `npm run prepare-release` command developer bumps version in `package.json` and generates the changelog entry (which can be altered if needed).
1. Release PR's are automatically detected in CI by fact of `version` in `package.json` file being changed.
   In context of that build, existence of new version changelog entry (in `CHANGELOG.md`) is validated.
1. Once release PR is merged, `main` build detects that release PR was merged by fact that it covers change of `version` field in `package.json` file. In such case (after tests pass) version tag is created and pushed to the repository
1. In context fo version tag build, new version is published to npm, and release notes are retrieved from CHANGELOG.md and pushed to GitHub.
1. If needed release notes can be updated at any time afterwards. They should be updated in `CHANGELOG.md` and change can be pushed to GitHub release notes by running:
   `npx github-release-from-cc-changelog <version>`
