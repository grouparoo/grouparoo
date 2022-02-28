import { helper } from "@grouparoo/spec-helper";
import { cache, specHelper, api } from "actionhero";
import { Reset } from "../../src/modules/reset";
import {
  App,
  Property,
  GrouparooRecord,
  SetupStep,
  Team,
  TeamMember,
} from "../../src";

describe("modules/reset", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  async function populateResque() {
    api.resque.queue.connection.redis.set("resque:stat:test", 100);

    // from https://github.com/actionhero/node-resque/blob/master/__tests__/core/queue.ts
    const errorPayload = function (id: string | number) {
      return JSON.stringify({
        worker: "busted-worker-" + id,
        queue: "busted-queue",
        payload: {
          class: "busted_job",
          queue: "busted-queue",
          args: [1, 2, 3],
        },
        exception: "ERROR_NAME",
        error: "I broke",
        failed_at: new Date().toString(),
      });
    };

    await api.resque.queue.connection.redis.rpush(
      api.resque.queue.connection.key("failed"),
      errorPayload(1)
    );
  }

  function testResqueAndCache() {
    test("the cache can be cleared", async () => {
      await expect(cache.load("testKey")).rejects.toThrow(/not found/);
    });

    test("resque stats will be reset to 0", async () => {
      const redisStatKeys = await api.resque.queue.connection.redis.keys(
        "*resque:stat:*"
      );
      const counts = await Promise.all(
        redisStatKeys.map((k) => api.resque.queue.connection.redis.get(k))
      );
      counts.map((v) => expect(v).toEqual(0));
    });

    test("there will be no resque errors", async () => {
      const failedKeys = await api.resque.queue.connection.redis.keys(
        "*resque:failed"
      );
      expect(failedKeys.length).toEqual(0);
    });

    test("periodic tasks will be re-enqueued", async () => {
      const found = await specHelper.findEnqueuedTasks("records:makeReady");
      expect(found.length).toBe(1);
    });
  }

  describe("reset:cluster", () => {
    let counts: { [model: string]: number };

    beforeAll(async () => {
      await TeamMember.truncate();
      await Team.truncate();

      await populateResque();
      await cache.save("testKey", { k: "v" });
      await helper.factories.properties();
      await helper.factories.record();
      const team = await helper.factories.team();
      await helper.factories.teamMember(team);

      counts = await Reset.cluster("test");
    });

    testResqueAndCache();

    test("counts are returned", async () => {
      expect(counts).toEqual(expect.objectContaining({ Source: 1 }));
    });

    test("apps and properties are gone", async () => {
      expect(await App.scope(null).count()).toBe(0);
      expect(await Property.scope(null).count()).toBe(0);
    });

    test("there are no records", async () => {
      const records = await GrouparooRecord.scope(null).findAll();
      expect(records.length).toBe(0);
    });

    test("all the SetupSteps will be set to incomplete", async () => {
      expect(await SetupStep.count()).toBeGreaterThan(0);
      const completeSetupSteps = await SetupStep.count({
        where: { complete: true },
      });
      expect(completeSetupSteps).toBe(0);
    });

    test("teams and teamMembers remain", async () => {
      expect(await Team.count()).toBe(1);
      expect(await TeamMember.count()).toBe(1);
    });
  });

  describe("reset:data", () => {
    beforeAll(async () => {
      await TeamMember.truncate();
      await Team.truncate();

      await populateResque();
      await cache.save("testKey", { k: "v" });
      await helper.factories.properties();
      await helper.factories.record();
      await helper.factories.import();
      const team = await helper.factories.team();
      await helper.factories.teamMember(team);
      await Reset.data("test");
    });

    testResqueAndCache();

    test("apps and properties remain", async () => {
      expect(await App.scope(null).count()).toBeGreaterThan(0);
      expect(await Property.scope(null).count()).toBeGreaterThan(0);
    });

    test("there are no records", async () => {
      const records = await GrouparooRecord.scope(null).findAll();
      expect(records.length).toBe(0);
    });

    test("there are no imports", async () => {
      const records = await GrouparooRecord.scope(null).findAll();
      expect(records.length).toBe(0);
    });

    test("teams and teamMembers remain", async () => {
      expect(await Team.count()).toBe(1);
      expect(await TeamMember.count()).toBe(1);
    });
  });

  describe("reset:cache", () => {
    beforeAll(async () => {
      await populateResque();
      await cache.save("testKey", { k: "v" });
      await Reset.cache("test");
    });

    testResqueAndCache();
  });
});
