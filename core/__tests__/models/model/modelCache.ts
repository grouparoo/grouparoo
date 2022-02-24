import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { GrouparooModel } from "../../../src";
import { ModelsCache } from "../../../src/modules/caches/modelsCache";

describe("models/modelsCache", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(() => (ModelsCache.TTL = 30 * 1000));
  afterAll(() => (ModelsCache.expires = 0));

  beforeAll(async () => {
    const deletedModel = await helper.factories.model();
    await deletedModel.update({ state: "deleted" });
  });

  describe("#findAllWithCache", () => {
    test("it returns all the instances", async () => {
      const instances = await ModelsCache.findAllWithCache();
      expect(instances.length).toBe(1);
    });

    test("it can filter to state", async () => {
      const newModel = await helper.factories.model({ name: "foo" });
      await newModel.update({ state: "ready" }, { hooks: false });

      const instances = await ModelsCache.findAllWithCache(undefined, "ready");

      expect(instances.length).toBe(1);
      expect(instances[0].id).toBe(newModel.id);

      await newModel.destroy();
    });
  });

  describe("rpc", () => {
    let model: GrouparooModel;
    let RPCMethod: (arg: any) => void | Promise<void>;

    async function makeModel() {
      model = await helper.factories.model({ name: "foo" });
      await helper.sleep(100); // wait for delayed RPC calls
    }

    beforeEach(() => (RPCMethod = api.rpc.model.invalidateCache));

    afterEach(async () => {
      api.rpc.model.invalidateCache = RPCMethod;
      await model.destroy().catch(() => null);
    });

    test("creating a model signals RPC", async () => {
      ModelsCache.expires = Date.now();
      await makeModel();
      expect(ModelsCache.expires).toBe(0);
    });

    test("remote methods are called", async () => {
      const mock = jest.fn();
      api.rpc.model.invalidateCache = mock;
      await makeModel();
      expect(mock).toHaveBeenCalled();
    });

    test("updating a model signals RPC", async () => {
      await makeModel();
      ModelsCache.expires = Date.now();
      await model.update({ name: "new name" });
      expect(ModelsCache.expires).toBe(0);
    });

    test("destroying a model signals RPC", async () => {
      await makeModel();
      ModelsCache.expires = Date.now();
      await model.destroy();
      expect(ModelsCache.expires).toBe(0);
    });
  });

  describe("#findOneWithCache", () => {
    let model: GrouparooModel;

    beforeAll(async () => {
      model = await helper.factories.model({ name: "food" });
      expect(ModelsCache.expires).toEqual(0);
    });

    beforeEach(async () => {
      await helper.sleep(1000); // wait for any pub/sub to complete
      ModelsCache.expires = 0;
      await ModelsCache.findAllWithCache();
    });

    test("after an model is updated, the local cache should be invalid", async () => {
      ModelsCache.expires = Date.now() + 1000 * 30;
      await model.update({ name: "NEW NAME" });
      expect(ModelsCache.expires).toEqual(0);
    });

    test("it will find by id by default", async () => {
      const found = await ModelsCache.findOneWithCache(model.id);
      expect(found.id).toBe(model.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("it will avoid using SQL when a cached model exists", async () => {
      const cachedModel = ModelsCache.instances.find((a) => a.id === model.id);
      (cachedModel as any).__isCached = true;
      const found = await ModelsCache.findOneWithCache(model.id);
      expect((cachedModel as any).__isCached).toBe(true);
      expect(found.id).toBe(model.id);
      expect(found.name).toBe("NEW NAME");
      expect(ModelsCache.expires).toBeGreaterThan(0);
    });

    test("it can find by other keys", async () => {
      const found = await ModelsCache.findOneWithCache(
        "NEW NAME",
        undefined,
        undefined,
        "name"
      );
      expect(found.id).toBe(model.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("a cache miss with a secondary find will invalidate the cache", async () => {
      ModelsCache.instances = [
        await helper.factories.model({ name: "other model" }),
      ];
      ModelsCache.expires = Date.now() + 1000 * 30;
      const found = await ModelsCache.findOneWithCache(model.id);
      expect(found.id).toEqual(model.id);
      expect(ModelsCache.expires).toBe(0);
    });

    test("a cache miss without a secondary find will not invalidate the cache", async () => {
      ModelsCache.expires = Date.now() + 1000 * 30;
      const found = await ModelsCache.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(ModelsCache.expires).not.toBe(0);
    });
  });
});
