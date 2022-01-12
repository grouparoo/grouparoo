import { helper } from "@grouparoo/spec-helper";
import { api, redis, utils } from "actionhero";
import { App, Log, Option, plugin, PluginOptionType } from "../../../src";
import { ObfuscatedOptionString } from "../../../src/modules/optionHelper";

describe("models/app", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("an app can be created and options added", async () => {
    const app = new App({
      name: "test app",
      type: "test-plugin-app",
    });

    await app.save();

    expect(app.id.length).toBe(40);
    expect(app.createdAt).toBeTruthy();
    expect(app.updatedAt).toBeTruthy();

    await app.setOptions({ fileId: "abc123" });
    const options = await app.getOptions();
    expect(options).toEqual({ fileId: "abc123" });

    await app.destroy();
  });

  test("apps start in the draft state", async () => {
    const app = await App.create({
      name: "test app",
      type: "test-plugin-app",
    });

    expect(app.state).toBe("draft");

    await app.destroy();
  });

  test("a new app will have a '' name", async () => {
    const app = await App.create({
      type: "test-plugin-app",
    });

    expect(app.name).toBe("");

    await app.destroy();
  });

  test("draft apps can share the same name, but not with ready apps", async () => {
    const appOne = await App.create({ type: "test-plugin-app" });
    const appTwo = await App.create({ type: "test-plugin-app" });

    expect(appOne.name).toBe("");
    expect(appTwo.name).toBe("");

    await appOne.update({ name: "name" });
    await appOne.setOptions({ fileId: "abc123" });
    await appOne.update({ state: "ready" });

    await expect(appTwo.update({ name: "name" })).rejects.toThrow(
      /name "name" is already in use/
    );

    await appOne.destroy();
    await appTwo.destroy();
  });

  test("deleted apps can share the same name, but not with ready apps", async () => {
    const appOne = await App.create({
      type: "test-plugin-app",
    });
    const appTwo = await App.create({
      type: "test-plugin-app",
    });
    const appThree = await App.create({
      type: "test-plugin-app",
    });

    await appOne.setOptions({ fileId: "abc123" });
    await appOne.update({ name: "1", state: "ready" });
    await appTwo.setOptions({ fileId: "abc123" });
    await appTwo.update({ name: "2", state: "deleted" });
    await appThree.setOptions({ fileId: "abc123" });
    await appThree.update({ name: "3", state: "deleted" });

    expect(appOne.name).toBe("1");
    expect(appOne.state).toBe("ready");
    expect(appTwo.name).toBe("2");
    expect(appTwo.state).toBe("deleted");
    expect(appThree.name).toBe("3");
    expect(appThree.state).toBe("deleted");

    await appThree.update({ name: "2" });

    await expect(appTwo.update({ name: "1" })).rejects.toThrow(
      /name "1" is already in use/
    );

    await appOne.update({ name: "2" });

    await appOne.destroy();
    await appTwo.destroy();
    await appThree.destroy();
  });

  test("deleting an app removes the appOptions", async () => {
    const app = new App({
      name: "test app",
      type: "test-plugin-app",
    });

    await app.save();
    await app.setOptions({ fileId: "abc123" });

    let count = await Option.count({ where: { ownerId: app.id } });
    expect(count).toBe(1);

    await app.destroy();
    count = await Option.count({ where: { ownerId: app.id } });
    expect(count).toBe(0);
  });

  test("deleting an app does not delete options for other models with the same id", async () => {
    const app = new App({
      name: "test app",
      type: "test-plugin-app",
    });

    await app.save();
    await app.setOptions({ fileId: "abc123" });

    const foreignOption = await Option.create({
      ownerId: app.id,
      ownerType: "other",
      key: "someKey",
      value: "someValue",
      type: "string",
    });

    let count = await Option.count({
      where: { ownerId: app.id },
    });
    expect(count).toBe(2);

    await app.destroy();
    const options = await Option.findAll({
      where: { ownerId: app.id },
    });
    expect(options.length).toBe(1);
    expect(options[0].ownerType).toBe("other");
    expect(options[0].key).toBe("someKey");

    await foreignOption.destroy();
  });

  test("creating an app creates a log entry", async () => {
    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "app" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("the app options will not be logged", async () => {
    const app = await App.create({
      name: "test log app",
      type: "test-plugin-app",
    });

    await Log.truncate();
    await app.setOptions({ fileId: "abc123" });

    let log = await Log.findOne({
      where: { verb: "update", topic: "app" },
    });

    expect(log.data.options).toBe("** filtered **");
    expect(log.message).toMatch(/app "test log app" updated/);

    await app.destroy();
  });

  test("apps can determine if they will provide a source or destination", async () => {
    const app = await App.create({
      name: "test log app",
      type: "test-plugin-app",
    });

    const provides = app.provides();
    expect(provides).toEqual({ source: true, destination: true });
    await app.destroy();
  });

  test("deleting a app creates a log entry", async () => {
    const app = await App.create({
      name: "bye app",
      type: "test-plugin-app",
      options: { fileId: "abc123" },
    });

    await app.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "app" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  describe("options from environment variables", () => {
    beforeAll(() => {
      process.env.GROUPAROO_OPTION__APP__TEST_OPTION = "abc123";
    });

    test("options can be set from an environment variable but not stored in the database", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });

      await app.setOptions({ fileId: "TEST_OPTION" });
      const options = await app.getOptions();
      expect(options.fileId).toBe("abc123");

      const option = await Option.findOne({
        where: { ownerId: app.id, key: "fileId" },
      });
      expect(option.value).toBe("TEST_OPTION");

      await app.destroy();
    });

    test("apps can be tested with environment variables", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });

      const { success, error, message } = await app.test({
        fileId: "TEST_OPTION",
      });
      expect(success).toBe(true);
      expect(error).toBeUndefined();
      expect(message).toBe("OK");

      await app.destroy();
    });

    afterAll(() => {
      process.env.GROUPAROO_OPTION__APP__TEST_OPTION = undefined;
    });
  });

  describe("validations", () => {
    test("apps must be of a type defined by a plugin", async () => {
      const app = new App({
        name: "test-plugin-no-app",
        type: "oh no",
        options: {},
      });

      await expect(app.save()).rejects.toThrow(
        /Cannot find a \"oh no\" app available within the installed plugins. Current apps installed are:/
      );
    });

    test("__options only includes options for apps", async () => {
      const app = await App.create({
        id: "myAppId",
        name: "test app",
        type: "test-plugin-app",
      });

      await Option.create({
        ownerId: app.id,
        ownerType: "app",
        key: "fileId",
        value: "users",
        type: "string",
      });

      await Option.create({
        ownerId: app.id,
        ownerType: "source",
        key: "someOtherProperty",
        value: "someValue",
        type: "string",
      });

      const options = await app.$get("__options");
      expect(options.length).toBe(1);
      expect(options[0].ownerType).toBe("app");
      expect(options[0].key).toBe("fileId");

      await app.destroy();
    });

    test("adding the wrong options for the app produces an error", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });

      await expect(app.setOptions({ thing: "stuff" })).rejects.toThrow(
        /fileId is required for a app of type test-plugin-app/
      );

      await expect(
        app.setOptions({ fileId: "abc123", otherThing: "123" })
      ).rejects.toThrow(
        /otherThing is not an option for a test-plugin-app app/
      );

      await app.destroy();
    });

    test("an app cannot be changed to to the ready state if there are missing required options", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });

      await expect(app.update({ state: "ready" })).rejects.toThrow();

      await app.destroy();
    });

    test("an app that is ready cannot move back to draft", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });
      await app.setOptions({ fileId: "abc123" });
      await app.update({ state: "ready" });
      expect(app.state).toBe("ready");

      await expect(app.update({ state: "draft" })).rejects.toThrow(
        /cannot transition app state from ready to draft/
      );

      await app.destroy();
    });

    test("an app cannot be created in the ready state with missing required options", async () => {
      const app = App.build({
        type: "test-plugin-app",
        state: "ready",
      });

      await expect(app.save()).rejects.toThrow(/fileId is required/);
    });

    test("an app with a source cannot be deleted", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });
      await app.setOptions({ fileId: "abc" });
      await app.update({ state: "ready" });

      const source = await helper.factories.source(app);

      await expect(app.destroy()).rejects.toThrow(
        /cannot delete this app, source .* relies on it/
      );

      // doesn't throw
      await source.destroy();
      await app.destroy();
    });
  });

  describe("with plugin", () => {
    let app: App;
    let testCounter = 0;
    let recordPropertyCount = 0;
    let parallelism = Infinity;
    let appOptionsReturnType: PluginOptionType = "list";

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        icon: "/path/to/icon.svg",
        apps: [
          {
            name: "test-template-app",
            displayName: "test-template-app",
            options: [
              { key: "test_key", type: "list", required: true },
              { key: "password", type: "password", required: false },
            ],
            methods: {
              test: async () => {
                testCounter++;
                return { success: true };
              },
              appOptions: async () => {
                return {
                  test_key: { type: appOptionsReturnType, options: ["a", "b"] },
                };
              },
              parallelism: async () => {
                return parallelism;
              },
            },
          },
        ],
        connections: [
          {
            name: "import-from-test-template-app",
            displayName: "import-from-test-template-app",
            description: "a test app connection",
            apps: ["test-template-app"],
            direction: "import" as "import",
            options: [],
            methods: {
              records: async () => {
                return {
                  importsCount: 0,
                  highWaterMark: { col: "0" },
                  sourceOffset: 0,
                };
              },
              recordProperty: async ({ app, property, record }) => {
                recordPropertyCount++;
                return ["test@example.com"];
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app",
        type: "test-template-app",
        options: { test_key: true },
      });
    });

    test("plugins can provide icons", async () => {
      const apiData = await app.apiData();
      expect(apiData.icon).toBe("/path/to/icon.svg");
    });

    test("apiData returns ObfuscatedOptionString for any appOption of type 'password'", async () => {
      await app.setOptions({ password: "SECRET", test_key: "something" });

      const apiData = await app.apiData();
      expect(apiData.options).toEqual({
        test_key: "something",
        password: ObfuscatedOptionString,
      });
    });

    test("it can return the appOptions from the plugin", async () => {
      // original
      const optionsA = await app.appOptions();
      expect(optionsA).toEqual({
        test_key: { type: "list", options: ["a", "b"] }, // dynamically defined
        password: { type: "password" }, // statically defined
      });

      // override
      appOptionsReturnType = "pending";
      const optionsB = await app.appOptions();
      expect(optionsB).toEqual({
        test_key: { type: "pending", options: ["a", "b"] }, // dynamically defined
        password: { type: "password" }, // statically defined
      });
    });

    test("it will replace obfuscated app options for the plugin's test method", async () => {
      await app.setOptions({ password: "SECRET", test_key: "something" });

      const plugin = api.plugins.plugins.find(
        (plugin) => plugin.name === "test-plugin"
      );

      const spy = jest.spyOn(plugin.apps[0].methods, "test");

      await app.test({
        test_key: "something",
        password: ObfuscatedOptionString,
      });

      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          appOptions: {
            test_key: "something",
            password: "SECRET",
          },
        })
      );

      expect(spy).not.toHaveBeenCalledWith(
        expect.objectContaining({
          appOptions: {
            password: ObfuscatedOptionString,
          },
        })
      );
    });

    test("it will filter empty app options for the plugin's test method", async () => {
      const plugin = api.plugins.plugins.find(
        (plugin) => plugin.name === "test-plugin"
      );

      const spy = jest.spyOn(plugin.apps[0].methods, "test");

      await app.test({
        test_key: "my_key",
        password: "",
      });

      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          appOptions: {
            test_key: "my_key",
          },
        })
      );

      expect(spy).not.toHaveBeenCalledWith(
        expect.objectContaining({
          appOptions: {
            password: "",
          },
        })
      );
    });

    test("it can run a plugin's test method", async () => {
      testCounter = 0;
      const { error, success } = await app.test();
      expect(error).toBeUndefined();
      expect(success).toBe(true);
      expect(testCounter).toBe(1);
    });

    test("apps can return their parallelism", async () => {
      expect(await app.getParallelism()).toEqual(Infinity);
    });

    test("apps can checkAndUpdateParallelism and see when the limit would be exceeded", async () => {
      parallelism = 3;

      const A = await app.checkAndUpdateParallelism("incr");
      const B = await app.checkAndUpdateParallelism("incr");
      const C = await app.checkAndUpdateParallelism("incr");
      const D = await app.checkAndUpdateParallelism("incr");

      expect(A).toBe(true);
      expect(B).toBe(true);
      expect(C).toBe(true);
      expect(D).toBe(false);

      await app.checkAndUpdateParallelism("decr");
      const E = await app.checkAndUpdateParallelism("incr");
      expect(E).toBe(true);

      parallelism = Infinity;
    });

    test("deleting an app removes the parallelism key", async () => {
      const key = app.parallelismKey();
      const redis = api.redis.clients.client;
      expect(await redis.exists(key)).toBe(1);

      await app.destroy();
      expect(await redis.exists(key)).toBe(0);
    });
  });

  describe("RPC methods", () => {
    beforeAll(() => {
      jest.spyOn(App, "disconnect");
    });

    test("api.rpc.app.disconnect calls App.disconnect", async () => {
      await redis.doCluster("api.rpc.app.disconnect");
      await utils.sleep(1000);
      expect(App.disconnect).toHaveBeenCalledWith(undefined);
    });

    test("api.rpc.app.disconnect can be called with an App id", async () => {
      await redis.doCluster("api.rpc.app.disconnect", ["some_app_id"]);
      await utils.sleep(1000);
      expect(App.disconnect).toHaveBeenCalledWith("some_app_id");
    });
  });
});
