# Publishing Grouparoo

We use a combination of tools from `lerna` to handle publishing these packages.

- We automatically publish a new `alpha` release on every successful CI run of the `master` branch.

  - This builds will be tagged `prerelease` and match the `alpha namespace`, ie: `v1.2.3-alpha.5` and have the npm tag `next` (ie `npm install grouparoo@core --next)`
  - The `lerna-changelog` tool will automatically read closed & merged pull requests between the previous tag and now to build the notes for the [Github release](https://github.com/grouparoo/grouparoo/releases)

- Automatically publish a new `latest` release on every successful CI run of the `release` branch.
  - This builds will match the `normal namespace`, ie: `v1.2.3`. They will be `npm install`'d in the normal way.

CI uses a few secrets for authentication:

- `GITHUB_AUTH` - a Github PAT token. This is stored as an environment variable within Circle CI.
- `NPM_TOKEN` - a NPM access token. This is stored as an environment variable within Circle CI.
- A SSH key with write access to the `grouparoo/grouparoo` repo. This SSH key is only used for CI to checkout our repositories. CircleCI knows the private key and Github knows the public key.

As a note, we cannot `Include administrators` on Github's branch protection for the master or release branches as lerna needs to push it's changes back to the master branch after bumping the version and publishing.
