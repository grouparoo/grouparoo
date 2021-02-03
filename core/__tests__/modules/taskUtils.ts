import { helper } from "@grouparoo/spec-helper";
import { api, specHelper, Task } from "actionhero";
import { TaskUtils } from "../../src/modules/taskUtils";

describe("modules/taskUtils", () => {
  let task: Task;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
    task = api.tasks.tasks["export:send"];
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  describe("reEnqueueIfGuidParams", () => {
    it("will re-enqueue the task with ID params if guids are present", async () => {
      await TaskUtils.reEnqueueIfGuidParams(task, {
        guid: "abc",
        destinationGuid: "abc",
        exportGuid: "abc",
      });

      const foundTasks = await specHelper.findEnqueuedTasks(task.name);
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({
        id: "abc",
        destinationId: "abc",
        exportId: "abc",
      });
    });

    it("will not re-enqueue the task if the params are IDs", async () => {
      await TaskUtils.reEnqueueIfGuidParams(task, {
        id: "abc",
        destinationId: "abc",
        exportId: "abc",
      });
      const foundTasks = await specHelper.findEnqueuedTasks(task.name);
      expect(foundTasks.length).toBe(0);
    });
  });
});
