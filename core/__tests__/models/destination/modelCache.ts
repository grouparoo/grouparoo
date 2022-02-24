import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { Destination } from "../../../src";
import { DestinationsCache } from "../../../src/modules/caches/destinationsCache";

describe("models/destinationsCache", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(() => (DestinationsCache.TTL = 30 * 1000));
  afterAll(() => (DestinationsCache.expires = 0));

  beforeAll(async () => {
    await helper.factories.properties();
    const deletedDestination = await helper.factories.destination();
    await deletedDestination.update({ state: "deleted" });
  });

  describe("#findAllWithCache", () => {
    test("it returns all the instances", async () => {
      const instances = await DestinationsCache.findAllWithCache();
      expect(instances.length).toBe(1);
    });

    test("it can filter to state", async () => {
      const destination = await helper.factories.destination();
      expect(destination.state).toBe("ready");

      const instances = await DestinationsCache.findAllWithCache(
        undefined,
        "ready"
      );

      expect(instances.length).toBe(1);
      expect(instances[0].id).toBe(destination.id);

      await destination.destroy();
    });
  });

  describe("rpc", () => {
    let destination: Destination;
    let RPCMethod: (arg: any) => void | Promise<void>;

    async function makeDestination() {
      destination = await helper.factories.destination();
      await helper.sleep(100); // wait for delayed RPC calls
    }

    beforeEach(() => (RPCMethod = api.rpc.destination.invalidateCache));

    afterEach(async () => {
      api.rpc.destination.invalidateCache = RPCMethod;
      await destination.destroy().catch(() => null);
    });

    test("creating a destination signals RPC", async () => {
      DestinationsCache.expires = Date.now();
      await makeDestination();
      expect(DestinationsCache.expires).toBe(0);
    });

    test("remote methods are called", async () => {
      const mock = jest.fn();
      api.rpc.destination.invalidateCache = mock;
      await makeDestination();
      expect(mock).toHaveBeenCalled();
    });

    test("updating a destination signals RPC", async () => {
      await makeDestination();
      DestinationsCache.expires = Date.now();
      await destination.update({ name: "new name" });
      expect(DestinationsCache.expires).toBe(0);
    });

    test("calling setOptions signals RPC", async () => {
      await makeDestination();
      DestinationsCache.expires = Date.now();
      await destination.setOptions({ table: "foo" });
      expect(DestinationsCache.expires).toBe(0);
    });

    test("calling setMapping signals RPC", async () => {
      await makeDestination();
      DestinationsCache.expires = Date.now();
      await destination.setMapping({ "primary-id": "userId" });
      expect(DestinationsCache.expires).toBe(0);
    });

    test("destroying a destination signals RPC", async () => {
      await makeDestination();
      DestinationsCache.expires = Date.now();
      await destination.destroy();
      expect(DestinationsCache.expires).toBe(0);
    });
  });

  describe("#findOneWithCache", () => {
    let destination: Destination;

    beforeAll(async () => {
      destination = await helper.factories.destination();
      await destination.update({ name: "NEW NAME" });
      expect(DestinationsCache.expires).toEqual(0);
    });

    beforeEach(async () => {
      await helper.sleep(1000); // wait for any pub/sub to complete
      DestinationsCache.expires = 0;
      await DestinationsCache.findAllWithCache();
    });

    test("after a destination is updated, the local cache should be invalid", async () => {
      DestinationsCache.expires = Date.now() + 1000 * 30;
      await destination.update({ name: "ANOTHER NAME" });
      expect(DestinationsCache.expires).toEqual(0);
      await destination.update({ name: "NEW NAME" });
    });

    test("it will find by id by default", async () => {
      const found = await DestinationsCache.findOneWithCache(destination.id);
      expect(found.id).toBe(destination.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("it will avoid using SQL when a cached destination exists", async () => {
      const cachedDestination = DestinationsCache.instances.find(
        (s) => s.id === destination.id
      );
      (cachedDestination as any).__isCached = true;
      const found = await DestinationsCache.findOneWithCache(
        cachedDestination.id
      );
      expect((found as any).__isCached).toBe(true);
      expect(found.id).toBe(destination.id);
      expect(found.name).toBe("NEW NAME");
      expect(DestinationsCache.expires).toBeGreaterThan(0);
    });

    test("it can find by other keys", async () => {
      const found = await DestinationsCache.findOneWithCache(
        "NEW NAME",
        undefined,
        undefined,
        "name"
      );
      expect(found.id).toBe(destination.id);
      expect(found.name).toBe("NEW NAME");
    });

    test("a cache miss with a secondary find will invalidate the cache", async () => {
      DestinationsCache.instances = [await helper.factories.destination()];
      DestinationsCache.expires = Date.now() + 1000 * 30;
      const found = await DestinationsCache.findOneWithCache(destination.id);
      expect(found.id).toEqual(destination.id);
      expect(DestinationsCache.expires).toBe(0);
    });

    test("a cache miss without a secondary find will not invalidate the cache", async () => {
      DestinationsCache.expires = Date.now() + 1000 * 30;
      const found = await DestinationsCache.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(DestinationsCache.expires).not.toBe(0);
    });
  });
});
