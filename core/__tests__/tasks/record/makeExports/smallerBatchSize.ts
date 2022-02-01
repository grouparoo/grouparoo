process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "1";

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";

describe("tasks/record:makeExports", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    disableTestPluginImport: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  test("batch size can be configured with a setting", async () => {
    const mario = await helper.factories.record();

    await mario.import();
    await mario.update({ state: "pending" });

    const luigi = await helper.factories.record();
    await luigi.import();
    await luigi.update({ state: "pending" });

    await specHelper.runTask("records:makeExports", {});

    await mario.reload();
    await luigi.reload();

    expect([mario.state, luigi.state].sort()).toEqual(["exporting", "pending"]);

    await mario.destroy();
    await luigi.destroy();
  });
});
