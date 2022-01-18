# Grouparoo Environment Variables

This document is an exhaustive list of all of the Environment Variables that can be used to configure how the Grouparoo application is run

## Core

### Common

- `REDIS_URL` - URL to connect to Redis
- `DATABASE_URL` - URL to connect to Postgres/SQLite
- `WEB_URL` - the FQDN that the Grouparoo application will resolve
- `WEB_SERVER` - Should the web server be enabled?
- `WORKERS` - How many background workers should this Grouparoo instance run (0 is off)
- `SERVER_TOKEN` - A Unique and Random string that is used to identify other members of the cluster and secure SSR API requests.
- `GROUPAROO_LOG_LEVEL` - What level should the application be logging at.
- `GROUPAROO_LOGS_PATH` - where should logs be stored to disk?
- `GROUPAROO_LOGS_STDOUT_DISABLE_COLOR` - disable colorizing STDOUT/STDERR logs
- `GROUPAROO_LOGS_STDOUT_DISABLE_TIMESTAMP` - disable including the timestamp in log lines
- `GROUPAROO_CONFIG_DIR` - Set the config directory path. Default is `${process.cwd()}/config`
- `GROUPAROO_CONFIG_ARCHIVE` - The URL of a config Tarball which will be downloaded at boot and used to create `GROUPAROO_CONFIG_DIR`
- `GROUPAROO_RUN_MODE` - What CLI command are we running? Usually set by the CLI
- `GROUPAROO_IMPORTS_BATCH_SIZE` - How many to records to import at once? (default 500)
- `GROUPAROO_EXPORTS_BATCH_SIZE` - How many to records to export at once? (default 1000)
- `GROUPAROO_DISABLE_EXPORTS` - Should we really send exports (normally configured via `grouparoo run` args)
- `GROUPAROO_EXPORT_LOG` - The path to a log file which will contain all the data exported from Grouparoo

### Options

- `GROUPAROO_OPTION__*__*` - Options for an App, Source, or Destination. Learn more at https://www.grouparoo.com/docs/support/secrets

## Plugins

### @grouparoo/dbt

- `DBT_PROFILES_DIR`

### @grouparoo/cloudwatch

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_CLOUDWATCH_LOG_RETENTION_DAYS` - How many days to keep Cloudwatch logs? Default 90.

### @grouparoo/demo

- `DEMO_DATABASE_URL`
- `DEMO_CLICKHOUSE_URL`
- `DEMO_MYSQL_URL`
- `DEMO_MONGO_URI`
- `DEMO_MONGO_DATABASE_NAME`

### @grouparoo/newrelic

- `NEW_RELIC_LICENSE_KEY`

### @grouparoo/sentry

- `SENTRY_DSN`
- `SENTRY_TRACE_SAMPLE_RATE`

## Grouparoo Services: Cloud, Authentication, and Telemetry

- `GROUPAROO_TELEMETRY_ENABLED` - Toggle whether or not this instance reports to telemetry.grouparoo.com
- `GROUPAROO_TELEMETRY_URL` - Normally https://telemetry.grouparoo.com
- `GROUPAROO_AUTH_URL` - Normally https://auth.grouparoo.com
- `GROUPAROO_CLOUD` - Enabled `true` or `false`
- `GROUPAROO_DISTRIBUTION` - The version of Grouparoo running
- `GROUPAROO_CLOUD_API_TOKEN` - The API token for this Grouparoo Cloud app
- `GROUPAROO_CLOUD_API_URL` - Normally https://cloud.grouparoo.com

## Internal Use

### Development

- `NEXT_DEVELOPMENT_MODE` = is next running in development mode?
- `GROUPAROO_SPEC_HELPER_LOAD_PATH` - tell `@grouparoo/spec-helper` to load everything from `src` in core, so we can test without re-compiling
- `GROUPAROO_INJECTED_PLUGINS` in tests, tell core to load a plugin
- `GROUPAROO_PLUGIN_MANIFEST_URL` - the URL to load the list of available plugins (normally something like https://www.grouparoo.com/plugins/v1/manifest.json)

### Deployment

- `GROUPAROO_MONOREPO_APP` - When running monorepo applications (e.g. on staging) indicate which application we are running. Used by the `Procfile` mostly
