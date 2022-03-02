import { helper } from "@grouparoo/spec-helper";
import { specHelper, api, task } from "actionhero";
import { Redis } from "ioredis";
import { ResqueInitializer } from "../../src/initializers/resque";
import { getCoreVersion } from "../../src/modules/pluginDetails";

jest.mock("../../src/config/tasks.ts", () => ({
  __esModule: true,
  test: {
    tasks: () => {
      return {
        scheduler: true,
        queues: ["*"],
        workerLogging: {},
        schedulerLogging: {},
        timeout: 100,
        checkTimeout: 50,
        minTaskProcessors: 1,
        maxTaskProcessors: 1,
        maxEventLoopDelay: 5,
        stuckWorkerTimeout: 1000 * 60 * 60,
        connectionOptions: {
          tasks: {},
        },
      };
    },
  },
}));

describe("initializers/resque", () => {
  let isScheduler = true;

  helper.grouparooTestServer({ truncate: true });
  let instance: ResqueInitializer;

  beforeEach(async () => {
    await helper.sleep(1000);
    await api.resque.queue.connection.redis.flushdb();
    await helper.sleep(1000);

    Object.defineProperty(api.resque.scheduler, "leader", {
      get: jest.fn(() => isScheduler),
      set: jest.fn(),
    });
  });

  beforeEach(async () => (instance = new ResqueInitializer()));
  afterEach(async () => await instance.stop());

  test("it will check for missing periodic tasks if the resque leader", async () => {
    isScheduler = true;

    await api.resque.queue.connection.redis.flushdb();

    let found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(0);

    await instance.recheckPeriodicTasks();

    found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(1);
  });

  test("it will not check for missing periodic tasks if not the resque leader", async () => {
    isScheduler = false;
    await api.resque.queue.connection.redis.flushdb();

    let found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(0);

    await instance.recheckPeriodicTasks();

    found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(0);
  });

  describe("version changes", () => {
    let client: Redis;
    let grouparooVersion: string;

    beforeAll(async () => {
      client = api.redis.clients.client;
      grouparooVersion = getCoreVersion();
    });

    test("it will clear resque if the grouparoo version changes", async () => {
      await client.set("grouparoo:version", "x");
      await task.enqueue("record:destroy", { recordId: "foo" });

      await instance.start();

      const foundTasks = await specHelper.findEnqueuedTasks("record:destroy");
      expect(foundTasks.length).toBe(0);
      expect(await client.get("grouparoo:version")).toEqual(grouparooVersion);
    });

    test("it will not clear resque if the grouparoo version is the same", async () => {
      await client.set("grouparoo:version", grouparooVersion);
      await task.enqueue("record:destroy", { recordId: "foo" });

      await instance.start();

      const foundTasks = await specHelper.findEnqueuedTasks("record:destroy");
      expect(foundTasks.length).toBe(1);
      expect(await client.get("grouparoo:version")).toEqual(grouparooVersion);
    });
  });
});
