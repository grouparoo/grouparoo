process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "1";

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Import, GrouparooRecord } from "../../../../src";

describe("tasks/records:enqueueExports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("records:enqueueExports", () => {
    test("batch size can be configured with a setting", async () => {
      const mario: GrouparooRecord = await helper.factories.record();
      await mario.import();
      await mario.update({ state: "ready" });
      const marioImport: Import = await helper.factories.import(
        null,
        {},
        mario.id
      );
      await marioImport.update({
        state: "exporting",
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      const luigi: GrouparooRecord = await helper.factories.record();
      await luigi.import();
      await luigi.update({ state: "ready" });
      const luigiImport: Import = await helper.factories.import(
        null,
        {},
        luigi.id
      );
      await luigiImport.update({
        state: "exporting",
        groupsUpdatedAt: new Date(),
        recordUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("records:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("record:export");
      expect(foundTasks.length).toEqual(1);

      await mario.destroy();
      await luigi.destroy();
    });
  });
});
