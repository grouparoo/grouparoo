import { helper } from "./../utils/specHelper";
import { App } from "./../../src/models/App";
import { Option } from "./../../src/models/Option";
import { Log } from "./../../src/models/Log";
import { plugin } from "./../../src/modules/plugin";
import app from "../factories/app";
let actionhero;

describe("models/app", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("an app can be created and options added", async () => {
    const app = new App({
      name: "test app",
      type: "test-plugin-app",
    });

    await app.save();

    expect(app.guid.length).toBe(40);
    expect(app.createdAt).toBeTruthy();
    expect(app.updatedAt).toBeTruthy();

    await app.setOptions({ fileGuid: "abc123" });
    const options = await app.getOptions();
    expect(options).toEqual({ fileGuid: "abc123" });

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
    await appOne.setOptions({ fileGuid: "abc123" });
    await appOne.update({ state: "ready" });

    await expect(appTwo.update({ name: "name" })).rejects.toThrow(
      /name "name" is already in use/
    );

    await appOne.destroy();
    await appTwo.destroy();
  });

  test("deleting an app removes the appOptions", async () => {
    const app = new App({
      name: "test app",
      type: "test-plugin-app",
    });

    await app.save();
    await app.setOptions({ fileGuid: "abc123" });

    let count = await Option.count({ where: { ownerGuid: app.guid } });
    expect(count).toBe(1);

    await app.destroy();
    count = await Option.count({ where: { ownerGuid: app.guid } });
    expect(count).toBe(0);
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
    await Log.destroy({ truncate: true });

    const app = await App.create({
      name: "test log app",
      type: "test-plugin-app",
    });

    await app.setOptions({ fileGuid: "abc123" });

    let log = await Log.findOne({
      where: { verb: "update", topic: "app" },
    });

    expect(log.data.options).toBe("** filtered **");
    expect(log.message).toMatch(/app "test log app" updated: updatedAt -> /);

    await app.destroy();
  });

  test("deleting a app creates a log entry", async () => {
    const app = await App.create({
      name: "bye app",
      type: "test-plugin-app",
      options: { fileGuid: "abc123" },
    });

    await app.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "app" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  describe("validations", () => {
    test("apps must be of a type defined by a plugin", async () => {
      const app = new App({
        name: "test app",
        type: "oh no",
        options: {},
      });

      await expect(app.save()).rejects.toThrow(
        /cannot find a pluginApp for type oh no/
      );
    });

    test("adding the wrong options for the app produces an error", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });

      await expect(app.setOptions({ thing: "stuff" })).rejects.toThrow(
        /fileGuid is required for a app of type test-plugin-app/
      );

      await expect(
        app.setOptions({ fileGuid: "abc123", otherThing: "123" })
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
      await app.setOptions({ fileGuid: "abc123" });
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

      await expect(app.save()).rejects.toThrow(/fileGuid is required/);
    });

    test("an app with a source cannot be deleted", async () => {
      const app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });

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
    let profilePropertyCount = 0;

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        icon: "/path/to/icon.svg",
        apps: [
          {
            name: "test-template-app",
            options: [{ key: "test_key", required: true }],
            methods: {
              test: async () => {
                testCounter++;
                return true;
              },
              appOptions: async () => {
                return { fileGuid: { type: "list", options: ["a", "b"] } };
              },
            },
          },
        ],
        connections: [
          {
            name: "import-from-test-template-app",
            description: "a test app connection",
            app: "test-template-app",
            direction: "import" as "import",
            options: [],
            methods: {
              profiles: async (schedule, app, run, limit, offset) => {
                return { importsCount: 0, nextHighWaterMark: "0" };
              },
              profileProperty: async (app, profilePropertyRule, profile) => {
                profilePropertyCount++;
                return { email: "test@example.com" };
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

    test("it can return the appOptions from the plugin", async () => {
      const options = await app.appOptions();
      expect(options).toEqual({
        fileGuid: { type: "list", options: ["a", "b"] },
      });
    });

    test("it can run a plugin's test method", async () => {
      const { error, result } = await app.test();
      expect(error).toBeUndefined();
      expect(result).toBe(true);
      expect(testCounter).toBe(1);
    });
  });
});
