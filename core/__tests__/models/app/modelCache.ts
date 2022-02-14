import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { App } from "../../../src";
import { AppsCache } from "../../../src/modules/caches/appsCache";

describe("models/appsCache", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(() => (AppsCache.TTL = 30 * 1000));
  afterAll(() => (AppsCache.expires = 0));

  beforeAll(async () => {
    await helper.factories.properties();

    const deletedApp = await helper.factories.app();
    await deletedApp.update({ state: "deleted" });
  });

  describe("#findAllWithCache", () => {
    test("it returns all the instances", async () => {
      const instances = await AppsCache.findAllWithCache();
      expect(instances.length).toBe(2);
    });

    test("it can filter to state", async () => {
      const draftApp = await helper.factories.app();
      await draftApp.update({ state: "draft" }, { hooks: false });

      const instances = await AppsCache.findAllWithCache(undefined, "draft");

      expect(instances.length).toBe(1);
      expect(instances[0].id).toBe(draftApp.id);

      await draftApp.destroy();
    });
  });

  describe("rpc", () => {
    let app: App;
    let RPCMethod: (arg: any) => void | Promise<void>;

    async function makeApp() {
      app = await helper.factories.app();
      await helper.sleep(100); // wait for delayed RPC calls
    }

    beforeEach(() => (RPCMethod = api.rpc.app.invalidateCache));

    afterEach(async () => {
      api.rpc.app.invalidateCache = RPCMethod;
      await app.destroy().catch(() => null);
    });

    test("creating an app signals RPC", async () => {
      AppsCache.expires = new Date().getTime();
      await makeApp();
      await helper.sleep(10);
      expect(AppsCache.expires).toBe(0);
    });

    test("remote methods are called", async () => {
      const mock = jest.fn();
      api.rpc.app.invalidateCache = mock;
      await makeApp();
      await helper.sleep(10);
      expect(mock).toHaveBeenCalled();
    });

    test("updating an app signals RPC", async () => {
      await makeApp();
      AppsCache.expires = new Date().getTime();
      await app.update({ name: "new name" });
      await helper.sleep(10);
      expect(AppsCache.expires).toBe(0);
    });

    test("calling setOptions signals RPC", async () => {
      await makeApp();
      AppsCache.expires = new Date().getTime();
      await app.setOptions({ fileId: "foo" });
      await helper.sleep(10);
      expect(AppsCache.expires).toBe(0);
    });

    test("destroying an app signals RPC", async () => {
      await makeApp();
      AppsCache.expires = new Date().getTime();
      await app.destroy();
      await helper.sleep(10);
      expect(AppsCache.expires).toBe(0);
    });
  });

  describe("#findOneWithCache", () => {
    let app: App;

    beforeAll(async () => {
      app = await helper.factories.app();
      expect(AppsCache.expires).toEqual(0);
    });

    test("after an app is updated, the local cache should be invalid", async () => {
      AppsCache.expires = new Date().getTime() + 1000 * 30;
      await app.update({ name: "NEW NAME" });
      expect(AppsCache.expires).toEqual(0);
    });

    test("it will find by id by default", async () => {
      const found = await AppsCache.findOneWithCache(app.id);
      expect(found.id).toBe(app.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("it will avoid using SQL when a cached app exists", async () => {
      const cachedApp = AppsCache.instances.find((a) => a.id === app.id);
      (cachedApp as any).__isCached = true;
      const found = await AppsCache.findOneWithCache(app.id);
      expect((cachedApp as any).__isCached).toBe(true);
      expect(found.id).toBe(app.id);
      expect(found.name).toBe("NEW NAME");
      expect(AppsCache.expires).toBeGreaterThan(0);
    });

    test("it can find by other keys", async () => {
      const found = await AppsCache.findOneWithCache(
        "NEW NAME",
        undefined,
        undefined,
        "name"
      );
      expect(found.id).toBe(app.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("a cache miss with a secondary find will invalidate the cache", async () => {
      AppsCache.instances = [await helper.factories.app()];
      AppsCache.expires = new Date().getTime() + 1000 * 30;
      const found = await AppsCache.findOneWithCache(app.id);
      expect(found.id).toEqual(app.id);
      expect(AppsCache.expires).toBe(0);
    });

    test("a cache miss without a secondary find will not invalidate the cache", async () => {
      AppsCache.expires = new Date().getTime() + 1000 * 30;
      const found = await AppsCache.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(AppsCache.expires).not.toBe(0);
    });
  });
});
