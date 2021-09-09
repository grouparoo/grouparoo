process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "1";

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";

describe("tasks/record:checkReady", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("records:checkReady", () => {
    test("batch size can be configured with a setting", async () => {
      const mario = await helper.factories.record();

      await mario.import();
      await mario.update({ state: "pending" });

      const luigi = await helper.factories.record();
      await luigi.import();
      await luigi.update({ state: "pending" });

      await specHelper.runTask("records:checkReady", {});

      await mario.reload();
      await luigi.reload();

      expect([mario.state, luigi.state].sort()).toEqual(["pending", "ready"]);

      await mario.destroy();
      await luigi.destroy();
    });
  });
});
