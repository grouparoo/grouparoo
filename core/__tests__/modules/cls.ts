import { helper } from "@grouparoo/spec-helper";
import { specHelper, api } from "actionhero";
import { CLS } from "../../src/modules/cls";

describe("modules/cls", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("the namespace exists", async () => {
    const namespace = await CLS.getNamespace();
    expect(namespace).toBeTruthy();
  });

  test("setters and getters work for complex objects", async () => {
    let result;
    const runner = async () => {
      CLS.set("test", { k: 123 });
      result = CLS.get("test");
    };

    await CLS.wrap(runner);
    expect(result).toEqual({ k: 123 });
  });

  describe("#wrap", () => {
    test("throw errors by default", async () => {
      const runner = async () => {
        throw new Error("oh no");
      };

      await expect(CLS.wrap(runner)).rejects.toThrow(/oh no/);
    });

    test("return errors if specified", async () => {
      const runner = async () => {
        throw new Error("oh no");
      };

      const error = await CLS.wrap(runner, { catchError: true }); // Does not throw error
      expect(error.message).toMatch(/oh no/);
    });
  });

  describe("#afterCommit", () => {
    test("in a transaction, deferred jobs will be run afterwords", async () => {
      const results = [] as string[];
      const runner = async () => {
        await CLS.afterCommit(() => results.push("side-effect-1"));
        await CLS.afterCommit(() => results.push("side-effect-2"));
        results.push("in-line");
      };

      await CLS.wrap(runner);
      expect(results).toEqual(["in-line", "side-effect-1", "side-effect-2"]);
    });

    test("without a transaction, deferred jobs will be run in-line", async () => {
      const results = [] as string[];
      const runner = async () => {
        await CLS.afterCommit(() => results.push("side-effect-1"));
        await CLS.afterCommit(() => results.push("side-effect-2"));
        results.push("in-line");
      };

      await runner();
      expect(results).toEqual(["side-effect-1", "side-effect-2", "in-line"]);
    });
  });

  describe("#enqueueTask", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    test("with transaction", async () => {
      const runner = async () => {
        await CLS.afterCommit(async () => CLS.enqueueTask("sweeper", { a: 1 }));
      };

      await CLS.wrap(runner);
      const foundTasks = await specHelper.findEnqueuedTasks("sweeper");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ a: 1 });
    });

    test("without transaction", async () => {
      const runner = async () => {
        await CLS.afterCommit(async () => CLS.enqueueTask("sweeper", { a: 1 }));
      };

      await runner();
      const foundTasks = await specHelper.findEnqueuedTasks("sweeper");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ a: 1 });
    });
  });

  describe("#enqueueTaskIn", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    test("with transaction", async () => {
      const runner = async () => {
        await CLS.afterCommit(async () =>
          CLS.enqueueTaskIn(1, "sweeper", { a: 1 })
        );
      };

      await CLS.wrap(runner);
      const foundTasks = await specHelper.findEnqueuedTasks("sweeper");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ a: 1 });
    });

    test("without transaction", async () => {
      const runner = async () => {
        await CLS.afterCommit(async () =>
          CLS.enqueueTaskIn(1, "sweeper", { a: 1 })
        );
      };

      await runner();
      const foundTasks = await specHelper.findEnqueuedTasks("sweeper");
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({ a: 1 });
    });
  });
});
