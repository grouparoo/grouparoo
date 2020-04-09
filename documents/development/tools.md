# Grouparoo Development Tools

We have some tools that help things run smoothly

## license-checker/check

```sh
➜  grouparoo git:(tools) ./tools/license-checker/check
checking licenses in 12 package.json files...
 - allowed licenses are: MPL-2.0, MIT, Artistic-2.0, Apache, ISC, BSD, BSD*, BSD-3-Clause, BSD-2-Clause, CC0-1.0, CC-BY-3.0, CC-BY-4.0, Unlicense, WTFPL

✅ | checked /Users/brian/grouparoo/grouparoo/package.json.  Found 698 packages. All OK!
✅ | checked /Users/brian/grouparoo/grouparoo/core/package.json.  Found 0 packages. All OK!
✅ | makes sure each has valid licenses
```

## lerna/sync_version

```sh
./tools/lerna/sync_version -h
Usage: sync_version

Options:
  --version      Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
  --verbose, -v  show steps                                              [count]

Examples:
  sync_version  make sure everything is using current lerna.json version
```

## merger/ci_generate

```sh
./tools/merger/ci_generate -h
Usage: ci_generate

Options:
  --version      Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
  --verbose, -v  show steps                                              [count]

Examples:
  ci_generate  generate yml file for continuous integration
```
