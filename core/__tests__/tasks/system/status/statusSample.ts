import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Status } from "../../../../src/modules/status";

describe("tasks/status:sample", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

  describe("status:sample", () => {
    beforeAll(async () => {
      await helper.factories.properties();
    });

    test("it can be enqueued", async () => {
      await task.enqueue("status:sample", { index: 1 });
      const found = await specHelper.findEnqueuedTasks("status:sample");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
      expect(found[0].args[0]).toEqual({ index: 1 });
    });

    test("it will process one status sample", async () => {
      const beforeSamples = await Status.get();
      expect(beforeSamples).toEqual({});

      await specHelper.runTask("status:sample", { index: 1 });
      const afterSamples = await Status.get();
      expect(afterSamples).toEqual({
        resqueErrors: {
          cluster: [
            {
              metric: {
                aggregation: "count",
                collection: "cluster",
                count: 0,
                topic: "resqueErrors",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
      });
    });

    test("running the task more than once will add more samples", async () => {
      await specHelper.runTask("status:sample", { index: 1 });
      await specHelper.runTask("status:sample", { index: 1 });

      const samples = await Status.get();
      expect(samples).toEqual({
        resqueErrors: {
          cluster: [
            {
              metric: {
                aggregation: "count",
                collection: "cluster",
                count: 0,
                topic: "resqueErrors",
              },
              timestamp: expect.any(Number),
            },
            {
              metric: {
                aggregation: "count",
                collection: "cluster",
                count: 0,
                topic: "resqueErrors",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
      });
    });
  });
});
