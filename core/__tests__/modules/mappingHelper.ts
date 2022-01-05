import { helper } from "@grouparoo/spec-helper";
import { App } from "../../src/models/App";
import { Property } from "../../src/models/Property";
import { Source } from "../../src/models/Source";
import { Mapping } from "../../src/models/Mapping";
import { MappingHelper } from "../../src/modules/mappingHelper";

describe("module/MappingHelper", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let app: App;
  let source: Source;
  let property: Property;

  let propertyKey: string = "userId";
  let remoteKey: string = "id";

  beforeAll(async () => {
    app = await helper.factories.app();
    source = await helper.factories.source(app);
    await source.setOptions({ table: "test-table" });
    await source.bootstrapUniqueProperty({
      key: propertyKey,
      type: "integer",
      mappedColumn: remoteKey,
    });
    await source.setMapping({ [remoteKey]: propertyKey });
    await source.update({ state: "ready" });
    property = await Property.findOne();
  });

  describe("getMapping()", () => {
    test("returns a mapping using the property's key by default", async () => {
      const mapping = await MappingHelper.getMapping(source);

      expect(property.key).toEqual(propertyKey);
      expect(mapping).toEqual({ [remoteKey]: property.key });
    });

    test("will optionally return the property's id as the value", async () => {
      const mapping = await MappingHelper.getMapping(source, "id");

      expect(property.id).not.toEqual(propertyKey);
      expect(mapping).toEqual({ [remoteKey]: property.id });
    });

    test("mapping owners are referenced by the instance type", async () => {
      const userId = await Property.findOne({ where: { key: "userId" } });
      await source.setMapping({});

      const randomMapping = await Mapping.create({
        ownerId: source.id,
        ownerType: "foo",
        propertyId: userId.id,
        remoteKey: "user_id",
      });

      await source.setMapping({
        ["newValue"]: userId.key,
      });

      expect((await randomMapping.reload()).remoteKey).toEqual("user_id");

      expect(await source.getMapping()).toEqual({
        ["newValue"]: userId.key,
      });
      await source.setOptions({});

      expect((await randomMapping.reload()).remoteKey).toEqual("user_id");

      await randomMapping.destroy();
    });
  });

  describe("getConfigMapping()", () => {
    beforeAll(
      async () => await source.setMapping({ [remoteKey]: propertyKey })
    );

    test("returns a mapping built for a config object", async () => {
      const mapping = await MappingHelper.getConfigMapping(source);
      expect(property.getConfigId()).not.toEqual(propertyKey);
      expect(mapping).toEqual({ [remoteKey]: property.getConfigId() });
    });
  });
});
