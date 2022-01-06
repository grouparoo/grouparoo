import { helper } from "@grouparoo/spec-helper";
import { Property, Source } from "../../../src";
import { CachedProperties } from "../../../src/models/Property";

describe("models/property", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let source: Source;
  let originalPropertyCount: number;

  beforeAll(async () => {
    await helper.factories.properties();
    source = await Source.findOne({ where: { state: "ready" } });

    const deletedProperty = await helper.factories.property(
      source,
      { key: "deletedProp" },
      { column: "col" }
    );
    await deletedProperty.update({ state: "deleted" });

    originalPropertyCount = await Property.scope(null).count({
      where: { state: ["ready", "deleted"] },
    });
  });

  describe("#findAllWithCache", () => {
    test("it returns all the instances", async () => {
      const instances = await Property.findAllWithCache();
      expect(instances.length).toBe(originalPropertyCount);
    });

    test("it only includes ready and deleted properties", async () => {
      const property = await Property.create({
        type: "string",
        sourceId: source.id,
      });
      expect(property.state).toBe("draft");

      const instances = await Property.findAllWithCache();
      expect(instances.length).toBe(originalPropertyCount);

      await property.destroy();
    });

    describe("rpc", () => {
      let property: Property;

      async function makeProperty() {
        property = await helper.factories.property(
          source,
          {},
          { column: "foo" }
        );
        await helper.sleep(100); // wait for delayed RPC calls
      }

      afterEach(async () => {
        try {
          await property.destroy();
        } catch {}
      });

      test("creating a property signals RPC", async () => {
        CachedProperties.expires = new Date().getTime();
        await makeProperty();
        await helper.sleep(10);
        expect(CachedProperties.expires).toBe(0);
      });

      test("updating a property signals RPC", async () => {
        await makeProperty();
        CachedProperties.expires = new Date().getTime();
        await property.update({ key: "new key" });
        await helper.sleep(10);
        expect(CachedProperties.expires).toBe(0);
      });

      test("calling setOptions signals RPC", async () => {
        await makeProperty();
        CachedProperties.expires = new Date().getTime();
        await property.setOptions({ column: "test other column" });
        await helper.sleep(10);
        expect(CachedProperties.expires).toBe(0);
      });

      test("calling setFilter signals RPC", async () => {
        await makeProperty();
        CachedProperties.expires = new Date().getTime();
        await property.setFilters([{ op: "gt", match: 1, key: "id" }]);
        await helper.sleep(10);
        expect(CachedProperties.expires).toBe(0);
      });

      test("destroying a property signals RPC", async () => {
        await makeProperty();
        CachedProperties.expires = new Date().getTime();
        await property.destroy();
        await helper.sleep(10);
        expect(CachedProperties.expires).toBe(0);
      });
    });
  });

  describe("#findOneWithCache", () => {
    let emailProperty: Property;

    beforeAll(async () => {
      emailProperty = await Property.findOne({ where: { key: "email" } });
    });

    test("it will find by id by default", async () => {
      const found = await Property.findOneWithCache(emailProperty.id);
      expect(found.key).toBe("email");
    });

    test("it can find by other keys", async () => {
      const found = await Property.findOneWithCache("email", "key");
      expect(found.key).toBe("email");
    });

    test("a cache miss will invalidate the cache", async () => {
      CachedProperties.expires = new Date().getTime();
      const found = await Property.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(CachedProperties.expires).toBe(0);
    });
  });
});
