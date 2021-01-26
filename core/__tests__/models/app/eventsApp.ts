import { helper } from "@grouparoo/spec-helper";
import { Property, App } from "../../..";

describe("models/app", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("events app", () => {
    beforeAll(async () => {
      await helper.factories.properties();
    });

    test("an events app can be created", async () => {
      await App.create({ name: "events", type: "events" });
    });

    test("more than one events app cannot be created", async () => {
      await expect(
        App.create({ name: "events 2", type: "events" })
      ).rejects.toThrow(/cannot create a new events app, only 1 allowed/);
    });

    test("the appOptions for the events app only include unique properties", async () => {
      const app = await App.scope(null).findOne({ where: { type: "events" } });
      const appOptions = await app.appOptions();
      expect(appOptions.identifyingPropertyGuid.descriptions.sort()).toEqual([
        "email",
        "userId",
      ]);
    });

    test("the events app tests that there is a valid identifyingPropertyGuid", async () => {
      const app = await App.scope(null).findOne({ where: { type: "events" } });

      await app.setOptions({ identifyingPropertyGuid: "missing" });
      expect(await app.test()).toEqual({
        error: "cannot find identifying property (missing)",
        message: undefined,
        success: false,
      });

      const property = await Property.findOne({
        where: { key: "userId" },
      });
      await app.setOptions({ identifyingPropertyGuid: property.guid });
      expect(await app.test()).toEqual({
        error: undefined,
        message: "Events App OK",
        success: true,
      });
    });
  });
});
