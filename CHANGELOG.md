# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.1](https://github.com/serverless/eslint-config/compare/v2.1.0...v2.1.1) (2020-06-29)

### Bug Fixes

- Turn off 'no-underscore-dangle' ([d91a54c](https://github.com/serverless/eslint-config/commit/d91a54cd3a85183da6a2856d534588903684aa56))

## [2.1.0](https://github.com/serverless/eslint-config/compare/v2.0.0...v2.1.0) (2020-05-18)

### Features

- Allow labeled statements ([0bf6161](https://github.com/serverless/eslint-config/commit/0bf6161c871f9774d537b708091cf6d3375dc68d))

## [2.0.0](https://github.com/serverless/eslint-config/compare/v1.2.1...v2.0.0) (2020-04-28)

### ⚠ BREAKING CHANGES

- "tests" folders are no longer recognized as test folders.
  Instead we recognize "test" which is widely practised convention
- Drop support for Node.js v8
- Drop support for eslint v5

### Features

- Recognize "test" (instead of "tests") as tests folder ([5e3e0e5](https://github.com/serverless/eslint-config/commit/5e3e0e58defe2e2462a1d138c0d7baca261a23ac))
- Support ES2018 syntax ([f9cd210](https://github.com/serverless/eslint-config/commit/f9cd210f86ad8dd7e29fc0edc5cd2f4a06e5bd8e))

### [1.2.1](https://github.com/serverless/eslint-config/compare/v1.2.0...v1.2.1) (2019-10-28)

### Bug Fixes

- Turn off 'comma-dangle' as it conflicts with Prettier ([495de4a](https://github.com/serverless/eslint-config/commit/495de4a))

## [1.2.0](https://github.com/serverless/eslint-config/compare/v1.1.0...v1.2.0) (2019-09-05)

### Bug Fixes

- Include this package itself in the install instructions ([b8116c1](https://github.com/serverless/eslint-config/commit/b8116c1))

### Features

- Recognize 'test' folders as test files source ([23fa057](https://github.com/serverless/eslint-config/commit/23fa057))

## [1.1.0](https://github.com/serverless/eslint-config/compare/v1.0.1...v1.1.0) (2019-07-19)

### Bug Fixes

- Turn off 'allowParens' for no-confusing-arrow (Prettier support) ([e0f6a74](https://github.com/serverless/eslint-config/commit/e0f6a74))
- Turn off 'no-unused-expressions' for tests ([37c1969](https://github.com/serverless/eslint-config/commit/37c1969))

### Features

- Improve \*:updated scripts naming convention ([868046e](https://github.com/serverless/eslint-config/commit/868046e))

### [1.0.1](https://github.com/serverless/eslint-config/compare/v1.0.0...v1.0.1) (2019-07-09)

### Bug Fixes

- Turn off 'require-atomic-updates' due to false positives ([0dd3f0c](https://github.com/serverless/eslint-config/commit/0dd3f0c))

## 1.0.0 (2019-06-24)

### Features

- Prettier configuration ([74f6612](https://github.com/serverless/eslint-config/commit/74f6612))
- Reflect ESLint configuration of `serverless` package ([be5561b](https://github.com/serverless/eslint-config/commit/be5561b))
- Turn off rules that collide with Prettier ([c4ebb38](https://github.com/serverless/eslint-config/commit/c4ebb38))
