import { helper } from "@grouparoo/spec-helper";
import { App } from "../../src/models/App";
import { Property } from "../../src/models/Property";
import { Source } from "../../src/models/Source";
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
    await source.bootstrapUniqueProperty(propertyKey, "integer", remoteKey);
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
  });

  describe("getConfigMapping()", () => {
    test("returns a mapping built for a config object", async () => {
      const mapping = await MappingHelper.getConfigMapping(source);
      expect(property.getConfigId()).not.toEqual(propertyKey);
      expect(mapping).toEqual({ [remoteKey]: property.getConfigId() });
    });
  });
});
