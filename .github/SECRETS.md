# Repository secrets

The following secrets are required to run the various GitHub Action workflows in this repository:

- `BOT_NPM_TOKEN`: NPM token that will be used to publish packages.
- `GROUPAROO_TIMED_RUN_SENTRY_DSN`: Sentry DSN used when running Grouparoo for timed runs.
- `OMNIBUS_NOTIFIER_APP_ID`: GitHub App ID for authenticating to the GitHub API when notifying infra-apps that there's a new image available.
- `OMNIBUS_NOTIFIER_APP_PRIVATE_KEY`: GitHub App Private Key for authenticating to the GitHub API when notifying infra-apps that there's a new image available.

### Notifier GitHub App

This app requires Read/Write access on the `Actions` permission for the repository that will be notified. A new GitHub App can be created [here](https://github.com/organizations/grouparoo/settings/apps/new).

To sign requests, the app's private key is required. Instructions for generating a private key can be found [here](https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps). The contents of the key will need to be copied into the `OMNIBUS_NOTIFIER_APP_PRIVATE_KEY` GitHub secret.
