import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper } from "actionhero";
import {
  plugin,
  App,
  Property,
  Source,
  GrouparooModel,
  PluginOptionType,
} from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  PropertiesList,
  PropertiesOptions,
  PropertyCreate,
  PropertyDestroy,
  PropertyEdit,
  PropertyFilterOptions,
  PropertyGroups,
  PropertyPluginOptions,
  PropertyRecordPreview,
  PropertyTest,
  PropertyView,
} from "../../src/actions/properties";
import { ConfigWriter } from "../../src/modules/configWriter";

describe("actions/properties", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const configSpy = jest.spyOn(ConfigWriter, "run");
  let id: string;
  let model: GrouparooModel;
  let source: Source;

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    model = await helper.factories.model();
    await Property.truncate();

    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.bootstrapUniqueProperty({
      key: "userId",
      type: "integer",
      mappedColumn: "id",
    });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });
  });

  afterEach(() => {
    configSpy.mockClear();
  });

  describe("administrator signed in", () => {
    let connection: Connection;
    let csrfToken: string;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("the options to create a new property can be requested", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, types } = await specHelper.runAction<PropertiesOptions>(
        "properties:options",
        connection
      );
      expect(error).toBeUndefined();
      expect(types).toEqual([
        "boolean",
        "date",
        "email",
        "float",
        "integer",
        "phoneNumber",
        "string",
        "url",
      ]);
    });

    test("an administrator cannot make a new property that is both unique and an array", async () => {
      connection.params = {
        csrfToken,
        sourceId: source.id,
        key: "email",
        type: "string",
        unique: "true",
        isArray: "true",
      };

      const { error } = await specHelper.runAction(
        "property:create",
        connection
      );

      expect(error.message).toMatch(
        /unique record properties cannot be arrays/
      );
    });

    test("an administrator can create a new property", async () => {
      connection.params = {
        csrfToken,
        sourceId: source.id,
        key: "email",
        type: "string",
        unique: "true",
      };

      const { error, property, pluginOptions } =
        await specHelper.runAction<PropertyCreate>(
          "property:create",
          connection
        );

      expect(error).toBeUndefined();
      expect(property.id).toBeTruthy();
      expect(property.key).toBe("email");
      expect(property.unique).toBe(true);
      expect(property.isArray).toBe(false);
      expect(property.state).toBe("draft");
      expect(property.sourceId).toBe(source.id);
      expect(pluginOptions[0].key).toBe("column");
      expect(configSpy).toBeCalledTimes(1);

      id = property.id;
    });

    test("an administrator can view a property", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, property } = await specHelper.runAction<PropertyView>(
        "property:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(property.key).toBe("email");
      expect(property.isArray).toBe(false);
      expect(property.unique).toBe(true);
      expect(property.sourceId).toBe(source.id);
    });

    test("an administrator can view the filter options for a property", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, options } =
        await specHelper.runAction<PropertyFilterOptions>(
          "property:filterOptions",
          connection
        );

      expect(error).toBeUndefined();
      expect(options).toEqual([
        {
          key: "id",
          ops: ["gt", "lt"],
          canHaveRelativeMatch: false,
        },
      ]);
    });

    test("an administrator can set the filters for a property", async () => {
      connection.params = {
        csrfToken,
        id,
        filters: [{ key: "id", op: "gt", match: 6 }],
      };
      const { error, property } = await specHelper.runAction<PropertyEdit>(
        "property:edit",
        connection
      );

      expect(error).toBeUndefined();
      expect(property.filters).toEqual([
        {
          key: "id",
          match: "6",
          op: "gt",
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
        },
      ]);
      expect(configSpy).toBeCalledTimes(1);
    });

    test("an administrator can make a rule ready", async () => {
      connection.params = {
        csrfToken,
        id,
        options: { column: "email" },
        state: "ready",
      };
      const { error, property } = await specHelper.runAction<PropertyEdit>(
        "property:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(property.state).toBe("ready");
    });

    test("an administrator can test a property", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, test } = await specHelper.runAction<PropertyTest>(
        "property:test",
        connection
      );

      expect(error).toBeUndefined();
      expect(test).toBe(true);
    });

    test("an administrator can set options", async () => {
      connection.params = {
        csrfToken,
        id,
        options: {
          column: "userId",
        },
      };
      const { error, property } = await specHelper.runAction<PropertyEdit>(
        "property:edit",
        connection
      );

      expect(error).toBeFalsy();
      expect(property.options).toEqual({
        column: "userId",
      });
      expect(configSpy).toBeCalledTimes(1);
    });

    test("options are validated", async () => {
      connection.params = {
        csrfToken,
        id,
        options: {
          query: "select thing from stuff",
        },
      };
      const { error } = await specHelper.runAction("property:edit", connection);

      expect(error.message).toMatch("column is required");
    });

    test("an administrator can list all the properties with examples", async () => {
      const record = await helper.factories.record();
      await record.addOrUpdateProperties({ email: ["person@example.com"] });

      connection.params = {
        csrfToken,
        includeExamples: true,
      };

      const { error, properties, examples, total } =
        await specHelper.runAction<PropertiesList>(
          "properties:list",
          connection
        );

      expect(error).toBeUndefined();
      expect(properties.length).toBe(2); // this + userId
      expect(properties[1].sourceId).toBe(source.id);
      expect(properties[1].type).toBe("integer");
      expect(properties[1].unique).toBe(true);
      expect(properties[0].type).toBe("string");
      expect(properties[0].unique).toBe(true);
      expect(total).toBe(2);

      expect(examples[properties[0].id]).toEqual(["person@example.com"]);

      connection.params = {
        csrfToken,
        includeExamples: false,
      };

      const secondRequest = await specHelper.runAction<PropertiesList>(
        "properties:list",
        connection
      );
      expect(secondRequest.examples).toBeUndefined();
      expect(configSpy).toBeCalledTimes(0);

      await record.destroy();
    });

    test("an administrator can list rules in a certain state", async () => {
      connection.params = {
        state: "ready",
        csrfToken,
      };
      const { error, properties } = await specHelper.runAction<PropertiesList>(
        "properties:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(properties.length).toBe(2); // userId + email
    });

    test("an administrator can list unique rules", async () => {
      connection.params = {
        unique: "true",
        csrfToken,
      };
      const { error, properties } = await specHelper.runAction<PropertiesList>(
        "properties:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(properties.length).toBe(2); // userId + email
    });

    test("an administrator can see groups which rely on a property", async () => {
      const group = await helper.factories.group();
      await group.setRules([
        {
          key: "email",
          operation: { op: "like" },
          match: "%@%",
        },
      ]);
      await group.update({ state: "ready" });

      connection.params = {
        csrfToken,
        id,
      };
      const { error, groups } = await specHelper.runAction<PropertyGroups>(
        "property:groups",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(1);
      expect(groups[0].id).toBe(group.id);

      await group.destroy();
    });

    test("an administrator can edit a property", async () => {
      connection.params = {
        csrfToken,
        id,
        unique: true,
      };
      const { error, property } = await specHelper.runAction<PropertyEdit>(
        "property:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(property.unique).toBe(true);
      expect(configSpy).toBeCalledTimes(1);
    });

    test("an administrator can see a record preview of a property", async () => {
      const _record = await helper.factories.record();
      await _record.addOrUpdateProperties({ userId: [1001] });

      const originalProperties = await _record.getProperties();
      expect(originalProperties["email"].values).toEqual([null]);

      connection.params = {
        csrfToken,
        id,
      };
      const { error, record, groups, destinations } =
        await specHelper.runAction<PropertyRecordPreview>(
          "property:recordPreview",
          connection
        );

      expect(error).toBeUndefined();
      expect(groups).toEqual([]);
      expect(destinations).toEqual([]);
      expect(record.id).toBe(_record.id);
      expect(record.properties["email"].values[0]).not.toEqual(null);

      await _record.destroy();
    });

    test("an administrator can remove a property", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, success } = await specHelper.runAction<PropertyDestroy>(
        "property:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
      expect(configSpy).toBeCalledTimes(1);
    });

    describe("with multiple models", () => {
      let model2: GrouparooModel;
      let source2: Source;

      beforeAll(async () => {
        model2 = await helper.factories.model({ name: "admins" });

        source2 = await helper.factories.source(null, { modelId: model2.id });
        await source2.setOptions({ table: "test table" });
        await source2.bootstrapUniqueProperty({
          key: "adminId",
          type: "integer",
          mappedColumn: "id",
        });
        await source2.setMapping({ id: "adminId" });
        await source2.update({ state: "ready" });
      });

      test("record preview will select a record from the property's model", async () => {
        const foreignRecord = await helper.factories.record({
          modelId: model.id,
        });
        await foreignRecord.addOrUpdateProperties({ userId: [1001] });

        const _record = await helper.factories.record({ modelId: model2.id });
        await _record.addOrUpdateProperties({ adminId: [1001] });

        const property = await helper.factories.property(
          source2,
          { key: "adminEmail" },
          { column: "email" }
        );

        connection.params = {
          csrfToken,
          id: property.id,
        };
        const { error, record } =
          await specHelper.runAction<PropertyRecordPreview>(
            "property:recordPreview",
            connection
          );
        expect(error).toBeUndefined();
        expect(record.id).toBe(_record.id);
        expect(record.modelId).toBe(source2.modelId);

        await _record.destroy();
        await foreignRecord.destroy();
      });
    });

    describe("dynamic property options", () => {
      let app: App;
      let source: Source;
      let property: Property;

      beforeAll(async () => {
        plugin.registerPlugin({
          name: "test-plugin",
          apps: [
            {
              name: "test-dynamic-app",
              displayName: "test-dynamic-app",
              options: [],
              methods: {
                test: async () => {
                  return { success: true };
                },
              },
            },
          ],
          connections: [
            {
              name: "dynamic-property-options-source",
              displayName: "dynamic-property-options-source",
              description: "a test app connection",
              supportIncrementalSchedule: true,
              apps: ["test-dynamic-app"],
              direction: "import",
              options: [],
              methods: {
                propertyOptions: async ({ propertyOptions }) => {
                  const response = [];

                  response.push({
                    key: "column",
                    required: true,
                    description: "set the column",
                    type: "text" as PluginOptionType,
                    options: async () =>
                      [] as {
                        key: string;
                        description?: string;
                      }[],
                  });

                  response.push({
                    key: "aggregationMethod",
                    required: true,
                    description: "set the aggregationMethod",
                    type: "text" as PluginOptionType,
                    options: async () =>
                      [] as {
                        key: string;
                        description?: string;
                      }[],
                  });

                  if (propertyOptions?.aggregationMethod === true) {
                    response.push({
                      key: "sortColumn",
                      required: true,
                      description: "set the sortColumn",
                      type: "text" as PluginOptionType,
                      options: async () =>
                        [] as {
                          key: string;
                          description?: string;
                        }[],
                    });
                  }

                  return response;
                },
                records: async () => {
                  return {
                    importsCount: 0,
                    sourceOffset: 0,
                    highWaterMark: {},
                  };
                },
              },
            },
          ],
        });

        app = await App.create({
          name: "testApp",
          type: "test-dynamic-app",
        });
        await app.update({ state: "ready" });
        source = await Source.create({
          appId: app.id,
          type: "dynamic-property-options-source",
          modelId: model.id,
        });
        await source.update({ state: "ready" });
        property = await Property.create({
          sourceId: source.id,
          type: "string",
          key: "test-property",
        });
      });

      test("an administrator can view a property's plugin options", async () => {
        connection.params = {
          csrfToken,
          id: property.id,
        };
        const { error, pluginOptions } =
          await specHelper.runAction<PropertyPluginOptions>(
            "property:pluginOptions",
            connection
          );

        expect(error).toBeUndefined();
        expect(pluginOptions.length).toBe(2);
        expect(pluginOptions[0].key).toBe("column");
        expect(pluginOptions[1].key).toBe("aggregationMethod");
      });

      test("an administrator can view a property's plugin options with a set of proposed options", async () => {
        connection.params = {
          csrfToken,
          id: property.id,
          options: { column: "countOfStuff", aggregationMethod: true },
        };
        const { error, pluginOptions } =
          await specHelper.runAction<PropertyPluginOptions>(
            "property:pluginOptions",
            connection
          );

        expect(error).toBeUndefined();
        expect(pluginOptions.length).toBe(3);
        expect(pluginOptions[0].key).toBe("column");
        expect(pluginOptions[1].key).toBe("aggregationMethod");
        expect(pluginOptions[2].key).toBe("sortColumn");
      });
    });
  });
});
