import "@grouparoo/spec-helper";
import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { plugin } from "@grouparoo/core";

let actionhero;

describe("mysql/table/scheduleOptions", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    plugin.mountModels();
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("gets the percentage complete of a run", async () => {
    const run = await helper.factories.run();
    console.log(run);
  });
});
