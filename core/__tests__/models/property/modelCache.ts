import { helper } from "@grouparoo/spec-helper";
import { Property, Source } from "../../../src";
import { PropertiesCache } from "../../../src/modules/caches/propertiesCache";

describe("models/propertiesCache", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let source: Source;
  let originalPropertyCount: number;

  beforeEach(() => (PropertiesCache.TTL = 30 * 1000));
  afterAll(() => (PropertiesCache.expires = 0));

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
      const instances = await PropertiesCache.findAllWithCache();
      expect(instances.length).toBe(originalPropertyCount);
    });

    test("it can filter to state", async () => {
      const property = await Property.create({
        type: "string",
        sourceId: source.id,
      });
      expect(property.state).toBe("draft");

      const instances = await PropertiesCache.findAllWithCache(
        undefined,
        "draft"
      );

      expect(instances.length).toBe(1);
      expect(instances[0].id).toBe(property.id);

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
        PropertiesCache.expires = new Date().getTime();
        await makeProperty();
        await helper.sleep(10);
        expect(PropertiesCache.expires).toBe(0);
      });

      test("updating a property signals RPC", async () => {
        await makeProperty();
        PropertiesCache.expires = new Date().getTime();
        await property.update({ key: "new key" });
        await helper.sleep(10);
        expect(PropertiesCache.expires).toBe(0);
      });

      test("calling setOptions signals RPC", async () => {
        await makeProperty();
        PropertiesCache.expires = new Date().getTime();
        await property.setOptions({ column: "test other column" });
        await helper.sleep(10);
        expect(PropertiesCache.expires).toBe(0);
      });

      test("calling setFilter signals RPC", async () => {
        await makeProperty();
        PropertiesCache.expires = new Date().getTime();
        await property.setFilters([{ op: "gt", match: 1, key: "id" }]);
        await helper.sleep(10);
        expect(PropertiesCache.expires).toBe(0);
      });

      test("destroying a property signals RPC", async () => {
        await makeProperty();
        PropertiesCache.expires = new Date().getTime();
        await property.destroy();
        await helper.sleep(10);
        expect(PropertiesCache.expires).toBe(0);
      });
    });
  });

  describe("#findOneWithCache", () => {
    let firstNameProperty: Property;

    beforeAll(async () => {
      firstNameProperty = await Property.findOne({
        where: { id: "firstName" },
      });
      await firstNameProperty.update({ key: "FIRST NAME" });
      expect(PropertiesCache.expires).toEqual(0);
    });

    test("after a Property is updated, the local cache should be invalid", async () => {
      PropertiesCache.expires = new Date().getTime() + 1000 * 30;
      const lastNameProperty = await Property.findOne({
        where: { key: "lastName" },
      });
      await lastNameProperty.update({ key: "LAST NAME" });
      expect(PropertiesCache.expires).toEqual(0);
    });

    test("it will find by id by default", async () => {
      const found = await PropertiesCache.findOneWithCache(
        firstNameProperty.id
      );
      expect(found.id).toBe("firstName");
      expect(found.key).toBe("FIRST NAME");
    });

    test("it will avoid using SQL when a cached property exists", async () => {
      const cachedFirstName = PropertiesCache.instances.find(
        (p) => p.id === firstNameProperty.id
      );
      // @ts-ignore
      cachedFirstName.__isCached = true;
      const found = await PropertiesCache.findOneWithCache(
        firstNameProperty.id
      );
      // @ts-ignore
      expect(found.__isCached).toBe(true);
      expect(found.id).toBe("firstName");
      expect(found.key).toBe("FIRST NAME");
      expect(PropertiesCache.expires).toBeGreaterThan(0);
    });

    test("it can find by other keys", async () => {
      const found = await PropertiesCache.findOneWithCache(
        "FIRST NAME",
        undefined,
        undefined,
        "key"
      );
      expect(found.id).toBe("firstName");
      expect(found.key).toBe("FIRST NAME");
    });

    test("a cache miss with a secondary find will invalidate the cache", async () => {
      PropertiesCache.instances = [
        await helper.factories.property(
          source,
          { key: "random" },
          { column: "foo" }
        ),
      ];
      PropertiesCache.expires = new Date().getTime() + 1000 * 30;
      const found = await PropertiesCache.findOneWithCache(
        firstNameProperty.id
      );
      expect(found.id).toEqual(firstNameProperty.id);
      expect(PropertiesCache.expires).toBe(0);
    });

    test("a cache miss without a secondary find will not invalidate the cache", async () => {
      PropertiesCache.expires = new Date().getTime() + 1000 * 30;
      const found = await PropertiesCache.findOneWithCache("missing");
      expect(found).toBeNull();
      expect(PropertiesCache.expires).not.toBe(0);
    });
  });
});
