import { helper } from "../../utils/specHelper";
import { api, task, specHelper } from "actionhero";

let actionhero;

describe("tasks/schedule:run", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("schedule:run", () => {
    test("can be enqueued", async () => {
      await task.enqueue("schedule:run", { scheduleGuid: "abc123" });
      const found = await specHelper.findEnqueuedTasks("schedule:run");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });
  });
});
