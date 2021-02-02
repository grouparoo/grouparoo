# @grouparoo/newrelic

Performance and error tracking with NewRelic.

Reports errors in the UI and background tasks.

## Setup

Install the `@grouparoo/newrelic` plugin into your `package.json` file manually of via `grouparoo install`. Note that a references goes in both `dependencies` and `grouparoo/plugins`.

```
{
  ...
  "dependencies": {
    ...
    "@grouparoo/newrelic": "current.version.number",
    ...
  },
  ...
  "grouparoo": {
    "plugins": [
      ...
      "@grouparoo/newrelic",
      ...
    ]
  }
}
```

Then set an environment variable.

```
NEW_RELIC_LICENSE_KEY="your.api.key.here"
```
