# @Grouparoo/Spec-Helper

Shared Utilities for testing Grouparoo and Grouparoo Plugins

A typical test file's shape:

```ts
import { helper } from "@grouparoo/spec-helper";

describe("test suite", () => {
  let actionhero;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

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
