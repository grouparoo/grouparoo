import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooPlugin,
  PluginConnection,
  ProfileProperty,
  ProfilePropertyRule,
} from "../../../src";

let actionhero;

describe("tasks/profileProperty:importProfileProperties", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("profileProperty:importProfileProperties", () => {
    let testPluginConnection: PluginConnection;

    beforeAll(async () => {
      const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
        (a) => a.name === "@grouparoo/test-plugin"
      );

      testPluginConnection = testPlugin.connections.find(
        (c) => c.name === "test-plugin-import"
      );
      testPluginConnection.methods.profileProperties = async ({
        profilePropertyRule,
        profiles,
      }) => {
        const response = {};

        for (const i in profiles) {
          const profile = profiles[i];
          const data = {
            userId: new Date().getTime(),
            isVIP: true,
            email: `${profile.guid}@example.com`,
            firstName: "Mario",
            lastName: "Mario",
            ltv: 100.0,
            lastLoginAt: new Date(),
          };

          response[profile.guid] = data[profilePropertyRule.key];
        }

        return response;
      };
    });

    afterAll(() => {
      delete testPluginConnection.methods.profileProperties;
    });

    test("can be enqueued", async () => {
      await task.enqueue("profileProperty:importProfileProperties", {
        profileGuids: ["abc"],
        profilePropertyRuleGuid: "abc",
      });
      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperties"
      );
      expect(found.length).toEqual(1);
    });

    test("will import profile properties that have no dependencies", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        userId: [1],
        email: ["old@example.com"],
      });
      const property = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await property.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileGuids: [profile.guid],
        profilePropertyRuleGuid: property.profilePropertyRuleGuid,
      });

      // new value and state
      await property.reload();
      expect(property.state).toBe("ready");
      expect(property.rawValue).toBe(`${profile.guid}@example.com`);
    });

    test("will not import profile properties that have pending dependencies", async () => {
      const userIdRule = await ProfilePropertyRule.findOne({
        where: { key: "userId" },
      });

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        userId: [null],
        email: ["old@example.com"],
      });
      const property = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await property.update({ state: "pending" });

      const userIdProperty = await ProfileProperty.findOne({
        where: {
          profileGuid: profile.guid,
          profilePropertyRuleGuid: userIdRule.guid,
        },
      });
      await userIdProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileGuids: [profile.guid],
        profilePropertyRuleGuid: property.profilePropertyRuleGuid,
      });

      // no change
      await property.reload();
      expect(property.state).toBe("pending");
      expect(property.rawValue).toBe(`old@example.com`);
    });
  });
});
