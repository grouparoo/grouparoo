import { helper } from "@grouparoo/spec-helper";
import { Mapping, App, Source, Property } from "../../src";

describe("models/mapping", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let app: App;
  let source: Source;

  describe("mappingHelper", () => {
    beforeAll(async () => {
      app = await helper.factories.app();
      await helper.factories.properties();

      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
      });
      await source.setOptions({ table: "test table" });
    });

    test("a source can have a mapping set", async () => {
      await source.setMapping({ id: "userId" });
      const mapping = await source.getMapping();
      expect(mapping).toEqual({ id: "userId" });
    });

    test("it will memoize mappings as they are set", async () => {
      await source.setMapping({ foo: "userId" });
      expect(source.mappings.length).toBe(1);
      expect(source.mappings[0].remoteKey).toBe("foo");
    });

    test("it will use memoized mappings if they exist", async () => {
      const userId = await Property.findOne({ where: { key: "userId" } });
      await source.setMapping({ foo: "userId" });

      source.mappings = [
        Mapping.build({
          ownerId: source.id,
          ownerType: "source",
          propertyId: userId.id,
          remoteKey: "bla",
        }),
      ];
      const mappings = await source.getMapping();
      expect(mappings["bla"]).toBe(userId.key);
    });

    test("a source cannot have 2 mappings with the same remoteKey", async () => {
      await expect(
        source.setMapping({ foo: "userId", bar: "userId" })
      ).rejects.toThrow(/There is already a Mapping for/);
    });

    test("a source cannot have 2 mappings with the same recordId", async () => {
      const userId = await Property.findOne({ where: { key: "userId" } });

      await source.setMapping({ foo: "userId" });
      await expect(
        Mapping.create({
          ownerId: source.id,
          ownerType: "source",
          propertyId: userId.id,
          remoteKey: "bar",
        })
      ).rejects.toThrow(/There is already a Mapping for/);
    });
  });
});
