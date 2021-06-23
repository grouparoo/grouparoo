# @grouparoo/spec-helper

Shared Utilities for testing [Grouparoo](https://www.grouparoo.com) and Grouparoo Plugins. Learn more at https://www.grouparoo.com/docs/running/testing.

A typical test file's shape:

```ts
import { helper } from "@grouparoo/spec-helper";

describe("test suite", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("it works", () => {
    expect(1 + 1).toBe(2);
  });
});
```

Since you are asking Jest/TS-Jest to compile a Typescript file from within `node_modules`, you will need to add the following to your jest config (usually `jest.config.js`)

```js
transformIgnorePatterns: ["node_modules/(?!(@grouparoo)/)"];
```

## Notes

1. You _must_ require `@grouparoo/spec-helper` as the first import in your test files.
2. If you want to inject a plugin to the running Grouparoo test instance, use the `GROUPAROO_INJECTED_PLUGINS` environment variable:

```ts
import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/bigquery": { path: path.join(__dirname, "..", "..") },
});
```
