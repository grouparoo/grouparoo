import { helper } from "@grouparoo/spec-helper";
import { Property, Source } from "../../../src";
import { CachedProperties } from "../../../src/models/Property";

describe("models/property", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let source: Source;
  let originalPropertyCount: number;

  beforeEach(() => (CachedProperties.expires = new Date().getTime() + 5000));
  afterAll(() => (CachedProperties.expires = 0));

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
    let firstNameProperty: Property;

    beforeAll(async () => {
      firstNameProperty = await Property.findOne({
        where: { key: "firstName" },
      });
      await firstNameProperty.update({ key: "FIRST NAME" });
    });

    test("after a Property is updated, the local cache should be invalid", async () => {
      expect(CachedProperties.expires).toBeGreaterThan(0);
      const lastNameProperty = await Property.findOne({
        where: { key: "lastName" },
      });
      await lastNameProperty.update({ key: "LAST NAME" });
      expect(CachedProperties.expires).toEqual(0);
    });

    test("it will find by id by default", async () => {
      const found = await Property.findOneWithCache(firstNameProperty.id);
      expect(found.id).toBe("firstName");
      expect(found.key).toBe("FIRST NAME");
    });

    test("it will avoid using SQL when a cached property exists", async () => {
      const cachedEmail = CachedProperties.properties.find(
        (p) => p.id === firstNameProperty.id
      );
      // @ts-ignore
      cachedEmail.__isCached = true;
      const found = await Property.findOneWithCache(firstNameProperty.id);
      expect(found.id).toBe("firstName");
      expect(found.key).toBe("FIRST NAME");
      // @ts-ignore
      expect(found.__isCached).toBe(true);
    });

    test("it can find by other keys", async () => {
      const found = await Property.findOneWithCache("FIRST NAME", null, "key");
      expect(found.id).toBe("firstName");
      expect(found.key).toBe("FIRST NAME");
    });

    test("a cache miss will invalidate the cache", async () => {
      CachedProperties.expires = new Date().getTime();
      const found = await Property.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(CachedProperties.expires).toBe(0);
    });
  });
});
