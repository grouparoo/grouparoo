import { Profile, Group, Destination, GrouparooPlugin } from "../../../../src"; // `@grouparoo/core`
import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";

let actionhero; // the running Grouparoo process

function relaxedSnapshot(
  object: { [key: string]: any },
  fieldMatches = [/^guid$/, /^.+Guid$/, /^.+At$/]
) {
  const matcherExceptions: { [key: string]: any } = {};

  function clean(object, key) {
    if (Object.keys(object[key]).length === 0) delete object[key];
  }

  function resolve(key) {
    let matched = false;
    fieldMatches.forEach((m) => (key.match(m) ? (matched = true) : null));

    if (matched) {
      if (object[key] instanceof Date) {
        matcherExceptions[key] = expect.any(Date);
      } else if (typeof object[key] === "number") {
        matcherExceptions[key] = expect.any(Number);
      } else if (typeof object[key] === "string") {
        matcherExceptions[key] = expect.any(String);
      } else if (typeof object[key] === "boolean") {
        matcherExceptions[key] = expect.any(Boolean);
      }
    }
  }

  for (const key in object) {
    const item = object[key];
    if (item === null || item === undefined) {
      continue;
    } else if (Array.isArray(item)) {
      matcherExceptions[key] = item
        .map((e) =>
          typeof e === "object" && !(e instanceof Date)
            ? relaxedSnapshot(e, fieldMatches)
            : resolve(key)
        )
        .filter((e) => e !== undefined);
      clean(matcherExceptions, key);
    } else if (typeof item === "object" && !(item instanceof Date)) {
      matcherExceptions[key] = {};
      for (const j in item) {
        matcherExceptions[key][j] = relaxedSnapshot(item[j], fieldMatches);
        clean(matcherExceptions[key], j);
      }
      clean(matcherExceptions, key);
    } else {
      resolve(key);
    }
  }

  return matcherExceptions;
}

describe("test grouparoo profiles", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    // we need to ensure that we have static results for the import to snapshot
    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );
    const testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );
    testPluginConnection.methods.profileProperty = async ({ property }) => {
      const data = {
        userId: [100],
        isVIP: [true],
        email: [`example@example.com`],
        firstName: ["Mario"],
        lastName: ["Mario"],
        ltv: [100.0],
        lastLoginAt: [new Date(0)],
        purchases: ["hat", "mushroom"],
        purchaseAmounts: [100, 200],
      };

      return data[property.key];
    };
  });

  describe("within a mock environment", () => {
    let profile: Profile;
    let group: Group;
    let destination: Destination;

    beforeAll(async () => {
      // make properties
      await helper.factories.properties();

      // make a group
      group = await helper.factories.group();
      await group.update({ type: "calculated", name: "test group" });
      await group.setRules([
        { key: "email", match: "%@example.com", operation: { op: "like" } },
      ]);

      // make a destination
      destination = await helper.factories.destination();
      await destination.update({ name: "test destination" });
      await destination.setOptions({ table: "users" });
      await destination.setMapping({
        "primary-id": "userId",
        email: "email",
        ltv: "ltv",
        isVIP: "isVIP",
      });
      await destination.setDestinationGroupMemberships({
        [group.guid]: "remote_group_name",
      });
      await destination.trackGroup(group);

      // make ready
      await group.update({ state: "ready" });
      await destination.update({ state: "ready" });

      // make the profile
      const response = await Profile.findOrCreateByUniqueProfileProperties({
        userId: ["person1@example.com"],
      });
      profile = response.profile;

      // import & export the profile
      await profile.sync();
    });

    test("profile properties match the snapshot", async () => {
      const properties = await profile.simplifiedProperties();
      expect(properties).toMatchSnapshot();
    });

    test("groups match the snapshot", async () => {
      const groups = await profile.$get("groups");
      const groupApiData = await Promise.all(groups.map((g) => g.apiData()));

      expect(groupApiData.length).toEqual(1);

      expect(groupApiData[0]).toMatchSnapshot({
        guid: expect.stringMatching(/^grp_/),
        createdAt: expect.any(Number),
        updatedAt: expect.any(Number),
        nextCalculatedAt: expect.any(Number),
      });
    });

    test("potential exports match the snapshot", async () => {
      const _exports = await profile.export(true, [], false);
      const exportApiData = await Promise.all(
        _exports.map((e) => e.apiData(false))
      );
      expect(exportApiData.length).toEqual(1);

      expect(exportApiData[0]).toMatchSnapshot({
        profileGuid: expect.stringMatching(/^pro_/),
        startedAt: expect.any(Number),
        newProfileProperties: expect.objectContaining({
          email: expect.stringMatching(/@example.com/),
          "primary-id": expect.any(Number),
          isVIP: true,
          ltv: 100,
        }),
        oldProfileProperties: expect.objectContaining({
          email: expect.stringMatching(/@example.com/),
          "primary-id": expect.any(Number),
          isVIP: true,
          ltv: 100,
        }),
      });
    });

    test("the profile can be snapshot-ed", async () => {
      const snapshot = await profile.snapshot();
      expect(snapshot).toMatchSnapshot(relaxedSnapshot(snapshot));
    });
  });
});
