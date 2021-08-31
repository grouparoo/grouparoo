import { helper } from "@grouparoo/spec-helper";
import { specHelper, api } from "actionhero";
import { ResqueInitializer } from "../../src/initializers/resque";

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
  helper.grouparooTestServer({ truncate: true });

  beforeEach(async () => {
    helper.sleep(100);
    await api.resque.queue.connection.redis.flushdb();
    helper.sleep(100);
  });

  test("it will check for missing periodic tasks if the resque leader", async () => {
    api.resque.scheduler.leader = true;

    await api.resque.queue.connection.redis.flushdb();
    let found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(0);

    const instance = new ResqueInitializer();
    await instance.recheckPeriodicTasks();

    found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(1);
  });

  test("it will not check for missing periodic tasks if not the resque leader", async () => {
    api.resque.scheduler.leader = false;

    await api.resque.queue.connection.redis.flushdb();
    let found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(0);

    const instance = new ResqueInitializer();
    await instance.recheckPeriodicTasks();

    found = await specHelper.findEnqueuedTasks("status");
    expect(found.length).toBe(0);
  });
});
