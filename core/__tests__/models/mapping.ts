import { helper } from "@grouparoo/spec-helper";
import { Mapping, App, Source, Property, GrouparooModel } from "../../src";

describe("models/mapping", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("mappingHelper", () => {
    let model: GrouparooModel;
    let app: App;
    let source: Source;
    beforeAll(async () => {
      app = await helper.factories.app();
      ({ model } = await helper.factories.properties());

      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "users" });
    });

    afterAll(async () => {
      await Source.truncate({ restartIdentity: true, cascade: true });
      await Property.truncate({ restartIdentity: true, cascade: true });
      await App.truncate({ restartIdentity: true, cascade: true });
    });

    test("a source can have a mapping set", async () => {
      await source.setMapping({ id: "userId" });
      const mapping = await source.getMapping();
      expect(mapping).toEqual({ id: "userId" });
    });

    test("it will memoize mappings as they are set", async () => {
      await source.setMapping({ accountId: "userId" });
      expect(source.mappings.length).toBe(1);
      expect(source.mappings[0].remoteKey).toBe("accountId");
    });

    test("it will use memoized mappings if they exist", async () => {
      const userId = await Property.findOne({ where: { key: "userId" } });
      await source.setMapping({ id: "userId" });

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
        source.setMapping({ email: "userId", accountId: "userId" })
      ).rejects.toThrow(/Validation error/);
    });

    test("a source cannot have 2 mappings with the same recordId", async () => {
      const userId = await Property.findOne({ where: { key: "userId" } });

      await source.setMapping({ accountId: "userId" });
      await expect(
        Mapping.create({
          ownerId: source.id,
          ownerType: "source",
          propertyId: userId.id,
          remoteKey: "bar",
        })
      ).rejects.toThrow(/Validation error/);
    });

    test("a source cannot be mapped to a property of another model", async () => {
      const model = await GrouparooModel.create({
        name: "admin_users",
        type: "profile",
      });
      const otherSource = await helper.factories.source(null, {
        modelId: model.id,
      });
      await expect(otherSource.setMapping({ id: "userId" })).rejects.toThrow(
        /cannot map/
      );
    });
  });

  describe("Mapping's uniqueIdentifier", () => {
    let app: App;
    let source: Source;
    let property: Property;
    let propertyKey = "userId";
    let remoteKey = "id";

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

    it("should not allow a duplicate with the same combinations of ownerId, ownerType, and remoteKey", async () => {
      const mapping = await Mapping.create({
        ownerId: source.id,
        ownerType: "foo",
        propertyId: 1,
        remoteKey: propertyKey,
      });

      await expect(
        Mapping.create({
          ownerId: source.id,
          ownerType: "foo",
          propertyId: 1,
          remoteKey: propertyKey,
        })
      ).rejects.toThrow(/is already in use in table Mapping/);

      await mapping.destroy();
    });
  });
});
