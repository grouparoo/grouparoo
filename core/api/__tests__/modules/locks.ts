import { helper } from "./../utils/specHelper";
import { waitForLock } from "./../../src/modules/locks";

let actionhero;
let api;

describe("modules/locks", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  describe("locks", () => {
    const key = "testKey";

    test("a lock can be obtained when it is not taken", async () => {
      const { attempts, releaseLock } = await waitForLock(key);
      expect(attempts).toBe(1);
      await releaseLock();
    });

    test("if a lock is in use, it will wait until it is free", async () => {
      const firstLock = await waitForLock(key);
      // do not await for the second lock yet
      const secondLockPromise = waitForLock(key);

      expect(firstLock.attempts).toBe(1);
      setTimeout(firstLock.releaseLock, 1000);

      // ok, now await for the second lock to resolve... which should be 1s from now
      const secondLock = await Promise.resolve(secondLockPromise);
      expect(secondLock.attempts).toBeGreaterThan(1);
      await secondLock.releaseLock();
    });

    test("if a lock cannot be obtained in time, an error will be thrown", async () => {
      const firstLock = await waitForLock(key);
      expect(firstLock.attempts).toBe(1);

      try {
        // use all default values except for sleepTime, so this test doesn't take 30s
        await waitForLock(key, undefined, undefined, undefined, 1);
        throw new Error("should never get here");
      } catch (error) {
        expect(error.message).toMatch(
          /could not obtain a lock for grouparoo:lock:testKey after \d* attempts/
        );
      }
    });

    test("if a lock is not explicitly released, it will be cleared via timeout", async () => {
      // only lock for 1 second
      const firstLock = await waitForLock(key, "testReq", 1000);
      const secondLock = await waitForLock(key);
      // the lock should be obtained in less than 5s, which is this test's time limit
      expect(secondLock.attempts).toBeGreaterThan(1);
    });
  });
});
