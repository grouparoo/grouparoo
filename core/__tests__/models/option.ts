import { helper } from "@grouparoo/spec-helper";
import { Option, App } from "../../src";
import { OptionHelper } from "../../src/modules/optionHelper";

describe("models/option", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

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

    test("number option types are maintained", async () => {
      const opts = { fileId: "abc" };
      await OptionHelper.setOptions(app, opts);
      expect(await OptionHelper.getOptions(app)).toEqual(opts);
    });

    test("number option types are maintained", async () => {
      const opts = { fileId: 123.4 };
      await OptionHelper.setOptions(app, opts);
      expect(await OptionHelper.getOptions(app)).toEqual(opts);
    });

    test("number option types are maintained", async () => {
      const opts = { fileId: true };
      await OptionHelper.setOptions(app, opts);
      expect(await OptionHelper.getOptions(app)).toEqual(opts);
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
        const options = await app.getOptions();
        expect(options.fileId).toBe("abc123");
      });
    });
  });
});
