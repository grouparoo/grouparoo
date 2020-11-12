import { api } from "actionhero";
import * as uuid from "uuid";
import { helper } from "@grouparoo/spec-helper";
import { objectCache, objectCacheInvalidate } from "./../../src/modules/cache";

let actionhero;

const objectGuid = "xyz_" + uuid.v4();

describe("modules/cache", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

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
    function checkCaching(name, cacheKey) {
      const meth3 = async () => {
        return 3;
      };
      const meth4 = async () => {
        return 4;
      };
      test(`the method can will cache the value with ${name}`, async () => {
        let value;
        value = await objectCache({ objectGuid, cacheKey }, meth3);
        expect(value).toEqual(3);

        value = await objectCache({ objectGuid, cacheKey }, meth4);
        expect(value).toEqual(3);

        value = await objectCache({ objectGuid, cacheKey, read: false }, meth4);
        expect(value).toEqual(4);
      });

      test(`the method can will not write the value if asked with ${name}`, async () => {
        let value;
        value = await objectCache(
          { objectGuid, cacheKey, write: false },
          meth3
        );
        expect(value).toEqual(3);

        value = await objectCache({ objectGuid, cacheKey }, meth4);
        expect(value).toEqual(4);
      });

      test(`the value can be cleared with ${name}`, async () => {
        let value;
        value = await objectCache({ objectGuid, cacheKey }, meth3);
        expect(value).toEqual(3);

        await objectCacheInvalidate({ objectGuid });

        value = await objectCache({ objectGuid, cacheKey }, meth4);
        expect(value).toEqual(4);
      });
    }
    checkCaching("string", "testvalue");
    checkCaching("integer", 3);
    checkCaching("Date", new Date());
    checkCaching("boolean", false);
    checkCaching("Object", {
      one: { deep: true, other: 3, deeper: { pass: "true", list: [1, 2, 3] } },
      two: "here",
      three: false,
      four: "now",
      five: new Date(),
      six: ["here", "multi"],
    });
    checkCaching("Array", [
      1,
      { ok: true, other: "here" },
      ["deep", "array"],
      false,
      new Date(),
    ]);
  });

  describe("locking", () => {
    const cacheKey = "getvalue";

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

    test("if a lock is in use, it will only let one through when called in parallel", async () => {
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
