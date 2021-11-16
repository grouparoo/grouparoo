import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { Op } from "sequelize";
import {
  App,
  Destination,
  GrouparooModel,
  GrouparooRecord,
  Log,
  Option,
  Property,
  RecordProperty,
  Schedule,
  Source,
  SourceMapping,
} from "../../../src";
import { SourceOps } from "../../../src/modules/ops/source";

describe("models/source", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;
  let app: App;

  beforeAll(async () => {
    app = await helper.factories.app();
    ({ model } = await helper.factories.properties());
  });

  describe("plugin connections", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("creating a source creates a log entry", async () => {
      const log = await Log.findOne({
        where: { topic: "source", verb: "create", ownerId: source.id },
      });
      expect(log.message).toBe(`source "${source.name}" created`);
    });

    test("scheduleAvailable", async () => {
      expect(await source.scheduleAvailable()).toBe(true);
    });

    test("previewAvailable", async () => {
      expect(await source.previewAvailable()).toBe(true);
    });
  });

  describe("validations", () => {
    test("the app must be in the ready state", async () => {
      const app = await App.create({
        type: "test-plugin-app",
      });

      await expect(
        Source.create({
          type: "test-plugin-import",
          name: "test source",
          appId: app.id,
          modelId: model.id,
        })
      ).rejects.toThrow(/app .* not ready/);

      await app.destroy();
    });

    test("a source requires a plugin connection", async () => {
      await expect(
        Source.create({
          type: "missing-source",
          name: "test source",
          appId: app.id,
          modelId: model.id,
        })
      ).rejects.toThrow(
        /Cannot find a \"missing-source\" connection available within the installed plugins. Current connections installed are:/
      );
    });

    test("sources require a valid modelId", async () => {
      expect(
        Source.create({
          type: "test-plugin-import",
          name: "test source",
          appId: app.id,
          modelId: "foo",
        })
      ).rejects.toThrow(/cannot find model with id "foo"/);
    });

    test("sources cannot change models", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await expect(source.update({ modelId: "foo" })).rejects.toThrow(
        /cannot change models/
      );

      await source.destroy();
    });

    test("a new source will have a '' name", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });

      expect(source.name).toBe("");

      await source.destroy();
    });

    test("draft sources can share the same name, but not with ready sources", async () => {
      const sourceOne = await Source.create({
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });
      const sourceTwo = await Source.create({
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });

      expect(sourceOne.name).toBe("");
      expect(sourceTwo.name).toBe("");

      await sourceOne.update({ name: "name" });
      await sourceOne.setOptions({ table: "abc123" });
      await sourceOne.setMapping({ id: "userId" });
      await sourceOne.update({ state: "ready" });

      await expect(sourceTwo.update({ name: "name" })).rejects.toThrow(
        /name "name" is already in use/
      );

      await sourceOne.destroy();
      await sourceTwo.destroy();
    });

    test("deleted sources can share the same name, but not with ready sources", async () => {
      const sourceOne = await Source.create({
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });
      const sourceTwo = await Source.create({
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });
      const sourceThree = await Source.create({
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });

      expect(sourceOne.name).toBe("");
      expect(sourceTwo.name).toBe("");
      expect(sourceThree.name).toBe("");

      await sourceTwo.update({ name: "asdf-deleted" });
      await sourceTwo.setOptions({ table: "abc123" });
      await sourceTwo.setMapping({ id: "userId" });
      await sourceTwo.update({ state: "deleted" });

      await sourceThree.update({ name: "asdf-deleted" });
      await sourceThree.setOptions({ table: "abc123" });
      await sourceThree.setMapping({ id: "userId" });
      await sourceThree.update({ state: "deleted" });

      await sourceOne.update({ name: "asdf" });
      await sourceOne.setOptions({ table: "abc123" });
      await sourceOne.setMapping({ id: "userId" });
      await sourceOne.update({ state: "ready" });

      await expect(sourceTwo.update({ name: "asdf" })).rejects.toThrow(
        /name "asdf" is already in use/
      );

      await sourceOne.update({ name: "asdf-deleted" });

      await sourceOne.destroy();
      await sourceTwo.destroy();
      await sourceThree.destroy();
    });

    test("a source cannot be changed to to the ready state if there are missing required options", async () => {
      const source = await helper.factories.source();
      await expect(source.update({ state: "ready" })).rejects.toThrow(
        /table is required/
      );
      await source.destroy();
    });

    test("a source cannot be changed to to the ready state if there is not mapping", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "abc" });
      await expect(source.update({ state: "ready" })).rejects.toThrow(
        /mapping not set/
      );
      await source.destroy();
    });

    test("a source that is ready cannot move back to draft", async () => {
      const source = await helper.factories.source();
      await source.setOptions({ table: "abc" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
      await expect(source.update({ state: "draft" })).rejects.toThrow(
        /cannot transition source state from ready to draft/
      );
      await source.destroy();
    });

    test("a source cannot be created in the ready state with missing required options", async () => {
      const source = Source.build({
        appId: app.id,
        name: "no opts",
        type: "test-plugin-import",
        state: "ready",
        modelId: model.id,
      });

      await expect(source.save()).rejects.toThrow(
        /table is required for a source of type test-plugin-import/
      );
    });

    test("a source with a schedule cannot be deleted", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const schedule = await helper.factories.schedule(source);
      await expect(source.destroy()).rejects.toThrow(
        /cannot delete a source that has a schedule/
      );

      await schedule.destroy();
      await source.destroy();
    });

    test("a source with a property cannot be deleted", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const property = await Property.create({
        key: "thing",
        type: "string",
        sourceId: source.id,
      });

      await expect(source.destroy()).rejects.toThrow(
        /cannot delete a source that has a property/
      );

      await property.destroy();
      await source.destroy();
    });

    describe("primary key validations", () => {
      let model: GrouparooModel;

      beforeAll(async () => {
        model = await helper.factories.model({
          name: "PrimaryKey_Profiles",
        });
      });

      afterAll(async () => {
        await model.destroy();
      });

      test("a source with a primary key property that's being used cannot be deleted", async () => {
        const source = await helper.factories.source(app, {
          modelId: model.id,
        });
        await source.bootstrapUniqueProperty("myUserId", "integer", "id");
        await source.setOptions({ table: "some table" });
        await source.setMapping({ id: "myUserId" });
        await source.update({ state: "ready" });

        const destination: Destination = await helper.factories.destination(
          app,
          {
            modelId: model.id,
          }
        );
        await destination.setMapping({ "primary-id": "myUserId" });

        await expect(source.destroy()).rejects.toThrow(
          /cannot delete property/
        );

        await destination.destroy();
        await source.destroy();
      });

      test("deleting a source deleted its primary key property", async () => {
        const source = await helper.factories.source(app, {
          modelId: model.id,
        });
        await source.bootstrapUniqueProperty("myUserId", "integer", "id");
        await source.setOptions({ table: "some table" });
        await source.setMapping({ id: "myUserId" });
        await source.update({ state: "ready" });

        await source.destroy();
        const primaryKeyPropertyCount = await Property.count({
          where: { sourceId: source.id, isPrimaryKey: true },
        });
        expect(primaryKeyPropertyCount).toBe(0);
      });
    });

    test("__options only includes options for sources", async () => {
      const source = await Source.create({
        id: "mySourceId",
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await Option.create({
        ownerId: source.id,
        ownerType: "source",
        key: "table",
        value: "users",
        type: "string",
      });

      await Option.create({
        ownerId: source.id,
        ownerType: "app",
        key: "someOtherProperty",
        value: "someValue",
        type: "string",
      });

      const options = await source.$get("__options");
      expect(options.length).toBe(1);
      expect(options[0].ownerType).toBe("source");
      expect(options[0].key).toBe("table");

      await source.destroy();
    });

    test("options can be set and retrieved", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await source.setOptions({
        table: "users",
      });
      const options = await source.getOptions();
      expect(options).toEqual({
        table: "users",
      });

      await source.destroy();
    });

    test("providing invalid options will result in an error", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await expect(source.setOptions({ notThing: "abc" })).rejects.toThrow(
        /table is required for a source of type test-plugin-import/
      );

      await expect(
        source.setOptions({
          table: "abc",
          otherThing: "false",
        })
      ).rejects.toThrow(
        /otherThing is not an option for a test-plugin-import source/
      );

      await source.destroy();
    });

    test("deleting a source deleted the options", async () => {
      const model: GrouparooModel = await helper.factories.model({
        name: "Users",
      });

      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await source.setOptions({ table: "abc" });

      await source.destroy(); // doesn't throw

      const optionsCount = await Option.count({
        where: { ownerId: source.id },
      });
      expect(optionsCount).toBe(0);
    });

    test("deleting a schedule does not delete options for other models with the same id", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await source.setOptions({ table: "abc" });

      const foreignOption = await Option.create({
        ownerId: source.id,
        ownerType: "other",
        key: "someKey",
        value: "someValue",
        type: "string",
      });

      let count = await Option.count({
        where: { ownerId: source.id },
      });
      expect(count).toBe(2);

      await source.destroy();
      const options = await Option.findAll({
        where: { ownerId: source.id },
      });
      expect(options.length).toBe(1);
      expect(options[0].ownerType).toBe("other");
      expect(options[0].key).toBe("someKey");

      await foreignOption.destroy();
    });
  });

  describe("options from environment variables", () => {
    beforeAll(() => {
      process.env.GROUPAROO_OPTION__SOURCE__TEST_OPTION = "abc123";
    });

    test("options can be set from an environment variable but not stored in the database", async () => {
      const source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await source.setOptions({ table: "TEST_OPTION" });
      const options = await source.getOptions();
      expect(options.table).toBe("abc123");

      const option = await Option.findOne({
        where: { ownerId: source.id },
      });
      expect(option.value).toBe("TEST_OPTION");

      await source.destroy();
    });

    afterAll(() => {
      process.env.GROUPAROO_OPTION__SOURCE__TEST_OPTION = undefined;
    });
  });

  describe("sourcePreview", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("a source with no options will get an empty array", async () => {
      const preview = await source.sourcePreview();
      expect(preview).toEqual([]);
    });

    test("when options are set, the preview will return data", async () => {
      await source.setOptions({ table: "users" });
      const preview = await source.sourcePreview();
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
    });

    test("preview can be run with arbitrary options", async () => {
      const preview = await source.sourcePreview({ table: "something else" });
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
    });
  });

  describe("sourceConnectionOptions", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("a source can return the options from the plugin", async () => {
      const connectionOptions = await source.sourceConnectionOptions();
      expect(connectionOptions).toEqual({
        table: { options: ["users"], type: "list" },
      });
    });

    test("partial options will be passed to sourceConnectionOptions", async () => {
      const connectionOptions = await source.sourceConnectionOptions({
        options: "true",
      });
      expect(connectionOptions).toEqual({
        table: { options: ["users"], type: "list" },
        receivedOptions: { type: "text", options: ["true"] },
      });
    });

    test("a plugin with a records method can have a schedule", async () => {
      const scheduleAvailable = await source.scheduleAvailable();
      expect(scheduleAvailable).toBe(true);
    });
  });

  describe("mapping", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("mappings must map to properties", async () => {
      await source.setMapping({ local_user_id: "userId" });
      const mapping = await source.getMapping();
      expect(mapping).toEqual({
        local_user_id: "userId",
      });
    });

    test("it throws an error if the mapping does not include the key of a recordPropertyRyle", async () => {
      await expect(
        source.setMapping({
          local_user_id: "TheUserID",
        })
      ).rejects.toThrow(/cannot find property TheUserID/);
    });

    test("array properties cannot be used for mappings", async () => {
      const firstSource = await Source.findOne({
        where: { id: { [Op.ne]: source.id } },
      });
      const arrayProperty: Property = await helper.factories.property(
        firstSource,
        { key: "things", isArray: true },
        { column: "things" }
      );

      await expect(
        source.setMapping({ local_user_id: arrayProperty.key })
      ).rejects.toThrow(/Sources cannot map to an array Property/);

      await arrayProperty.destroy();
    });

    test("isPrimaryKey will not be updated for source properties after setting the mapping", async () => {
      const firstSource = await Source.findOne({
        where: { id: { [Op.ne]: source.id } },
      });

      const mapping = await firstSource.getMapping();
      expect(mapping).toEqual({ userId: "userId" });

      const userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });
      expect(userIdProperty.isPrimaryKey).toBe(true);

      const emailProperty = await Property.findOne({
        where: { key: "email" },
      });
      expect(emailProperty.isPrimaryKey).toBe(false);

      await firstSource.setMapping({ email: "email" });

      await userIdProperty.reload();
      expect(userIdProperty.isPrimaryKey).toBe(true);

      await emailProperty.reload();
      expect(emailProperty.isPrimaryKey).toBe(false);

      await firstSource.setMapping({ myUserId: "userId" });
    });
  });

  describe("defaultPropertyOptions", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "some table" });
      await source.setMapping({ local_user_id: "userId" });
      await source.update({ state: "ready" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("ready source shows default property options", async () => {
      const results = await SourceOps.defaultPropertyOptions(source);
      expect(results).toEqual([
        {
          description: "the column to choose",
          displayName: undefined,
          key: "column",
          options: [
            { examples: [1, 2, 3], key: "id" },
            { examples: ["mario", "luigi", "peach"], key: "fname" },
            { examples: ["mario", "mario", "toadstool"], key: "lname" },
          ],
          required: true,
          type: "list",
        },
        {
          description: "how things are combined",
          displayName: undefined,
          key: "aggregationMethod",
          options: [
            { default: true, key: "exact" },
            { key: "count" },
            { key: "min" },
            { key: "max" },
          ],
          required: false,
          type: "list",
        },
      ]);
    });
  });

  describe("bootstrapUniqueProperty", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "some table" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("it can remove identifying from other properties", async () => {
      const property = await Property.findOne({
        where: { identifying: true },
      });
      property.identifying = false;
      await property.save();
    });

    test("bootstrapUniqueProperty will create a new identifying property", async () => {
      const property = await source.bootstrapUniqueProperty(
        "uniqueId",
        "integer",
        "id"
      );

      expect(property.key).toBe("uniqueId");
      expect(property.type).toBe("integer");
      expect(property.isArray).toBe(false);
      expect(property.identifying).toBe(true);
      expect(property.state).toBe("ready");
      expect(property.unique).toBe(true);

      await property.destroy();
    });

    test("the plugin provides uniquePropertyBootstrapOptions", async () => {
      const property = await Property.findOne({
        where: { key: "userId" },
      });
      const options = await property.getOptions();
      expect(options).toEqual({ column: "__default_column" }); // from the plugin; see specHelper.ts
    });

    test("provided property options will override defaults from uniquePropertyBootstrapOptions", async () => {
      const property = await source.bootstrapUniqueProperty(
        "uniqueId",
        "integer",
        "id",
        undefined,
        false,
        { column: "my_column" }
      );

      const options = await property.getOptions();
      expect(options).toEqual({ column: "my_column" });

      await property.destroy();
    });

    test("bootstrapUniqueProperty will fail if the property cannot be created", async () => {
      const otherSource: Source = await helper.factories.source();
      await otherSource.setOptions({ table: "foo" });
      await otherSource.update({ state: "ready" }, { hooks: false }); // normally you can't get into this situation

      const blockingProperty = await Property.create({
        sourceId: otherSource.id,
        id: "blocking_property",
        key: "blockingProperty",
        type: "string",
        unique: true,
        isArray: false,
      });
      await blockingProperty.setOptions({ column: "something" });
      await blockingProperty.update({ state: "ready" }, { hooks: false }); // normally you can't get into this situation

      await expect(
        source.bootstrapUniqueProperty(
          "blockingProperty",
          "integer",
          "blocking_property"
        )
      ).rejects.toThrow(/already in use/);

      await blockingProperty.destroy();
      await otherSource.destroy();
    });
  });

  describe("edge cases: bootstrapUniqueProperty", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source 2",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "some table" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("it can make a property identifying", async () => {
      const property = await Property.findOne({
        where: { identifying: true },
      });
      if (!property) {
        // make sure it really has one
        const userId = await Property.findOne({
          where: { key: "userId" },
        });
        userId.identifying = true;
        await userId.save();
      }
    });

    test("bootstrapUniqueProperty will create a new non-identifying property", async () => {
      // there is already an identifying property
      const property = await source.bootstrapUniqueProperty(
        "uniqueId",
        "integer",
        "id"
      );

      expect(property.key).toBe("uniqueId");
      expect(property.type).toBe("integer");
      expect(property.isArray).toBe(false);
      expect(property.identifying).toBe(false);
      expect(property.state).toBe("ready");
      expect(property.unique).toBe(true);

      // can it be changed even though source is not ready
      await property.update({ name: "changed" });
      // can get the source ready
      await source.setMapping({ uniqueId: "uniqueId" });
      await source.update({ state: "ready" });
      // and still change
      await property.update({ name: "changed again" });

      await source.setMapping({});
      await property.destroy();
    });
  });

  describe("import", () => {
    let source: Source;
    let record: GrouparooRecord;
    let lnameProperty: Property;
    let originalRecordPropertyMethod;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      record = await helper.factories.record();
      await record.addOrUpdateProperties({ userId: [1000] });

      lnameProperty = await Property.create({
        key: "__lname",
        sourceId: source.id,
        type: "string",
      });

      originalRecordPropertyMethod = api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.recordProperty;
    });

    afterAll(async () => {
      await record.destroy();
      await lnameProperty.destroy();
      await source.destroy();
    });

    afterEach(() => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.recordProperty = originalRecordPropertyMethod;
    });

    test("it will not import a draft property (single)", async () => {
      expect(lnameProperty.state).toBe("draft");
      const property = await source.importRecordProperty(record, lnameProperty);
      expect(property).toBeUndefined();
    });

    test("it will not import a draft property (batch)", async () => {
      expect(lnameProperty.state).toBe("draft");
      const { properties } = await source.import(record);
      expect(properties).toEqual({});
    });

    test("it can import one record property for a record", async () => {
      await lnameProperty.setOptions({ column: "lname" });
      await lnameProperty.update({ state: "ready" });
      const property = await source.importRecordProperty(record, lnameProperty);
      expect(property).toEqual("...mario");
    });

    test("it can import one record property for a record with an override of the property options", async () => {
      await expect(
        source.importRecordProperty(record, lnameProperty, {
          something: "else",
        })
      ).rejects.toThrow(/column is required/);

      await source.importRecordProperty(record, lnameProperty, {
        column: "abc",
      }); // does not throw
    });

    test("it can import one record property for a record with an override of the property filters", async () => {
      await source.importRecordProperty(record, lnameProperty, null, []); // does not throw
    });

    test("it can import all record properties for this source, mapped to the property ids properly", async () => {
      const { properties } = await source.import(record);
      expect(properties).toEqual({ [lnameProperty.id]: "...mario" });
    });

    test("if importing returned null, it will not be included in the response hash to set record properties", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.recordProperty = async () => {
        return null;
      };

      const { canImport, properties } = await source.import(record);
      expect(canImport).toBe(true);
      expect(properties).toEqual({});
    });

    test("if importing returned undefined, it will not be included in the response hash to set record properties", async () => {
      api.plugins.plugins.filter(
        (p) => p.name === "@grouparoo/test-plugin"
      )[0].connections[0].methods.recordProperty = async () => {
        return undefined;
      };

      const { canImport, properties } = await source.import(record);
      expect(canImport).toBe(true);
      expect(properties).toEqual({});
    });

    test("if plugin doesn't support directly importing properties, it will return canImport: false and property hash will be empty", async () => {
      helper.disableTestPluginImport();

      const { canImport, properties } = await source.import(record);
      expect(canImport).toBe(false);
      expect(properties).toEqual({});
    });
  });

  describe("parameterizedOptions", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    it("replaces mustache template strings with variables", async () => {
      await source.setOptions({
        table: "{{ previousRun.createdAt.sql }}",
      });
      await source.setMapping({ id: "userId" });

      const schedule = await Schedule.create({
        sourceId: source.id,
        name: "test schedule",
      });
      await schedule.setOptions({ maxColumn: "abc" });
      await schedule.update({ state: "ready" });

      const previousRun = await helper.factories.run(schedule, {
        createdAt: new Date(0),
        recordsReadCount: 1,
        state: "complete",
      });
      const run = await helper.factories.run(schedule);

      const parameterizedOptions = await source.parameterizedOptions(run);
      expect(parameterizedOptions.table).toBe(`1970-01-01 00:00:00`);

      await schedule.destroy();
    });
  });

  describe("#pendingImportsBySource", () => {
    let source: Source;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "test source",
        appId: app.id,
        modelId: model.id,
      });

      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("pending imports can be listed", async () => {
      const record = await helper.factories.record();
      await record.buildNullProperties();
      const emailProperty = await Property.findOne({
        where: { key: "email" },
      });

      await RecordProperty.update(
        { state: "pending" },
        {
          where: {
            recordId: record.id,
            propertyId: { [Op.in]: [emailProperty.id] },
          },
        }
      );

      const { counts } = await SourceOps.pendingImportsBySource();

      expect(Object.keys(counts).length).toBe(1);
      expect(counts[emailProperty.sourceId]).toBe(1);
    });
  });

  describe("#applyNonUniqueMappedResultsToAllRecords", () => {
    let source: Source;
    let sourceMapping: SourceMapping;
    let propertyA: Property;
    let propertyB: Property;
    let mario: GrouparooRecord;
    let luigi: GrouparooRecord;

    beforeAll(async () => {
      source = await Source.create({
        type: "test-plugin-import",
        name: "translations source",
        appId: app.id,
        modelId: model.id,
      });

      await source.setOptions({ table: "translations" });
      await source.setMapping({ word: "lastName" });
      await source.update({ state: "ready" });
      sourceMapping = await source.getMapping();

      propertyA = await helper.factories.property(
        source,
        { key: "wordInSpanish" },
        { column: "spanishWord" }
      );
      propertyB = await helper.factories.property(
        source,
        { key: "wordInFrench" },
        { column: "frenchWord" }
      );

      mario = await helper.factories.record();
      luigi = await helper.factories.record();
    });

    afterAll(async () => {
      await mario.destroy();
      await luigi.destroy();
      await propertyA.destroy();
      await propertyB.destroy();
      await source.destroy();
    });

    test("sources mapped through non-unique properties cannot have a schedule", async () => {
      expect(await source.scheduleAvailable()).toBe(false);
    });

    test("it will throw if the record properties in are not ready", async () => {
      await mario.markPending();

      const records = [mario];
      const properties = [propertyA];
      const response = { [mario.id]: { [propertyA.id]: ["hello"] } };
      await expect(
        SourceOps.applyNonUniqueMappedResultsToAllRecords(response, {
          records,
          properties,
          sourceMapping,
        })
      ).rejects.toThrow(/ is not ready/);
    });

    describe("with ready record properties", () => {
      beforeAll(async () => {
        await mario.import();
        await luigi.import();
      });

      beforeEach(async () => {
        await propertyA.update({ isArray: false, unique: false });
        await propertyB.update({ isArray: false, unique: false });
      });

      test("it will apply non-unique properties to all records in the batch (1 property)", async () => {
        const records = [mario, luigi];
        const properties = [propertyA];
        const response = { [mario.id]: { [propertyA.id]: ["hola"] } };
        await SourceOps.applyNonUniqueMappedResultsToAllRecords(response, {
          records,
          properties,
          sourceMapping,
        });

        expect(response).toEqual({
          [mario.id]: { wordInSpanish: ["hola"] },
          [luigi.id]: { wordInSpanish: ["hola"] },
        });
      });

      test("it will apply non-unique properties to all records in the batch (2 properties)", async () => {
        const records = [mario, luigi];
        const properties = [propertyA, propertyB];
        const response = {
          [mario.id]: { [propertyA.id]: ["hola"], [propertyB.id]: ["bonjour"] },
        };
        await SourceOps.applyNonUniqueMappedResultsToAllRecords(response, {
          records,
          properties,
          sourceMapping,
        });

        expect(response).toEqual({
          [mario.id]: { wordInSpanish: ["hola"], wordInFrench: ["bonjour"] },
          [luigi.id]: { wordInSpanish: ["hola"], wordInFrench: ["bonjour"] },
        });
      });

      test("it returns undefined when the source does not have a record for the property", async () => {
        await luigi.addOrUpdateProperties({ lastName: ["x"] }); // change the value of the property that is mapped

        const records = [mario, luigi];
        const properties = [propertyA, propertyB];
        const response = {
          [mario.id]: { [propertyA.id]: ["hola"], [propertyB.id]: ["bonjour"] },
        };
        await SourceOps.applyNonUniqueMappedResultsToAllRecords(response, {
          records,
          properties,
          sourceMapping,
        });

        expect(response).toEqual({
          [mario.id]: { wordInSpanish: ["hola"], wordInFrench: ["bonjour"] },
          [luigi.id]: { wordInSpanish: undefined, wordInFrench: undefined },
        });
      });
    });
  });
});
