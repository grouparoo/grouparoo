import { helper } from "./../utils/specHelper";
import { App } from "./../../src/models/App";
import { Option } from "./../../src/models/Option";
import { Log } from "./../../src/models/Log";
import { plugin } from "./../../src/modules/plugin";
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
      const app = new App({
        name: "test app",
        type: "test-plugin-app",
      });

      await app.save();

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
            test: async () => {
              testCounter++;
              return true;
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

    test("it can run a plugin's test method", async () => {
      const { error, result } = await app.test();
      expect(error).toBeUndefined();
      expect(result).toBe(true);
      expect(testCounter).toBe(1);
    });
  });
});
