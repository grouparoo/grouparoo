import { helper } from "@grouparoo/spec-helper";
import { ProfilePropertyRule } from "../../../src/models/ProfilePropertyRule";
import { App } from "../../../src/models/App";
let actionhero;

describe("models/app", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("events app", () => {
    beforeAll(async () => {
      await helper.factories.profilePropertyRules();
    });

    test("an events app can be created", async () => {
      await App.create({ name: "events", type: "events" });
    });

    test("more than one events app cannot be created", async () => {
      await expect(
        App.create({ name: "events 2", type: "events" })
      ).rejects.toThrow(/cannot create a new events app, only 1 allowed/);
    });

    test("the appOptions for the events app only include unique profile property rules", async () => {
      const app = await App.scope(null).findOne({ where: { type: "events" } });
      const appOptions = await app.appOptions();
      expect(
        appOptions.identifyingProfilePropertyRuleGuid.descriptions.sort()
      ).toEqual(["email", "userId"]);
    });

    test("the events app tests that there is a valid identifyingProfilePropertyRuleGuid", async () => {
      const app = await App.scope(null).findOne({ where: { type: "events" } });

      await app.setOptions({ identifyingProfilePropertyRuleGuid: "missing" });
      expect(await app.test()).toEqual({
        error: "cannot find identifying profile property rule (missing)",
        message: undefined,
        success: false,
      });

      const rule = await ProfilePropertyRule.findOne({
        where: { key: "userId" },
      });
      await app.setOptions({ identifyingProfilePropertyRuleGuid: rule.guid });
      expect(await app.test()).toEqual({
        error: undefined,
        message: "Events App OK",
        success: true,
      });
    });
  });
});
