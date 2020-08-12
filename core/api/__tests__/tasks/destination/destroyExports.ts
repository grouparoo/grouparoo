import { helper } from "../../utils/specHelper";
import { api, task, specHelper } from "actionhero";
import { Export } from "../../../src/models/Export";
import { ExportImport } from "../../../src/models/ExportImport";

let actionhero;

describe("tasks/destination:destroyExports", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("destination:destroyExports", () => {
    test("can be enqueued", async () => {
      await task.enqueue("destination:destroyExports", {
        destinationGuid: "abc123",
      });
      const found = await specHelper.findEnqueuedTasks(
        "destination:destroyExports"
      );
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("it will remove all exports from a destination", async () => {
      const profile = await helper.factories.profile();
      const destination = await helper.factories.destination();
      const _import = await helper.factories.import();
      const _export = await Export.create({
        destinationGuid: destination.guid,
        profileGuid: profile.guid,
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });
      await ExportImport.create({
        exportGuid: _export.guid,
        importGuid: _import.guid,
      });

      expect(await Export.count()).toBe(1);
      expect(await ExportImport.count()).toBe(1);

      await specHelper.runTask("destination:destroyExports", {
        destinationGuid: destination.guid,
      });

      expect(await Export.count()).toBe(0);
      expect(await ExportImport.count()).toBe(0);
    });
  });
});
