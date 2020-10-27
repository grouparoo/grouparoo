import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { ProfileProperty, ProfilePropertyRule } from "../../../src";

let actionhero;

describe("tasks/profileProperty:import", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("profileProperty:import", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profileProperty:import", {
        profileGuids: ["abc"],
        profilePropertyRuleGuid: ["abc"],
      });
      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:import"
      );
      expect(found.length).toEqual(1);
    });

    test("will import profile properties that have no dependencies", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["old@example.com"] });
      const property = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await property.update({ state: "pending" });

      await specHelper.runTask("profileProperty:import", {
        profileGuids: [profile.guid],
        profilePropertyRuleGuid: [property.profilePropertyRuleGuid],
      });

      // new value and state
      await property.reload();
      expect(property.state).toBe("ready");
      expect(property.rawValue).toBe(`${profile.guid}@example.com`);
    });

    test("will not import profile properties that are missing dependencies", async () => {
      const ltvRule = await ProfilePropertyRule.findOne({
        where: { key: "ltv" },
      });

      // mock the method some rule is always required
      ProfilePropertyRule.prototype.dependsOn = jest.fn(async () => {
        return [ltvRule];
      });

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        email: ["old@example.com"],
      });
      const property = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await property.update({ state: "pending" });

      const ltvProperty = await await ProfileProperty.findOne({
        where: {
          profileGuid: profile.guid,
          profilePropertyRuleGuid: ltvRule.guid,
        },
      });
      await ltvProperty.update({ rawValue: null });

      await specHelper.runTask("profileProperty:import", {
        profileGuids: [profile.guid],
        profilePropertyRuleGuid: [property.profilePropertyRuleGuid],
      });

      // no change
      await property.reload();
      expect(property.state).toBe("pending");
      expect(property.rawValue).toBe(`old@example.com`);
    });
  });
});
