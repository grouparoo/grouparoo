# Grouparoo

_The Grouparoo project generator_

This package is released as `grouparoo` (no namespace) on NPM. It is used to generate new Grouparoo projects.

## Installation

This package does not need to be installed, and can be run ad-hoc with the `npx` command, i.e.: `npx grouparoo generate`

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

- To generate a grouparoo project in the current directory (`process.cwd()`): `npx grouparoo generate`
- To generate a grouparoo project in another directory: `npx grouparoo generate /path/to/project`
- `npx grouparoo upgrade` assumes you are tracking the `latest` version of all the Grouparoo dependencies, and will simply run `npm update` under the hood.

## Notes

- We assume `node` and `npm` are installed and available within your `$PATH`
- We will not override an existing `package.json` or `.env` file if they already exist in the directory
- We will attempt to run `npm install` in the new directory
