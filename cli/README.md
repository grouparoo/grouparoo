# Grouparoo CLI

_The Grouparoo Command Line Interface_

This package is released as `grouparoo` on NPM. It is used to initiate and update Grouparoo projects.

## Installation

This package does not need to be installed, and can be run ad-hoc with the `npx` command, i.e.: `npx grouparoo init`. That said you could also install and run this package either globally or locally:

- **Global** - `npm install -g grouparoo && grouparoo`
- **Local** - `npm install grouparoo && ./node_modules/.bin/grouparoo`

## Usage

_From `npx grouparoo --help`_

```
Usage: grouparoo [options] [command]

Options:
  -V, --version    output the version number
  -h, --help       display help for command

Commands:
  config [options]                 Interactively configure Grouparoo.
  init [options] <path>            Initialize a new Grouparoo project.  Use "." for this directory.
  update                           Upgrade the NPM packages in this Grouparoo project
  install [package]                Install a grouparoo plugin (via npm install) and enable it.  Use package@version for a specific version or tag
  uninstall <package>              Uninstall a grouparoo plugin (via npm uninstall) and disable it.
  help [command]                   display help for command
```

## Commands

In addition to the commands included with this package, the `grouparoo` command line interface will load commands from `@grouparoo/core` and any plugins you have installed. The list of available commands will vary based on your plugins and Grouparoo version.

### Config

Example: `npx grouparoo config`

- This will start the Grouparoo Config UI and launch a browser for you to configure your instance.
- For more information on Config UI, see http://www.grouparoo.com/docs/config

### Init

Example: `npx grouparoo init`

- To initiate a grouparoo project in the current directory (`process.cwd()`): `npx grouparoo init .`
- To initiate a grouparoo project in another directory: `npx grouparoo init /path/to/project`

**Notes**

- We assume `node` and `npm` are installed and available within your `$PATH`
- We will not override an existing `package.json` or `.env` file if they already exist in the directory (except in the `upgrade` case)
- We will attempt to run `npm install` in the new directory

### Upgrade

Example: `npx grouparoo upgrade`

- `npx grouparoo upgrade` assumes you are tracking the `latest` version of all the Grouparoo dependencies, and will update your `package.json` to use the latest versions of your packages and then run `npm install` again to install new dependencies and build the project. This uses the `npm-check-updates` package under the hood.

### Install

Example: `npx grouparoo install @grouparoo/postgres`

- `npx grouparoo [package]` installs a Grouparoo package into your project using npm. These can also be installed using the Config UI by running `npx grouparoo config`.

### Uninstall

Example: `npx grouparoo uninstall @grouparoo/postgres`

- Uninstall a Grouparoo package from your project using npm.

### Version

Example: `npx grouparoo --version`

Get the version of this package.

---

## Development

You can run the commands in this project without compiling via `ts-node`, ie: `./node_modules/.bin/ts-node src/grouparoo.ts help`
