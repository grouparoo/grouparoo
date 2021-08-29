process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "1";

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";

describe("tasks/profile:checkReady", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("profiles:checkReady", () => {
    test.only("batch size can be configured with a setting", async () => {
      const mario = await helper.factories.profile();
      await mario.import();
      await mario.update({ state: "pending" });

      const luigi = await helper.factories.profile();
      await luigi.import();
      await luigi.update({ state: "pending" });

      await specHelper.runTask("profiles:checkReady", {});

      await mario.reload();
      await luigi.reload();

      expect([mario.state, luigi.state].sort()).toEqual(["pending", "ready"]);

      await mario.destroy();
      await luigi.destroy();
    });
  });
});
