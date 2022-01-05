# @grouparoo/cloudwatch

A [Grouparoo](https://www.grouparoo.com) plugin for sending application logs to AWS Cloudwatch

Learn more about Grouparoo Plugins at [www.grouparoo.com/docs/plugins](https://www.grouparoo.com/docs/integrations).

## Installation

In your Grouparoo project, run `grouparoo install @grouparoo/cloudwatch`.

The following environment variables are required:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

By default, logs have a 90 day retention period. You can customize this setting by using the `AWS_CLOUDWATCH_LOG_RETENTION_DAYS` environment variable.

Note that, `GROUPAROO_LOG_LEVEL` also effects this logger. By default, the log-level of this logger is is "notice" NOT "info".
