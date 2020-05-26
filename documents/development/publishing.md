# Publishing Grouparoo

![Grouparoo Publishing Overview](https://raw.githubusercontent.com/grouparoo/grouparoo/master/documents/images/grouparoo-release-process.png)

## Overview

We use a combination of tools from `lerna` to handle publishing these packages. A detailed blog post on our publishing process can be found [here](https://www.grouparoo.com/blog/grouparoo-monorepo-deployment).

## Release Channels

We automatically publish a new `alpha` release every week from the `master` branch.

- This builds will be tagged `prerelease` and match the `alpha namespace`, ie: `v1.2.3-alpha.5` and have the npm tag `next` (ie `npm install grouparoo@core --next)`
- The `lerna-changelog` tool will automatically read closed & merged pull requests between the previous tag and now to build the notes for the [Github release](https://github.com/grouparoo/grouparoo/releases)

We manually publish a new `latest` release every month if there are changes to the `stable` branch.

- This manual process is triggered simply by an administrator merging the `master` github branch into the `stable` branch. CI takes care of the rest.
- This builds will match the `normal namespace`, ie: `v1.2.3`. They will be `npm install`'d in the normal way.

## CI Notes

CI uses a few secrets for authentication:

- `GITHUB_AUTH` - a Github PAT token. This is stored as an environment variable within Circle CI.
- `NPM_TOKEN` - a NPM access token. This is stored as an environment variable within Circle CI.
- A SSH key with write access to the `grouparoo/grouparoo` repo. This SSH key is only used for CI to checkout our repositories. CircleCI knows the private key and Github knows the public key.

As a note, we cannot `Include administrators` on Github's branch protection for the master or release branches as lerna needs to push it's changes back to the master branch after bumping the version and publishing.

## Staging Servers

Aside from the above, our staging servers are automatically deployed against any change to the master branch (which has all its tests passing).
