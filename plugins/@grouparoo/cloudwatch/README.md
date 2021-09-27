# @grouparoo/cloudwatch

A [Grouparoo](https://www.grouparoo.com) plugin for sending application logs to AWS Cloudwatch

Learn more about Grouparoo Plugins at [www.grouparoo.com/docs/plugins](https://www.grouparoo.com/docs/plugins).

## Installation

In your Grouparoo project, run `grouparoo install @grouparoo/cloudwatch`.

The following environment variables are required:

- `S3_ACCESS_KEY`
- `S3_SECRET_ACCESS_KEY`
- `S3_REGION`

Note that, `GROUPAROO_LOG_LEVEL` also effects this logger. By default, the log-level of this logger is is "notice" NOT "info".
