import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { Source } from "../../../src";
import { SourcesCache } from "../../../src/modules/caches/sourcesCache";

describe("models/sourcesCache", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(() => (SourcesCache.TTL = 30 * 1000));
  afterAll(() => (SourcesCache.expires = 0));

  beforeAll(async () => {
    await helper.factories.properties();

    const deletedSource = await helper.factories.source();
    await deletedSource.update({ state: "deleted" });
  });

  describe("#findAllWithCache", () => {
    test("it returns all the instances", async () => {
      const instances = await SourcesCache.findAllWithCache();
      expect(instances.length).toBe(2);
    });

    test("it can filter to state", async () => {
      const source = await helper.factories.source();
      expect(source.state).toBe("draft");

      const instances = await SourcesCache.findAllWithCache(undefined, "draft");

      expect(instances.length).toBe(1);
      expect(instances[0].id).toBe(source.id);

      await source.destroy();
    });
  });

  describe("rpc", () => {
    let source: Source;
    let RPCMethod: (arg: any) => void | Promise<void>;

    async function makeSource() {
      source = await helper.factories.source();
      await helper.sleep(100); // wait for delayed RPC calls
    }

    beforeEach(() => (RPCMethod = api.rpc.source.invalidateCache));

    afterEach(async () => {
      api.rpc.source.invalidateCache = RPCMethod;
      await source.destroy().catch(() => null);
    });

    test("creating a source signals RPC", async () => {
      SourcesCache.expires = new Date().getTime();
      await makeSource();
      expect(SourcesCache.expires).toBe(0);
    });

    test("remote methods are called", async () => {
      const mock = jest.fn();
      api.rpc.source.invalidateCache = mock;
      await makeSource();
      expect(mock).toHaveBeenCalled();
    });

    test("updating a source signals RPC", async () => {
      await makeSource();
      SourcesCache.expires = new Date().getTime();
      await source.update({ name: "new name" });
      expect(SourcesCache.expires).toBe(0);
    });

    test("calling setOptions signals RPC", async () => {
      await makeSource();
      SourcesCache.expires = new Date().getTime();
      await source.setOptions({ table: "foo" });
      expect(SourcesCache.expires).toBe(0);
    });

    test("calling setMapping signals RPC", async () => {
      await makeSource();
      SourcesCache.expires = new Date().getTime();
      await source.setMapping({ email: "email" });
      expect(SourcesCache.expires).toBe(0);
    });

    test("destroying a source signals RPC", async () => {
      await makeSource();
      SourcesCache.expires = new Date().getTime();
      await source.destroy();
      expect(SourcesCache.expires).toBe(0);
    });
  });

  describe("#findOneWithCache", () => {
    let source: Source;

    beforeAll(async () => {
      source = await helper.factories.source();
      await source.update({ name: "NEW NAME" });
      expect(SourcesCache.expires).toEqual(0);
    });

    test("after a source is updated, the local cache should be invalid", async () => {
      SourcesCache.expires = new Date().getTime() + 1000 * 30;
      await source.update({ key: "LAST NAME" });
      expect(SourcesCache.expires).toEqual(0);
    });

    test("it will find by id by default", async () => {
      const found = await SourcesCache.findOneWithCache(source.id);
      expect(found.id).toBe(source.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("it will avoid using SQL when a cached source exists", async () => {
      const cachedSource = SourcesCache.instances.find(
        (s) => s.id === source.id
      );
      (cachedSource as any).__isCached = true;
      const found = await SourcesCache.findOneWithCache(cachedSource.id);
      expect((found as any).__isCached).toBe(true);
      expect(found.id).toBe(source.id);
      expect(found.name).toBe("NEW NAME");
      expect(SourcesCache.expires).toBeGreaterThan(0);
    });

    test("it can find by other keys", async () => {
      const found = await SourcesCache.findOneWithCache(
        "NEW NAME",
        undefined,
        undefined,
        "name"
      );
      expect(found.id).toBe(source.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("a cache miss with a secondary find will invalidate the cache", async () => {
      SourcesCache.instances = [await helper.factories.source()];
      SourcesCache.expires = new Date().getTime() + 1000 * 30;
      const found = await SourcesCache.findOneWithCache(source.id);
      expect(found.id).toEqual(source.id);
      expect(SourcesCache.expires).toBe(0);
    });

    test("a cache miss without a secondary find will not invalidate the cache", async () => {
      SourcesCache.expires = new Date().getTime() + 1000 * 30;
      const found = await SourcesCache.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(SourcesCache.expires).not.toBe(0);
    });
  });
});
