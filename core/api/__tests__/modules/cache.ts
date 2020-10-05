import { api } from "actionhero";
import * as uuid from "uuid";
import { helper } from "@grouparoo/spec-helper";
import { objectCache, objectCacheInvalidate } from "./../../src/modules/cache";

let actionhero;

describe("modules/cache", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
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

  describe("caching", () => {
    const cacheKey = "getvalue";
    const objectGuid = "xyz_" + uuid.v4();
    test("the method is called to get the value", async () => {
      let value;
      value = await objectCache({ objectGuid, cacheKey }, async () => {
        return 3;
      });
      expect(value).toEqual(3);

      value = await objectCache({ objectGuid, cacheKey }, async () => {
        return 4;
      });
      expect(value).toEqual(3);
    });

    test("the method can skip cache to get the value", async () => {
      let value;
      value = await objectCache({ objectGuid, cacheKey }, async () => {
        return 3;
      });
      expect(value).toEqual(3);

      value = await objectCache(
        { objectGuid, cacheKey, read: false },
        async () => {
          return 4;
        }
      );
      expect(value).toEqual(4);
    });

    test("the method can will not write the value if asked", async () => {
      const write = false;
      let value;
      value = await objectCache({ objectGuid, cacheKey, write }, async () => {
        return 3;
      });
      expect(value).toEqual(3);

      value = await objectCache({ objectGuid, cacheKey }, async () => {
        return 4;
      });
      expect(value).toEqual(4);
    });

    test("the value can be cleared", async () => {
      let value;
      value = await objectCache({ objectGuid, cacheKey }, async () => {
        return 3;
      });
      expect(value).toEqual(3);

      await objectCacheInvalidate({ objectGuid });

      value = await objectCache({ objectGuid, cacheKey }, async () => {
        return 4;
      });
      expect(value).toEqual(4);
    });
  });

  describe("locking", () => {
    const cacheKey = "getvalue";
    const objectGuid = "xyz_" + uuid.v4();

    test("if a lock is in use, it will wait until it is free", async () => {
      const callee = jest.fn().mockReturnValue(3);
      const methodToGetValue = async () => {
        return callee();
      };
      const first = objectCache({ objectGuid, cacheKey }, methodToGetValue);
      const second = objectCache({ objectGuid, cacheKey }, methodToGetValue);

      const values = await Promise.all([first, second]);
      expect(values).toEqual([3, 3]);
      expect(callee).toHaveBeenCalledTimes(1);
    });

    test("if a lock is in use, it will call them in parallel", async () => {
      const callee = jest.fn().mockReturnValue(3);
      const methodToGetValue = async () => {
        return callee();
      };
      const lock = false;
      const first = objectCache(
        { objectGuid, cacheKey, lock },
        methodToGetValue
      );
      const second = objectCache(
        { objectGuid, cacheKey, lock },
        methodToGetValue
      );

      const values = await Promise.all([first, second]);
      expect(values).toEqual([3, 3]);
      expect(callee).toHaveBeenCalledTimes(2);
    });
  });
});
