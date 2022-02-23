import { helper } from "@grouparoo/spec-helper";
import { Option, App, Destination, GrouparooModel, plugin } from "../../src";
import {
  OptionHelper,
  ObfuscatedOptionString,
} from "../../src/modules/optionHelper";

describe("models/option", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;

  beforeAll(async () => {
    model = await helper.factories.model();
  });

  test("an option must have a valid type", async () => {
    const option = Option.build({
      ownerId: "abc",
      ownerType: "app",
      key: "k",
      value: "string",
      type: "string",
    });

    await option.save(); // ok

    await option.update({ value: 123, type: "number" }); // ok
    await option.update({ value: true, type: "boolean" }); // ok

    await expect(option.update({ value: "foo", type: "foo" })).rejects.toThrow(
      /foo is not a valid type for an Option/
    );

    await expect(option.update({ value: "foo", type: null })).rejects.toThrow(
      /Option.type cannot be null/
    );

    await option.destroy();
  });

  describe("types", () => {
    let option: Option;

    beforeAll(async () => {
      option = await Option.create({
        ownerId: "abc",
        ownerType: "app",
        key: "k",
        value: "string",
        type: "string",
      });
    });

    async function _test(type: string, data: { in: any; out: any }[]) {
      for (const i in data) {
        const value = data[i].in;
        await option.update({ type, value });
        expect(option.typedValue()).toEqual(data[i].out);
      }
    }

    test("strings", async () => {
      await _test("string", [
        { in: "abc", out: "abc" },
        { in: "123", out: "123" },
        { in: 123, out: "123" },
        { in: "1.23", out: "1.23" },
        { in: 1.23, out: "1.23" },
        { in: true, out: "true" },
        { in: "true", out: "true" },
        { in: false, out: "false" },
        { in: "false", out: "false" },
        { in: "", out: "" },
      ]);
    });

    test("numbers", async () => {
      await _test("number", [
        { in: "abc", out: NaN },
        { in: "123", out: 123 },
        { in: 123, out: 123 },
        { in: "1.23", out: 1.23 },
        { in: 1.23, out: 1.23 },
        { in: true, out: NaN },
        { in: "true", out: NaN },
        { in: false, out: NaN },
        { in: "false", out: NaN },
        { in: "", out: NaN },
      ]);
    });

    test("booleans", async () => {
      await _test("boolean", [
        { in: "abc", out: false },
        { in: "123", out: false },
        { in: 123, out: false },
        { in: "1.23", out: false },
        { in: 1.23, out: false },
        { in: true, out: true },
        { in: "true", out: true },
        { in: false, out: false },
        { in: "false", out: false },
        { in: "", out: false },
      ]);
    });

    test("special case booleans", async () => {
      await _test("boolean", [
        { in: true, out: true },
        { in: false, out: false },
        { in: "1", out: true },
        { in: "0", out: false },
        { in: "true", out: true },
        { in: "false", out: false },
      ]);
    });
  });

  describe("optionHelper", () => {
    let app: App;
    beforeAll(async () => {
      app = await helper.factories.app();
    });

    test("string option types are maintained", async () => {
      const opts = { fileId: "abc" };
      await OptionHelper.setOptions(app, opts);
      expect(await OptionHelper.getOptions(app)).toEqual(opts);
    });

    test("number option types are maintained", async () => {
      const opts = { fileId: 123.4 };
      await OptionHelper.setOptions(app, opts);
      expect(await OptionHelper.getOptions(app)).toEqual(opts);
    });

    test("boolean option types are maintained", async () => {
      const opts = { fileId: true };
      await OptionHelper.setOptions(app, opts);
      expect(await OptionHelper.getOptions(app)).toEqual(opts);
    });

    test("empty options will be ignored", async () => {
      const opts = { fileId: "abcdba", password: "" };
      await OptionHelper.setOptions(app, opts);

      const options = await OptionHelper.getOptions(app);
      expect(options["fileId"]).toEqual(opts.fileId);
      expect(options["password"]).toBeUndefined();
    });

    test("I will see passwords by default for Apps", async () => {
      const opts = { fileId: "abc123", password: "SECRET" };
      await OptionHelper.setOptions(app, opts);
      expect(await OptionHelper.getOptions(app)).toEqual(opts);
    });

    test("I can choose to obfuscate sensitive options", async () => {
      const opts = {
        fileId: "abc123",
        password: "SECRET",
        oAuthToken: "ALSO_SECRET",
      };
      await OptionHelper.setOptions(app, opts);
      const options = await OptionHelper.getOptions(app, undefined, true);
      expect(options["fileId"]).toEqual(opts.fileId);
      expect(options["password"]).toEqual(ObfuscatedOptionString);
      expect(options["oAuthToken"]).toEqual(ObfuscatedOptionString);
    });

    test("If I try to set options with the ObfuscatedOptionString, the previous value will be used", async () => {
      const originalOpts = { fileId: "abc123", password: "SECRET" };
      await OptionHelper.setOptions(app, originalOpts);

      const opts = { fileId: "abc123", password: ObfuscatedOptionString };
      await OptionHelper.setOptions(app, opts);

      const options = await OptionHelper.getOptions(app);
      expect(options["fileId"]).toEqual(opts.fileId);
      expect(options["password"]).toEqual("SECRET");
    });

    describe("options from environment variables", () => {
      beforeAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = "abc123";
      });
      afterAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = undefined;
      });

      test("options can be set from an environment variable but not stored in the database", async () => {
        await OptionHelper.setOptions(app, { fileId: "TEST_OPTION" });
        expect(await app.getOptions(true)).toEqual({ fileId: "abc123" });
        expect(await app.getOptions(false)).toEqual({ fileId: "TEST_OPTION" });
      });

      test("options remain set with ENV re-set with ObfuscatedOptionString ", async () => {
        await OptionHelper.setOptions(app, { fileId: "TEST_OPTION" });
        expect(await app.getOptions(false)).toEqual({ fileId: "TEST_OPTION" });
        // shouldn't change value in DB from ENV
        await OptionHelper.setOptions(app, {
          fileId: ObfuscatedOptionString,
        });
        expect(await app.getOptions(true)).toEqual({ fileId: "abc123" });
        expect(await app.getOptions(false)).toEqual({ fileId: "TEST_OPTION" });
      });

      test("if the real value was set when previously an ENV string was used, use the ENV sting", async () => {
        await OptionHelper.setOptions(app, { fileId: "TEST_OPTION" });
        expect(await app.getOptions(false)).toEqual({ fileId: "TEST_OPTION" });
        await OptionHelper.setOptions(app, { fileId: "abc123" });
        expect(await app.getOptions(true)).toEqual({ fileId: "abc123" });
        expect(await app.getOptions(false)).toEqual({ fileId: "TEST_OPTION" });
      });
    });

    describe("default option values", () => {
      let appWithOptions: App;
      beforeAll(async () => {
        plugin.registerPlugin({
          name: "test-plugin",
          icon: "/path/to/icon.svg",
          apps: [
            {
              name: "test-template-app",
              displayName: "test-template-app",
              options: [
                {
                  key: "test_default_key",
                  defaultValue: "default value",
                  required: false,
                },
              ],
              methods: {
                test: async () => {
                  return { success: true };
                },
              },
            },
          ],
          connections: [
            {
              name: "export-from-test-template-app",
              displayName: "export-from-test-template-app",
              description: "a test app connection",
              apps: ["test-template-app"],
              direction: "export",
              syncModes: ["sync", "additive", "enrich"],
              options: [
                {
                  key: "test_default_key",
                  defaultValue: "default value",
                  required: false,
                },
              ],
              methods: {
                destinationOptions: async () => ({}),
                exportRecord: async () => ({ success: true }),
              },
            },
          ],
        });

        appWithOptions = await App.create({
          name: "test app",
          type: "test-template-app",
          options: {},
        });

        await appWithOptions.update({ state: "ready" });
      });

      afterAll(async () => {
        await appWithOptions.destroy();
      });

      test("it returns default values for app options that are not set", async () => {
        await appWithOptions.setOptions({});

        const options = await appWithOptions.getOptions();
        expect(options.test_default_key).toEqual("default value");
      });

      test("it returns saved values for app options that are set", async () => {
        await appWithOptions.setOptions({
          test_default_key: "Some custom value",
        });

        const options = await appWithOptions.getOptions();
        expect(options.test_default_key).toEqual("Some custom value");
      });

      test("it will memoize options as they are set", async () => {
        await appWithOptions.setOptions({
          test_default_key: "foo",
        });
        expect(appWithOptions.__options.length).toBe(1);
        expect(appWithOptions.__options[0].value).toBe("foo");
      });

      test("option owners are referenced by the instance type", async () => {
        const randomOption = await Option.create({
          ownerId: appWithOptions.id,
          ownerType: "foo",
          type: "string",
          key: "test_default_key",
          value: "foo",
        });

        await appWithOptions.setOptions({
          test_default_key: "newValue",
        });

        expect((await randomOption.reload()).value).toEqual("foo");

        expect(await appWithOptions.getOptions()).toEqual({
          test_default_key: "newValue",
        });
        await appWithOptions.setOptions({});

        expect((await randomOption.reload()).value).toEqual("foo");

        await randomOption.destroy();
      });

      test("it will use memoized options if they exist", async () => {
        await appWithOptions.setOptions({
          test_default_key: "foo",
        });

        appWithOptions.__options = [
          Option.build({
            ownerId: appWithOptions.id,
            ownerType: "app",
            key: "foo",
            value: "fake",
            type: "string",
          }),
        ];
        const options = await appWithOptions.getOptions();
        expect(options["foo"]).toBe("fake");
      });

      describe("connection options", () => {
        let connection: Destination;
        beforeAll(async () => {
          connection = await Destination.create({
            name: "destination - default option values",
            type: "export-from-test-template-app",
            syncMode: "sync",
            appId: appWithOptions.id,
            modelId: model.id,
          });
        });

        afterAll(async () => {
          await connection.destroy();
        });

        test("it returns default values for connection options that are not set", async () => {
          await connection.setOptions({});

          const options = await connection.getOptions();
          expect(options.test_default_key).toEqual("default value");
        });

        test("it returns saved values for connection options that are set", async () => {
          await connection.setOptions({
            test_default_key: "Some custom value",
          });

          const options = await connection.getOptions();
          expect(options.test_default_key).toEqual("Some custom value");
        });
      });
    });
  });
});
