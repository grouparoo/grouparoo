import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper, api, rebuildConfig } from "actionhero";
import { ConfigWriter } from "../../../src/modules/configWriter";
import {
  Source,
  App,
  GrouparooModel,
  GrouparooRecord,
  GrouparooPlugin,
  PluginConnection,
  SourcePreviewMethod,
  Property,
  RecordProperty,
} from "../../../src";
import { SessionCreate } from "../../../src/actions/session";
import {
  SourceGenerateSampleRecords,
  SourceBootstrapUniqueProperty,
  SourceEdit,
} from "../../../src/actions/sources";
import { ConfigUser } from "../../../src/modules/configUser";
import fs from "fs";

describe("actions/sources/generateSampleRecords", () => {
  let model: GrouparooModel;
  let app: App;
  let source: Source;
  let connection: Connection;
  let csrfToken: string;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    model = await helper.factories.model();
    app = await helper.factories.app({ model });
  });

  beforeAll(async () => {
    connection = await specHelper.buildConnection();
    connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction<SessionCreate>(
      "session:create",
      connection
    );
    csrfToken = sessionResponse.csrfToken;
  });

  beforeEach(async () => {
    if (source) {
      await Property.destroy({ where: { sourceId: source.id } });
      await source.destroy();
    }
    source = await helper.factories.source(app);

    connection.params = {
      csrfToken,
      id: source.id,
      key: "userId",
      type: "integer",
      mappedColumn: "id",
    };
    const { error: bootstrapError } =
      await specHelper.runAction<SourceBootstrapUniqueProperty>(
        "source:bootstrapUniqueProperty",
        connection
      );
    expect(bootstrapError).toBeUndefined();

    connection.params = {
      csrfToken,
      id: source.id,
      state: "ready",
      mapping: { id: "userId" },
      options: { table: "users" },
    };
    const { error: editError } = await specHelper.runAction<SourceEdit>(
      "source:edit",
      connection
    );
    expect(editError).toBeUndefined();
  });

  describe("cli:run", () => {
    beforeEach(() => {
      process.env.GROUPAROO_RUN_MODE = "cli:run";
      rebuildConfig();
    });

    test("no sample records are created", async () => {
      connection.params = {
        csrfToken,
        id: source.id,
        mapping: { id: "userId" },
        state: "ready",
      };
      const { error } = await specHelper.runAction<SourceGenerateSampleRecords>(
        "source:generateSampleRecords",
        connection
      );
      expect(error.message).toMatch(
        /this action is only valid in cli:config mode/
      );

      expect(await GrouparooRecord.count()).toBe(0);
    });
  });

  describe("cli:config", () => {
    let configSpy: jest.SpyInstance;
    let testPluginConnection: PluginConnection;
    let originalPreviewMethod: SourcePreviewMethod;

    beforeAll(() => {
      process.env.GROUPAROO_RUN_MODE = "cli:config";
      rebuildConfig();

      ConfigUser.create({
        email: "mario@example.com",
        company: "MarioBros Plumbing",
      });

      configSpy = jest
        .spyOn(ConfigWriter, "run")
        .mockImplementation(() => null);

      const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
        (a) => a.name === "@grouparoo/test-plugin"
      );
      testPluginConnection = testPlugin.connections.find(
        (c) => c.name === "test-plugin-import"
      );
      originalPreviewMethod = testPluginConnection.methods.sourcePreview;
    });

    beforeEach(async () => {
      await GrouparooRecord.truncate();
      await RecordProperty.truncate();
    });

    afterAll(async () => {
      configSpy.mockClear();
      fs.unlinkSync(await ConfigUser.localUserFilePath());
      testPluginConnection.methods.sourcePreview = originalPreviewMethod;
    });

    test("sample records are created", async () => {
      testPluginConnection.methods.sourcePreview = async () => [
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
        { id: 3, fname: "toad", lname: "toadstool" },
        { id: 4, fname: "peach", lname: "toadstool" },
      ];

      connection.params = {
        csrfToken,
        id: source.id,
      };
      const { error, records } =
        await specHelper.runAction<SourceGenerateSampleRecords>(
          "source:generateSampleRecords",
          connection
        );
      expect(error).toBeUndefined();

      expect(records.length).toEqual(3);
      expect(await GrouparooRecord.count()).toBe(3);
    });

    test("if there are some invalid preview records, as many as can will be created", async () => {
      testPluginConnection.methods.sourcePreview = async () => [
        { id: null, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
        { id: 3, fname: "toad", lname: "toadstool" },
      ];

      connection.params = {
        csrfToken,
        id: source.id,
      };
      const { error, records } =
        await specHelper.runAction<SourceGenerateSampleRecords>(
          "source:generateSampleRecords",
          connection
        );
      expect(error).toBeUndefined();

      expect(records.length).toEqual(2);
      expect(await GrouparooRecord.count()).toBe(2);
    });

    test("with no samples, no records are created and the source still goes ready", async () => {
      testPluginConnection.methods.sourcePreview = async () => [];

      connection.params = {
        csrfToken,
        id: source.id,
      };
      const { error, records } =
        await specHelper.runAction<SourceGenerateSampleRecords>(
          "source:generateSampleRecords",
          connection
        );
      expect(error).toBeUndefined();

      expect(records.length).toEqual(0);
      expect(await GrouparooRecord.count()).toBe(0);
    });
  });
});
