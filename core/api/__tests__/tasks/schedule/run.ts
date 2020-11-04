import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Source } from "../../../src/models/Source";
import { Schedule } from "../../../src/models/Schedule";

let actionhero;

describe("tasks/schedule:run", () => {
  let source: Source;
  let schedule: Schedule;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    schedule = await helper.factories.schedule(source);
    await schedule.update({ state: "ready" });
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("schedule:run", () => {
    test("can be enqueued", async () => {
      await task.enqueue("schedule:run", {
        scheduleGuid: "abc123",
        runGuid: "abc123",
      });
      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("throws without a runGuid", async () => {
      await expect(
        task.enqueue("schedule:run", {
          runGuid: "abc123",
        })
      ).rejects.toThrow(/scheduleGuid is a required input/);
    });
  });
});
