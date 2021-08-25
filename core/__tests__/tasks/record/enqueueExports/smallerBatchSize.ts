process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "1";

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Import, Profile } from "../../../../src";

describe("tasks/profiles:enqueueExports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("profiles:enqueueExports", () => {
    test("batch size can be configured with a setting", async () => {
      const mario: Profile = await helper.factories.profile();
      await mario.import();
      await mario.update({ state: "ready" });
      const marioImport: Import = await helper.factories.import(
        null,
        {},
        mario.id
      );
      await marioImport.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      const luigi: Profile = await helper.factories.profile();
      await luigi.import();
      await luigi.update({ state: "ready" });
      const luigiImport: Import = await helper.factories.import(
        null,
        {},
        luigi.id
      );
      await luigiImport.update({
        groupsUpdatedAt: new Date(),
        profileUpdatedAt: new Date(),
        exportedAt: null,
      });

      await specHelper.runTask("profiles:enqueueExports", {});

      const foundTasks = await specHelper.findEnqueuedTasks("profile:export");
      expect(foundTasks.length).toEqual(1);

      await mario.destroy();
      await luigi.destroy();
    });
  });
});
