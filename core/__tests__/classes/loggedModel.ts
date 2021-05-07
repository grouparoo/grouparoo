import { helper } from "@grouparoo/spec-helper";
import { App } from "../../src";

describe("classes/loggedModel", () => {
  helper.grouparooTestServer({ truncate: true });

  beforeAll(async () => {
    await helper.truncate();
  });

  describe("IDs", () => {
    test("without an ID, a UUID will be used and prefix added", async () => {
      const app = new App();
      App.generateId(app);
      expect(app.id).toMatch(/^app_/);
      expect(app.id.length).toBe(40);
    });

    test("an ID can be provided", () => {
      const app = new App();
      app.id = "custom_id";
      App.generateId(app);
      expect(app.id).toEqual("custom_id");
    });

    test("ID validation", async () => {
      [
        "foo",
        "foo_underscore",
        "foo-dash",
        "fooUpperLower",
        "foo-with-numb3r",
        "a".repeat(191),
      ].forEach((id) => {
        const app = new App();
        app.id = id;
        expect(() => App.validateId(app)).not.toThrow();
      });

      [
        "foo w space",
        "foo%",
        "foo/",
        "foo\\",
        "foo/",
        "foo!",
        "foo~",
        "foo,stuff",
        "foo:stuff",
        "foo;stuff",
        "foo$stuff",
        "a".repeat(192),
      ].forEach((id) => {
        const app = new App();
        app.id = id;
        expect(() => App.validateId(app)).toThrow(/invalid id/);
      });
    });
  });
});
