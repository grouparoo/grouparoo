import { helper } from "@grouparoo/spec-helper";
import { specHelper, Connection } from "actionhero";
import { Option, Source, App, GrouparooModel, Property } from "../../../src";
import { SessionCreate } from "../../../src/actions/session";
import {
  SourceBootstrapUniqueProperty,
  SourceConnectionApps,
  SourceConnectionOptions,
  SourceCreate,
  SourceDefaultPropertyOptions,
  SourceDestroy,
  SourceEdit,
  SourcePreview,
  SourcesList,
  SourceView,
} from "../../../src/actions/sources";
import { PropertyDestroy } from "../../../src/actions/properties";
import { ConfigWriter } from "../../../src/modules/configWriter";

describe("actions/sources", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const configSpy = jest.spyOn(ConfigWriter, "run");

  let model: GrouparooModel;
  let app: App;
  let id: string;
  let propertyId: string;

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    model = await helper.factories.model();
    app = await helper.factories.app();
    await app.update({ name: "test app" });
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

    test("an administrator can create a new source from an app", async () => {
      connection.params = {
        csrfToken,
        name: "test source",
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
        options: { table: "users" },
      };
      const { error, source } = await specHelper.runAction<SourceCreate>(
        "source:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.id).toBeTruthy();
      expect(source.app.id).toBe(app.id);
      expect(source.app.name).toBe("test app");
      expect(source.state).toBe("draft");
      expect(configSpy).toBeCalledTimes(1);

      id = source.id;
    });

    test("an administrator can list all the sources", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, sources, total } = await specHelper.runAction<SourcesList>(
        "sources:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(sources.length).toBe(1);
      expect(sources[0].app.name).toBe("test app");
      expect(total).toBe(1);
    });

    test("a source can be bootstrapped with a property", async () => {
      connection.params = {
        csrfToken,
        id,
        key: "userId",
        type: "integer",
        mappedColumn: "id",
      };
      const { property, error } =
        await specHelper.runAction<SourceBootstrapUniqueProperty>(
          "source:bootstrapUniqueProperty",
          connection
        );
      expect(error).toBeUndefined();
      expect(property.id).toBeTruthy();
      propertyId = property.id;
    });

    test("an administrator can list the connection methods and app pairs available for a new connection", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, connectionApps } =
        await specHelper.runAction<SourceConnectionApps>(
          "sources:connectionApps",
          connection
        );
      expect(error).toBeUndefined();
      expect(connectionApps[0].app.id).toBe(app.id);
      expect(connectionApps[0].connection.apps).toEqual(["test-plugin-app"]);
      expect(connectionApps[0].connection.methods).toEqual([
        "sourceOptions",
        "sourcePreview",
        "propertyOptions",
        "scheduleOptions",
        "uniquePropertyBootstrapOptions",
        "sourceFilters",
        "records",
        "recordProperty",
        "recordProperties",
      ]);
    });

    describe("options from environment variables", () => {
      beforeAll(() => {
        process.env.GROUPAROO_OPTION__SOURCE__TEST_OPTION = "abc123";
      });

      test("options for a new source will include the names of options included in environment variables", async () => {
        connection.params = { csrfToken };
        const { environmentVariableOptions } =
          await specHelper.runAction<SourceConnectionApps>(
            "sources:connectionApps",
            connection
          );
        expect(environmentVariableOptions).toEqual(["TEST_OPTION"]);
      });

      afterAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = undefined;
      });
    });

    test("an administrator can enumerate the source connection options", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, options } =
        await specHelper.runAction<SourceConnectionOptions>(
          "source:connectionOptions",
          connection
        );
      expect(error).toBeUndefined();
      expect(options).toEqual({ table: { options: ["users"], type: "list" } });
    });

    test("a source with no options will see an empty preview", async () => {
      const options = await Option.findAll({ where: { ownerId: id } });
      for (const option of options) await option.destroy();

      connection.params = {
        csrfToken,
        id,
      };
      const { error, preview } = await specHelper.runAction<SourcePreview>(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview).toEqual([]);
    });

    test("a source can provide options to a preview and column speculation", async () => {
      connection.params = {
        csrfToken,
        id,
        options: { table: "users" },
      };
      const { error, preview, columnSpeculation } =
        await specHelper.runAction<SourcePreview>("source:preview", connection);
      expect(error).toBeUndefined();
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
      expect(columnSpeculation).toEqual({
        id: { isUnique: true, type: "integer", suggestedPropertyKey: "id" },
        fname: {
          isUnique: false,
          type: "string",
          suggestedPropertyKey: "fname",
        },
        lname: {
          isUnique: false,
          type: "string",
          suggestedPropertyKey: "lname",
        },
      });
    });

    test("a source can provide default property options", async () => {
      connection.params = {
        csrfToken,
        id,
        options: { table: "users" },
      };
      const { error, defaultPropertyOptions } =
        await specHelper.runAction<SourceDefaultPropertyOptions>(
          "source:defaultPropertyOptions",
          connection
        );
      expect(error).toBeUndefined();
      expect(defaultPropertyOptions).toEqual([
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
            { key: "exact", default: true },
            { key: "count" },
            { key: "min" },
            { key: "max" },
          ],
          required: false,
          type: "list",
        },
      ]);
    });

    test("a source can have options set", async () => {
      connection.params = {
        csrfToken,
        id,
        options: { table: "users" },
      };
      const { error, source } = await specHelper.runAction<SourceEdit>(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.options).toEqual({ table: "users" });
      expect(configSpy).toBeCalledTimes(1);
    });

    test("a source with options set will return a preview", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, preview } = await specHelper.runAction<SourcePreview>(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
    });

    test("a source can have mapping set", async () => {
      connection.params = {
        csrfToken,
        id,
        mapping: { id: "userId" },
      };
      const { error, source } = await specHelper.runAction<SourceEdit>(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.mapping).toEqual({ id: "userId" });
      expect(configSpy).toBeCalledTimes(1);
    });

    test("a source can be made ready", async () => {
      connection.params = {
        csrfToken,
        id,
        state: "ready",
      };
      const { error, source } = await specHelper.runAction<SourceEdit>(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.state).toBe("ready");
    });

    describe("a source with column(s) that conflict with an existing property", () => {
      let otherProperty: Property;
      let source: Source;
      beforeAll(async () => {
        source = await Source.findOne();
        otherProperty = await helper.factories.property(
          source,
          {
            key: "fname",
          },
          { column: "fname" }
        );
      });

      afterAll(async () => {
        otherProperty.destroy();
      });

      test("can provide suggested property keys", async () => {
        connection.params = {
          csrfToken,
          id,
          options: { table: "users" },
        };
        const { error, preview, columnSpeculation } =
          await specHelper.runAction<SourcePreview>(
            "source:preview",
            connection
          );
        expect(error).toBeUndefined();
        expect(preview).toEqual([
          { id: 1, fname: "mario", lname: "mario" },
          { id: 2, fname: "luigi", lname: "mario" },
        ]);
        expect(columnSpeculation).toEqual({
          id: { isUnique: true, type: "integer", suggestedPropertyKey: "id" },

          // Check for rename in the case of a conflict
          fname: {
            isUnique: false,
            type: "string",
            suggestedPropertyKey: "profiles_fname",
          },
          lname: {
            isUnique: false,
            type: "string",
            suggestedPropertyKey: "lname",
          },
        });
      });
    });

    test("an administrator can view a source", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, source } = await specHelper.runAction<SourceView>(
        "source:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(source.id).toBeTruthy();
      expect(source.app.name).toBe("test app");
    });

    test("an administrator can destroy a source", async () => {
      connection.params = {
        csrfToken,
        id,
        mapping: {},
      };
      const editResponse = await specHelper.runAction<SourceEdit>(
        "source:edit",
        connection
      );
      expect(editResponse.error).toBeUndefined();
      expect(configSpy).toBeCalledTimes(1);

      connection.params = {
        csrfToken,
        id: propertyId,
      };
      const deleteRuleResponse = await specHelper.runAction<PropertyDestroy>(
        "property:destroy",
        connection
      );
      expect(deleteRuleResponse.error).toBeUndefined();
      expect(configSpy).toBeCalledTimes(2);

      connection.params = {
        csrfToken,
        id,
      };
      const destroyResponse = await specHelper.runAction<SourceDestroy>(
        "source:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      const count = await Source.count();
      expect(count).toBe(0);
      expect(configSpy).toBeCalledTimes(3);
    });
  });
});
