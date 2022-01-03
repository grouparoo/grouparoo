# Grouparoo and Github Codespaces

This directory contains the required code to run the Grouparoo monorepo in a Github Codespcae.

After the setup is complete:

- all packages should be build
- `roo` alias configured
- Environment variable files (`.env`) ready for use

## Notes

1. It might take a while to initialize, especially the `pnpm install` step
2. Redis and Postgres are running within local docker containers, but should appear to be running on localhost (port forwarding)

## Required Changes

It's not possible to know the codespace URL within the codespace, so you will need to change the `WEB_URL` in the `.env` files of your apps. You will change `WEB_URL=http://localhost:3000` to something like `WEB_URL=https://evantahler-grouparoo-grouparoo-gjwq54hwxwj-3000.githubpreview.dev`
