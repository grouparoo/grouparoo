import { helper } from "./../utils/specHelper";
import { Profile } from "./../../src/models/Profile";
import { ProfileProperty } from "./../../src/models/ProfileProperty";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import { Group } from "./../../src/models/Group";
import { GroupMember } from "./../../src/models/GroupMember";
import { App } from "./../../src/models/App";
import { Source } from "./../../src/models/Source";
import { plugin } from "./../../src/modules/plugin";

let actionhero;

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].value;
  });
  return simpleProfileProperties;
}

describe("models/profile", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("a profile can be created", async () => {
    const profile = new Profile();

    await profile.save();

    expect(profile.guid.length).toBe(40);
    expect(profile.createdAt).toBeTruthy();
    expect(profile.updatedAt).toBeTruthy();
  });

  it("profiles can retrieve related log messages with custom messages", async () => {
    const profile = await Profile.findOne();
    const logs = await profile.$get("logs");
    expect(logs.length).toBe(1);
    expect(logs[0].topic).toBe("profile");
    expect(logs[0].verb).toBe("create");
    expect(logs[0].message).toBe("profile created");
  });

  it("deleting a profile creates a custom log messages", async () => {
    const profile = await Profile.create();
    await profile.destroy();
    const logs = await profile.$get("logs", { order: [["createdAt", "asc"]] });
    expect(logs.length).toBe(2);
    expect(logs[1].topic).toBe("profile");
    expect(logs[1].verb).toBe("destroy");
    expect(logs[1].message).toBe("profile destroyed");
  });

  describe("findOrCreateByUniqueProfileProperties", () => {
    let source: Source;
    let toad: Profile;
    let emailRule: ProfilePropertyRule;
    let userIdRule: ProfilePropertyRule;
    let colorRule: ProfilePropertyRule;
    let houseRule: ProfilePropertyRule;

    beforeAll(async () => {
      source = await helper.factories.source();
      await source.setOptions({ table: "test table" });

      emailRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "email",
        type: "email",
        unique: true,
      });

      userIdRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "userId",
        type: "integer",
        unique: true,
      });

      colorRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "color",
        type: "string",
        unique: false,
      });

      houseRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "house",
        type: "string",
        unique: false,
      });

      const profile = await Profile.create();
      await profile.addOrUpdateProperties({
        email: "toad@example.com",
        color: "orange",
      });

      toad = profile;
    });

    afterAll(async () => {
      await toad.destroy();
      await userIdRule.destroy();
      await emailRule.destroy();
      await colorRule.destroy();
      await houseRule.destroy();
      await source.destroy();
    });

    test("it can find the profile via email", async () => {
      const {
        profile,
        isNew,
      } = await Profile.findOrCreateByUniqueProfileProperties({
        email: "toad@example.com",
        color: "orange",
      });

      expect(isNew).toBe(false);
      expect(profile.guid).toBe(toad.guid);
    });

    test("it cannot find the profile by color and will create a new one", async () => {
      const {
        profile,
        isNew,
      } = await Profile.findOrCreateByUniqueProfileProperties({
        email: "luigi@example.com",
        color: "green",
      });

      expect(isNew).toBe(true);
      expect(profile.guid).not.toBe(toad.guid);
    });

    test("it will throw an error if no unique profile properties are included", async () => {
      try {
        await Profile.findOrCreateByUniqueProfileProperties({
          color: "orange",
        });
        throw new Error("should not get here");
      } catch (error) {
        expect(error.message).toBe(
          'there are no unique profile properties provided in {"color":"orange"}'
        );
      }
    });

    test("it will lock when creating new profiles so duplicate profiles are not created", async () => {
      const responseA = await Profile.findOrCreateByUniqueProfileProperties({
        email: "bowser@example.com",
        color: "green",
      });

      const responseB = await Profile.findOrCreateByUniqueProfileProperties({
        email: "bowser@example.com",
        house: "castle",
      });

      expect(responseA.profile.guid).toEqual(responseB.profile.guid);
      expect(responseA.isNew).toBe(true);
      expect(responseB.isNew).toBe(false);
    });

    test("it will merge overlapping unique profile properties and not store non-unique properties", async () => {
      const responseA = await Profile.findOrCreateByUniqueProfileProperties({
        email: "koopa@example.com",
        userId: 99,
      });

      const responseB = await Profile.findOrCreateByUniqueProfileProperties({
        userId: 99,
        house: "castle",
      });

      expect(responseA.profile.guid).toEqual(responseB.profile.guid);
      expect(responseA.isNew).toBe(true);
      expect(responseB.isNew).toBe(false);

      const profile = responseB.profile;
      const properties = await profile.properties();
      expect(properties.email).toBeTruthy();
      expect(properties.userId).toBeTruthy();
      expect(properties.house).toBeUndefined();
    });

    test("properties will include the value, type, unique, and timestamps", async () => {
      const properties = await toad.properties();
      expect(properties.email.type).toBe("email");
      expect(properties.email.unique).toBe(true);
      expect(properties.email.value).toBe("toad@example.com");
      expect(properties.email.createdAt).toBeTruthy();
      expect(properties.email.updatedAt).toBeTruthy();
    });
  });

  describe("profile property helpers", () => {
    let profile: Profile;
    beforeAll(async () => {
      profile = new Profile();
      await profile.save();
    });

    test("it cannot add a profile property that is not defined", async () => {
      try {
        await profile.addOrUpdateProperty({ email: "luigi@example.com" });
        throw new Error("should not get here");
      } catch (error) {
        expect(error.toString()).toMatch(
          /cannot find a profile property rule for key email/
        );
      }
    });

    describe("with profilePropertyRules", () => {
      let source: Source;

      beforeAll(async () => {
        const source = await helper.factories.source();
        await source.setOptions({ table: "test table" });

        const rules = await ProfilePropertyRule.findAll();

        await ProfilePropertyRule.create({
          sourceGuid: source.guid,
          key: "email",
          type: "string",
        });
        await ProfilePropertyRule.create({
          sourceGuid: source.guid,
          key: "firstName",
          type: "string",
        });
        await ProfilePropertyRule.create({
          sourceGuid: source.guid,
          key: "lastName",
          type: "string",
        });
        await ProfilePropertyRule.create({
          sourceGuid: source.guid,
          key: "color",
          type: "string",
        });
        await ProfilePropertyRule.create({
          sourceGuid: source.guid,
          key: "userId",
          type: "integer",
        });
      });

      afterAll(async () => {
        await ProfilePropertyRule.destroy({ truncate: true });
        await source.destroy();
      });

      test("it can add a new profile property when the schema is prepared", async () => {
        await profile.addOrUpdateProperty({ email: "luigi@example.com" });
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: "luigi@example.com",
        });
      });

      test("it can add properties in bulk with proper timestamps", async () => {
        await profile.addOrUpdateProperties({
          firstName: "Luigi",
          lastName: "Mario",
          color: "green",
          userId: 123,
        });

        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: "luigi@example.com",
          firstName: "Luigi",
          lastName: "Mario",
          color: "green",
          userId: 123,
        });

        expect(profile.createdAt.getTime()).toBeLessThan(
          properties.color.createdAt.getTime()
        );
        expect(profile.updatedAt.getTime()).toBeLessThan(
          properties.color.updatedAt.getTime()
        );
      });

      test("it can update an existing property", async () => {
        await profile.addOrUpdateProperty({ email: "luigi-again@example.com" });
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: "luigi-again@example.com",
          firstName: "Luigi",
          lastName: "Mario",
          color: "green",
          userId: 123,
        });
      });

      test("it will ignore the property _meta, as it is reserved", async () => {
        await profile.addOrUpdateProperty({ _meta: "bla" });
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)._meta).toBeFalsy();
      });

      test("it can remove an existing property", async () => {
        await profile.removeProperty("email");
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          firstName: "Luigi",
          lastName: "Mario",
          color: "green",
          userId: 123,
        });
      });

      test("no problems arise when re-adding a deleted property", async () => {
        let properties = await profile.properties();
        expect(properties.email).toBeUndefined();
        await profile.addOrUpdateProperty({ email: "luigi@example.com" });
        properties = await profile.properties();
        expect(properties.email.value).toBe("luigi@example.com");
      });

      test("it will not raise when trying to remove a non-existent property", async () => {
        await profile.removeProperty("funky");
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: "luigi@example.com",
          firstName: "Luigi",
          lastName: "Mario",
          color: "green",
          userId: 123,
        });
      });

      test("adding a profile property touches the profile", async () => {
        await profile.removeProperty("email");

        await profile.reload();
        const oldUpdatedAt = profile.updatedAt.getTime();
        await helper.sleep(1);
        await profile.addOrUpdateProperty({ email: "luigi@example.com" });
        await profile.reload();
        const newUpdatedAt = profile.updatedAt.getTime();
        expect(newUpdatedAt).toBeGreaterThan(oldUpdatedAt);
      });

      test("editing a profile property touches the profile", async () => {
        await profile.reload();
        const oldUpdatedAt = profile.updatedAt.getTime();
        await helper.sleep(1);
        await profile.addOrUpdateProperty({ email: "luigiAgain@example.com" });
        await profile.reload();
        const newUpdatedAt = profile.updatedAt.getTime();
        expect(newUpdatedAt).toBeGreaterThan(oldUpdatedAt);
      });

      test("editing a profile property with a no-op will not touch the profile", async () => {
        await profile.reload();
        const oldUpdatedAt = profile.updatedAt.getTime();
        await helper.sleep(1);
        await profile.addOrUpdateProperty({ email: "luigiAgain@example.com" });
        await profile.reload();
        const newUpdatedAt = profile.updatedAt.getTime();
        expect(newUpdatedAt).toBe(oldUpdatedAt);
      });

      test("removing a profile property touches the profile", async () => {
        await profile.reload();
        const oldUpdatedAt = profile.updatedAt.getTime();
        await helper.sleep(1);
        await profile.removeProperty("email");
        await profile.reload();
        const newUpdatedAt = profile.updatedAt.getTime();
        expect(newUpdatedAt).toBeGreaterThan(oldUpdatedAt);

        await profile.addOrUpdateProperty({ email: "luigi@example.com" });
      });

      test("deleting the profile also deletes the properties", async () => {
        const beforeCount = await ProfileProperty.count({
          where: { profileGuid: profile.guid },
        });
        expect(beforeCount).toBe(5);
        await profile.destroy();
        const afterCount = await ProfileProperty.count({
          where: { profileGuid: profile.guid },
        });
        expect(afterCount).toBe(0);
      });
    });
  });

  describe("with a manual group", () => {
    let profile: Profile;
    let group: Group;

    beforeAll(async () => {
      group = await Group.create({
        name: "test group",
        type: "manual",
      });

      profile = await Profile.create();
      await group.addProfile(profile);
    });

    test("the profile can return the groups it is a member of", async () => {
      const groups = await profile.$get("groups");
      expect(groups.length).toBe(1);
      expect(groups[0].name).toBe("test group");
    });

    test("calculating memberships will include the manual group", async () => {
      const groups = await profile.updateGroupMembership();
      expect(groups[group.guid]).toEqual(true);
    });

    test("deleting the profile will also delete the groupMember", async () => {
      let count = await GroupMember.count({ where: { groupGuid: group.guid } });
      expect(count).toBe(1);

      await profile.destroy();

      count = await GroupMember.count({ where: { groupGuid: group.guid } });
      expect(count).toBe(0);
    });
  });

  describe("with a calculated group", () => {
    let group: Group;
    let profile: Profile;
    let app: App;
    let source: Source;
    let emailRule: ProfilePropertyRule;

    beforeAll(async () => {
      app = await App.create({
        name: "test app",
        type: "test-plugin-app",
        options: {},
      });

      source = await Source.create({
        appGuid: app.guid,
        name: "test import source",
        type: "test-plugin-import",
      });
      await source.setOptions({ table: "test table" });

      emailRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "email",
        type: "string",
        unique: true,
      });

      group = await helper.factories.group({
        name: "calculated-group",
        type: "calculated",
      });

      profile = await Profile.create();
      await profile.addOrUpdateProperties({
        email: "mario@example.com",
      });
    });

    afterAll(async () => {
      const members = await group.$get("groupMembers");
      await Promise.all(members.map((m) => m.destroy()));
      await group.destroy();
      await emailRule.destroy();
      await source.destroy();
      await app.destroy();
    });

    describe("#updateGroupMembership", () => {
      test("profiles can re-calculate their group memberships", async () => {
        let members = await group.$get("groupMembers");
        expect(members.length).toBe(0);

        await group.update({ matchType: "all" });
        await group.setRules([
          { key: "email", match: "%@example.com", op: "iLike" },
        ]);

        const groupMemberships = await profile.updateGroupMembership();
        expect(groupMemberships[group.guid]).toBe(true);

        members = await group.$get("groupMembers");
        expect(members.length).toBe(1);
        expect(members[0].profileGuid).toBe(profile.guid);
      });
    });
  });

  describe("#import", () => {
    let emailRule: ProfilePropertyRule;
    let colorRule: ProfilePropertyRule;
    let app: App;
    let source: Source;

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
            options: [],
            test: async () => {
              return true;
            },
          },
        ],
        connections: [
          {
            name: "import-from-test-template-app",
            description: "a test app connection",
            app: "test-template-app",
            direction: "import" as "import",
            options: [],
            methods: {
              profileProperty: async (
                app,
                appOptions,
                source,
                sourceOptions,
                sourceMapping,
                profilePropertyRule,
                profilePropertyRuleOptions
              ) => {
                if (profilePropertyRule.key === "color") {
                  return { color: "pink" };
                }
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app",
        type: "test-template-app",
        options: {},
      });

      source = await Source.create({
        appGuid: app.guid,
        name: "test import source",
        type: "import-from-test-template-app",
      });

      emailRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "email",
        type: "string",
        unique: true,
        passive: false,
      });

      colorRule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "color",
        type: "string",
        unique: false,
        passive: false,
      });
    });

    afterAll(async () => {
      await app.destroy();
      await emailRule.destroy();
      await source.destroy();
      await colorRule.destroy();
    });

    test("it can pull profile properties in from all connected apps", async () => {
      const profile = await Profile.create();
      await profile.addOrUpdateProperties({ email: "peach@example.com" });
      let properties = await profile.properties();
      expect(simpleProfileValues(properties)).toEqual({
        email: "peach@example.com",
      });

      await profile.import();

      properties = await profile.properties();
      expect(simpleProfileValues(properties)).toEqual({
        email: "peach@example.com",
        color: "pink",
      });
    });

    test("after importing, all missing profile property rules will have created a null profile property", async () => {
      const profile = await Profile.create();
      let properties = await profile.properties();
      expect(Object.keys(properties)).toEqual([]);

      await profile.import();

      properties = await profile.properties();
      expect(simpleProfileValues(properties)).toEqual({
        email: null,
        color: "pink",
      });
    });
  });

  describe("#updateGroupMembership", () => {});
});
