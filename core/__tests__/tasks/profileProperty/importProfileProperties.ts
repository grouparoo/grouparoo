import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Op } from "sequelize";
import {
  GrouparooPlugin,
  PluginConnection,
  ProfileProperty,
  Property,
} from "../../../src";

describe("tasks/profileProperty:importProfileProperties", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let userIdCounter = 1;
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
        property,
        profiles,
      }) => {
        const response = {};

        for (const i in profiles) {
          const profile = profiles[i];
          const data = {
            userId: userIdCounter++,
            isVIP: true,
            email: `${profile.id}@example.com`,
            firstName: "Mario",
            lastName: "Mario",
            ltv: 100.0,
            lastLoginAt: new Date(),
          };

          response[profile.id] = data[property.key];
        }

        return response;
      };
    });

    afterAll(() => {
      delete testPluginConnection.methods.profileProperties;
    });

    test("can be enqueued", async () => {
      await task.enqueue("profileProperty:importProfileProperties", {
        profileIds: ["abc"],
        propertyId: "abc",
      });
      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:importProfileProperties"
      );
      expect(found.length).toEqual(1);
    });

    test("does not throw if the profile or property cannot be found", async () => {
      const property = await Property.findOne();
      const profile = await helper.factories.profile();

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: ["missing"],
        propertyId: "missing",
      });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [profile.id],
        propertyId: "missing",
      });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: ["missing"],
        propertyId: property.id,
      });

      await profile.destroy();
    });

    test("will import profile properties that have no dependencies", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        userId: [1],
        email: ["old@example.com"],
      });
      const profileProperty = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await profileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [profile.id],
        propertyId: profileProperty.propertyId,
      });

      // new value and state
      await profileProperty.reload();
      expect(profileProperty.state).toBe("ready");
      expect(profileProperty.rawValue).toBe(`${profile.id}@example.com`);
    });

    test("will not import profile properties that have pending dependencies", async () => {
      const userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({
        userId: [null],
        email: ["old@example.com"],
      });
      const profileProperty = await ProfileProperty.findOne({
        where: { rawValue: "old@example.com" },
      });
      await profileProperty.update({ state: "pending" });

      const userIdProfileProperty = await ProfileProperty.findOne({
        where: {
          profileId: profile.id,
          propertyId: userIdProperty.id,
        },
      });
      await userIdProfileProperty.update({ state: "pending" });

      await specHelper.runTask("profileProperty:importProfileProperties", {
        profileIds: [profile.id],
        propertyId: profileProperty.propertyId,
      });

      // no change
      await profileProperty.reload();
      expect(profileProperty.state).toBe("pending");
      expect(profileProperty.rawValue).toBe(`old@example.com`);

      // sendAt is slightly in the future from (now - 5 minutes) to try again soon
      expect(profileProperty.startedAt.getTime()).toBeGreaterThan(
        new Date().getTime() - 1000 * 60 * 5
      );
      expect(profileProperty.startedAt.getTime()).toBeLessThan(
        new Date().getTime()
      );
    });

    test("can be run for the same profile more than once without deadlock", async () => {
      const profileA = await helper.factories.profile();
      const profileB = await helper.factories.profile();
      const profileC = await helper.factories.profile();

      await ProfileProperty.update(
        { state: "pending" },
        {
          where: {
            profileId: { [Op.in]: [profileA.id, profileB.id, profileC.id] },
          },
        }
      );

      const properties = await Property.findAll();

      // run once to set userId
      for (const property of properties) {
        await specHelper.runTask("profileProperty:importProfileProperties", {
          profileIds: [profileA.id, profileB.id, profileC.id],
          propertyId: property.id,
        });
      }

      // run again for other properties
      for (const property of properties) {
        await specHelper.runTask("profileProperty:importProfileProperties", {
          profileIds: [profileA.id, profileB.id, profileC.id],
          propertyId: property.id,
        });
      }

      const profileProperties = await profileA.properties();
      expect(profileProperties.firstName.values).toEqual(["Mario"]);
      expect(profileProperties.lastName.values).toEqual(["Mario"]);
    });
  });
});
