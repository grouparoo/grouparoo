import { helper } from "@grouparoo/spec-helper";
import { Property } from "../../src";
import { AnyConfigurationObject } from "../../src/classes/codeConfig";
import { MustacheUtils } from "../../src/modules/mustacheUtils";

describe("modules/mustacheUtils", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
  });

  describe("#strictlyRender", () => {
    test("works with a valid string and data", () => {
      const result = MustacheUtils.strictlyRender("hello {{{value}}}", {
        value: "world",
      });
      expect(result).toEqual("hello world");
    });

    test("throws a good error message if data is missing", () => {
      expect(() =>
        MustacheUtils.strictlyRender("hello {{{value}}}", {
          foo: "world",
        })
      ).toThrow(/missing mustache key "value"/);
    });

    test("null values can be OK", () => {
      expect(() =>
        MustacheUtils.strictlyRender(
          "hello {{{value}}}",
          {
            value: null,
          },
          null,
          false
        )
      ).toThrow('null "value"');

      const result = MustacheUtils.strictlyRender(
        "hello {{{value}}}",
        {
          value: null,
        },
        null,
        true
      );
      expect(result).toEqual("hello ");
    });
  });

  describe("#getMustacheVariables", () => {
    test("the names of the mustache variables can be extracted", () => {
      const keys = MustacheUtils.getMustacheVariables(
        "I need a {{{foo}}}, a {{{ bar }}} and one more {{{    thing}}}"
      );
      expect(keys).toEqual(["foo", "bar", "thing"]);
    });
  });

  describe("#getMustacheVariablesAsPropertyIds", () => {
    test("it works with existing properties", async () => {
      const property = await Property.findOne({ where: { key: "userId" } });
      const string = "SELECT email from users where id = {{{ userId }}}";
      const ids = await MustacheUtils.getMustacheVariablesAsPropertyIds(string);
      expect(ids).toEqual([property.id]);
    });

    test("it works with additional codeConfig objects", async () => {
      const property = await Property.findOne({ where: { key: "userId" } });
      const string =
        "SELECT email from users where id = {{{ userId }}} and {{{ subscribed }}} = true";
      const configObjects: AnyConfigurationObject[] = [
        { class: "property", id: "subscribed_id", name: "subscribed" },
      ];
      const ids = await MustacheUtils.getMustacheVariablesAsPropertyIds(
        string,
        configObjects
      );
      expect(ids).toEqual([property.id, "subscribed_id"]);
    });
  });
});
