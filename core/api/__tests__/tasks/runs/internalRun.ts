import { helper } from "../../utils/specHelper";
import { specHelper } from "actionhero";
import { internalRun } from "../../../src/modules/internalRun";
import { Import } from "../../../src/models/Import";

let actionhero, api;
let profile;

describe("tasks/run:internalRun", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
  }, 1000 * 30);

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("run:internalRun", () => {
    beforeAll(async () => {
      profile = await helper.factories.profile();
    });

    test("the task will create an import for every profile", async () => {
      await internalRun("test", "testGuid");

      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);

      await specHelper.runTask("run:internalRun", foundTasks[0].args[0]);

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileGuid).toBe(profile.guid);
    });
  });
});
