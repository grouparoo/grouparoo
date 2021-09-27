# @grouparoo/cloudwatch

A [Grouparoo](https://www.grouparoo.com) plugin for sending application logs to AWS Cloudwatch

Learn more about Grouparoo Plugins at [www.grouparoo.com/docs/plugins](https://www.grouparoo.com/docs/plugins).

## Installation

In your Grouparoo project, run `grouparoo install @grouparoo/cloudwatch`.

The following environment variables are required:

- `S3_ACCESS_KEY`
- `S3_SECRET_ACCESS_KEY`
- `S3_REGION`

There is an optional variable, `GROUPAROO_CLOUDWATCH_LOG_LEVEL` which will allow you to customize the log level of only this logger to record more or less information. By default, the `GROUPAROO_CLOUDWATCH_LOG_LEVEL` is "alert".
