# ElegantUI Contributing Guide

Hello!, I am very excited that you are interested in contributing to ElegantUI. However, before submitting your contribution, be sure to take a moment and read the following guidelines.

- [ElegantUI Contributing Guide](#elegantui-contributing-guide)
  - [Pull Request Guidelines](#pull-request-guidelines)
  - [Development Setup](#development-setup)
  - [Visual Changes](#visual-changes)
  - [Documentation](#documentation)
  - [Breaking changes](#breaking-changes)

## Pull Request Guidelines

- The `main` branch is basically a snapshot of the latest stable version. All development must be done in dedicated branches.
- Make sure that Github Actions are green
- It is good to have multiple small commits while working on the PR. We'll let GitHub squash it automatically before the merge.
- If you correct an error:
  - If you are solving a special problem, add (fix #xxxx [, # xxx]) (# xxxx is the problem identification) in your PR title for a better launch record, for example update entities encoding / decoding (fix # 3899).
  - Provide a detailed description of the error in the PR. Favorite live demo.
  - Add the appropriate test coverage, if applicable.

## Development Setup

After cloning the repository, execute the following commands in the root folder:

1. Install dependencies

```bash
yarn
#or
yarn install
```

We use [Turbo Repo](https://turborepo.org/) for project management.

2. If you will be working on the components source code, you can use the following command to start that packages' vitebook:

```bash
yarn dev:atoms # dev:forms
```

- If you will be working on the documentation, you can use the following commands to start the docs server

```bash
yarn dev:docs
```

Remember that these commands must be executed in the root folder of the project.

3. Create a branch for your feature or fix:

```bash
# Move into a new branch for your feature
git checkout -b feature/thing
```

```bash
# Move into a new branch for your fix
git checkout -b fix/something
```

If your code passes all the tests, then push your feature/fix branch:

4. Be sure the package builds.

```bash
# Build current code
yarn build # or npm run build
```

> Note: ensure your version of Node is 14 or higher to run scripts. Send your pull request:

- Send your pull request to the `main` branch
- Your pull request will be reviewed by the maintainers and the maintainers will decide if it is accepted or not
- Once the pull request is accepted, the maintainers will merge it to the `main` branch

## Visual Changes

When making a visual change, please provide screenshots
and/or screencasts of the proposed change. This will help us to understand the
desired change easier.

## Documentation

Please update the docs with any API changes, the code and docs should always be in sync.

The main documentation lives in the `docs` folder and uses MDX

## Breaking changes

Breaking changes should be accompanied with deprecations of removed functionality. The deprecated APIs themselves should not be removed until the minor release after that.
