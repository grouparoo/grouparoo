# Grouparoo CLI

_The Grouparoo Command Line Interface_

This package is released as `grouparoo` on NPM. It is used to generate and update Grouparoo projects.

## Installation

This package does not need to be installed, and can be run ad-hoc with the `npx` command, i.e.: `npx grouparoo generate`. That said you could also install and run this package either globally or locally:

- **Global** - `npm install -g grouparoo && grouparoo help`
- **Local** - `npm install grouparoo && ./node_modules/.bin/grouparoo help`

## Usage

_From `npx grouparoo --help`_

```
Usage: grouparoo [options] [command]

Options:
  -V, --version    output the version number
  -h, --help       display help for command

Commands:
  generate [path]  generate a new Grouparoo project
  upgrade [path]   upgrade an existing Grouparoo project
  help [command]   display help for command
```

## Commands

### Generate

Example: `npx grouparoo generate`

- To generate a grouparoo project in the current directory (`process.cwd()`): `npx grouparoo generate`
- To generate a grouparoo project in another directory: `npx grouparoo generate /path/to/project`

**Notes**

- We assume `node` and `npm` are installed and available within your `$PATH`
- We will not override an existing `package.json` or `.env` file if they already exist in the directory (except in the `upgrade` case)
- We will attempt to run `npm install` in the new directory

### Upgrade

Example: `npx grouparoo upgrade`

- `npx grouparoo upgrade` assumes you are tracking the `latest` version of all the Grouparoo dependencies, and will update your `package.json` to use the latest versions of your packages and then run `npm install` again to install new dependencies and build the project. This uses the `npm-check-updates` package under the hood.

### Version

Example: `npx grouparoo --version`

Get the version of this package.

---

## Development

You can run the commands in this project without compiling via `ts-node`, ie: `./node_modules/.bin/ts-node src/grouparoo.ts help`
