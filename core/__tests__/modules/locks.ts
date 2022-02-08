import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { getLock, waitForLock } from "../../src/modules/locks";

describe("modules/locks", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  describe("waitForLock", () => {
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
  describe("getLock", () => {
    const key = "testKey";

    test("a lock can be obtained when it is not taken", async () => {
      const releaseLock = await getLock(key);
      expect(releaseLock).toBeInstanceOf(Function);
      await releaseLock();
    });

    test("a lock cannot be obtained when it is already taken", async () => {
      const releaseLock = await getLock(key);
      expect(releaseLock).toBeInstanceOf(Function);
      const notReleaseLock = await getLock(key);
      expect(notReleaseLock).toBeFalsy();
      await releaseLock();
    });

    test("a lock will time out if it is not unlocked", async () => {
      const releaseLock = await getLock(key, 1000);
      expect(releaseLock).toBeInstanceOf(Function);
      await helper.sleep(2000);
      const secondReleaseLock = await getLock(key, 1000);
      await releaseLock();
      expect(secondReleaseLock).toBeInstanceOf(Function);
      await secondReleaseLock();
    });
  });
});
