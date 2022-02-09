import { helper } from "@grouparoo/spec-helper";
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
      const draftApp = await helper.factories.app({ state: "draft" });
      expect(draftApp.state).toBe("draft");

      const instances = await AppsCache.findAllWithCache(undefined, "draft");

      expect(instances.length).toBe(1);
      expect(instances[0].id).toBe(draftApp.id);

      await draftApp.destroy();
    });

    describe("rpc", () => {
      let app: App;

      async function makeApp() {
        app = await helper.factories.app();
        await helper.sleep(100); // wait for delayed RPC calls
      }

      afterEach(async () => {
        try {
          await app.destroy();
        } catch {}
      });

      test("creating an app signals RPC", async () => {
        AppsCache.expires = new Date().getTime();
        await makeApp();
        await helper.sleep(10);
        expect(AppsCache.expires).toBe(0);
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
      // @ts-ignore
      cachedApp.__isCached = true;
      const found = await AppsCache.findOneWithCache(app.id);
      // @ts-ignore
      expect(found.__isCached).toBe(true);
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

    test("a cache miss will invalidate the cache", async () => {
      AppsCache.expires = new Date().getTime();
      const found = await AppsCache.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(AppsCache.expires).toBe(0);
    });
  });
});
