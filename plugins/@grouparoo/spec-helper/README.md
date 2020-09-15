# @Grouparoo/Spec-Helper

Shared Utilities for testing Grouparoo and Grouparoo Plugins

## Notes

1. You _must_ require `@grouparoo/spec-helper` as the first import in your test files.
2. If you want to inject a plugin to the running Grouparoo test instance, use the `GROUPAROO_INJECTED_PLUGINS` environment variable:

```ts
import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});
```
