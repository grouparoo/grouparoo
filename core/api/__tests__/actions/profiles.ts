import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Profile } from "./../../src/models/Profile";
import { Group } from "./../../src/models/Group";
import { Team } from "./../../src/models/Team";
import { TeamMember } from "./../../src/models/TeamMember";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
let actionhero, api;
let guid;

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].value;
  });
  return simpleProfileProperties;
}

describe("actions/profiles", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    helper.disableTestPluginImport();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("writer signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a writer can create a new profile and properties", async () => {
      connection.params = {
        csrfToken,
        properties: {
          userId: 123,
          email: "luigi@example.com",
          firstName: "Luigi",
          lastName: "Mario",
        },
      };
      const { error, profile } = await specHelper.runAction(
        "profile:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.guid).toBeTruthy();
      expect(simpleProfileValues(profile.properties)).toEqual({
        userId: 123,
        email: "luigi@example.com",
        firstName: "Luigi",
        lastName: "Mario",
        isVIP: null,
        lastLoginAt: null,
        ltv: null,
      });
      guid = profile.guid;
    });

    test("a writer can edit a property of a profile", async () => {
      connection.params = {
        csrfToken,
        guid,
        properties: { userId: 999 },
      };
      const { error, profile } = await specHelper.runAction(
        "profile:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(simpleProfileValues(profile.properties).userId).toBe(999);
    });

    test("a writer can add a new property to a profile", async () => {
      connection.params = {
        csrfToken,
        guid,
        properties: {
          ltv: 123.45,
        },
      };
      const { error, profile } = await specHelper.runAction(
        "profile:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.guid).toBeTruthy();
      expect(simpleProfileValues(profile.properties)).toEqual({
        userId: 999,
        email: "luigi@example.com",
        firstName: "Luigi",
        lastName: "Mario",
        ltv: 123.45,
        isVIP: null,
        lastLoginAt: null,
      });
    });

    test("a writer can remove a new property from a profile", async () => {
      connection.params = {
        csrfToken,
        guid,
        removedProperties: ["ltv"],
      };
      const { error, profile } = await specHelper.runAction(
        "profile:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.guid).toBeTruthy();
      expect(simpleProfileValues(profile.properties)).toEqual({
        userId: 999,
        email: "luigi@example.com",
        firstName: "Luigi",
        lastName: "Mario",
        isVIP: null,
        ltv: null,
        lastLoginAt: null,
      });
    });

    test("a writer can list all the profiles", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, profiles, total } = await specHelper.runAction(
        "profiles:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(profiles.length).toBe(1);
      expect(simpleProfileValues(profiles[0].properties).userId).toBe(999);
      expect(total).toBe(1);
    });

    test("a writer can get autocomplete results from profile properties", async () => {
      const emailRule = await ProfilePropertyRule.findOne({
        where: { key: "email" },
      });

      connection.params = {
        csrfToken,
        profilePropertyRuleGuid: emailRule.guid,
        match: "@example.com",
      };
      const { error, profileProperties } = await specHelper.runAction(
        "profiles:autocompleteProfileProperty",
        connection
      );

      expect(error).toBeUndefined();
      expect(profileProperties).toEqual(["luigi@example.com"]);
    });

    test("an administrator can import and update all profiles", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, run } = await specHelper.runAction(
        "profiles:importAndUpdate",
        connection
      );
      expect(error).toBeUndefined();
      expect(run.guid).toBeTruthy();

      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      const rulesCount = await ProfilePropertyRule.count();
      expect(foundTasks.length).toBe(rulesCount + 1);
    });

    test("a writer can destroy a profile", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, success } = await specHelper.runAction(
        "profile:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });

    describe("groups", () => {
      let group;
      let profile;

      beforeAll(async () => {
        group = new Group({
          name: "new group",
          type: "manual",
        });
        await group.save();
        await group.update({ state: "ready" });
      });

      beforeAll(async () => {
        profile = new Profile();
        await profile.save();
      });

      afterAll(async () => {
        await group.destroy();
        await profile.destroy();
      });

      test("a writer can add a profile to a manual group", async () => {
        connection.params = {
          csrfToken,
          guid: group.guid,
          profileGuid: profile.guid,
        };
        const { error, success } = await specHelper.runAction(
          "group:addProfile",
          connection
        );
        expect(error).toBeUndefined();
        expect(success).toBeTruthy();
      });

      test("a writer cannot add a profile to a calculated group", async () => {
        const calculatedGroup = new Group({
          name: "robot group",
          type: "calculated",
        });
        await calculatedGroup.save();

        connection.params = {
          csrfToken,
          guid: calculatedGroup.guid,
          profileGuid: profile.guid,
        };
        const { error } = await specHelper.runAction(
          "group:addProfile",
          connection
        );
        expect(error.message).toMatch(
          /only manual groups can have membership manipulated by this action/
        );
        await calculatedGroup.destroy();
      });

      test("the profile lists group memberships", async () => {
        connection.params = {
          csrfToken,
          guid: profile.guid,
        };
        const { error, groups } = await specHelper.runAction(
          "profile:view",
          connection
        );
        expect(error).toBeUndefined();
        expect(groups.length).toBe(1);
        expect(groups[0].guid).toBeTruthy();
        expect(groups[0].name).toBe("new group");
      });

      test("the profiles in the group can be listed, and then include when the profile joined the group", async () => {
        connection.params = {
          csrfToken,
          groupGuid: group.guid,
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );

        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(total).toBe(1);
        expect(profiles[0].joinedAt).toBeTruthy();
      });

      test("a writer can remove a profile from a manual group", async () => {
        connection.params = {
          csrfToken,
          guid: group.guid,
          profileGuid: profile.guid,
        };
        const { error, success } = await specHelper.runAction(
          "group:removeProfile",
          connection
        );
        expect(error).toBeUndefined();
        expect(success).toBeTruthy();

        connection.params = {
          csrfToken,
          guid: profile.guid,
        };
        const { error: removeError, groups } = await specHelper.runAction(
          "profile:view",
          connection
        );
        expect(removeError).toBeUndefined();
        expect(groups.length).toBe(0);
      });
    });

    describe("search", () => {
      let mario;
      let luigi;
      let peach;
      let toad;
      let group;

      beforeAll(async () => {
        group = new Group({
          name: "VIP people",
          type: "manual",
        });
        await group.save();
      });

      beforeAll(async () => {
        // sleeping after each create so that we can sort by createdAt

        connection.params = {
          csrfToken,
          properties: { email: "mario@example.com", userId: 1 },
        };
        let response = await specHelper.runAction("profile:create", connection);
        mario = response.profile;

        connection.params = {
          csrfToken,
          properties: { email: "luigi@example.com", userId: 2 },
        };
        response = await specHelper.runAction("profile:create", connection);
        luigi = response.profile;

        connection.params = {
          csrfToken,
          properties: { email: "toad@mushroom-kingdom.gov", userId: 3 },
        };
        response = await specHelper.runAction("profile:create", connection);
        toad = response.profile;

        connection.params = {
          csrfToken,
          properties: { email: "peach@mushroom-kingdom.gov", userId: 4 },
        };
        response = await specHelper.runAction("profile:create", connection);
        peach = response.profile;

        connection.params = {
          csrfToken,
          guid: group.guid,
          profileGuid: mario.guid,
        };
        await specHelper.runAction("group:addProfile", connection);

        connection.params = {
          csrfToken,
          guid: group.guid,
          profileGuid: peach.guid,
        };
        await specHelper.runAction("group:addProfile", connection);
      }, 10 * 1000);

      afterAll(async () => {
        const profiles = [mario, luigi, toad, peach];
        for (const i in profiles) {
          connection.params = {
            csrfToken,
            guid: profiles[i].guid,
          };
          await specHelper.runAction("profile:destroy", connection);
        }
      });

      afterAll(async () => {
        await group.destroy();
      });

      test("returns all profiles and counts when there is no search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(4);
        expect(simpleProfileValues(profiles[0].properties).email).toBe(
          "mario@example.com"
        );
        expect(simpleProfileValues(profiles[0].properties).userId).toBe(1);
        expect(simpleProfileValues(profiles[1].properties).email).toBe(
          "luigi@example.com"
        );
        expect(simpleProfileValues(profiles[1].properties).userId).toBe(2);
        expect(simpleProfileValues(profiles[2].properties).email).toBe(
          "toad@mushroom-kingdom.gov"
        );
        expect(simpleProfileValues(profiles[2].properties).userId).toBe(3);
        expect(simpleProfileValues(profiles[3].properties).email).toBe(
          "peach@mushroom-kingdom.gov"
        );
        expect(simpleProfileValues(profiles[3].properties).userId).toBe(4);
        expect(total).toBe(4);
      });

      test("returns all profiles and counts when there is no search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupGuid: group.guid,
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(2);
        expect(simpleProfileValues(profiles[0].properties).email).toBe(
          "mario@example.com"
        );
        expect(simpleProfileValues(profiles[0].properties).userId).toBe(1);
        expect(simpleProfileValues(profiles[1].properties).email).toBe(
          "peach@mushroom-kingdom.gov"
        );
        expect(simpleProfileValues(profiles[1].properties).userId).toBe(4);
        expect(total).toBe(2);
      });

      test("returns exact matches when there is a search (all), returning searched property", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "peach@mushroom-kingdom.gov",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toBe(
          "peach@mushroom-kingdom.gov"
        );
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();
        expect(total).toBe(1);
      });

      test("returns case-insensitive matches when there is a search (all), returning searched property", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "PEACH@MushRoom-kingdom.gov",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toBe(
          "peach@mushroom-kingdom.gov"
        );
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();
        expect(total).toBe(1);
      });

      test("returns exact matches when there is a search (group), returning searched property", async () => {
        connection.params = {
          csrfToken,
          groupGuid: group.guid,
          searchKey: "email",
          searchValue: "peach@mushroom-kingdom.gov",
        };
        const { error, profiles } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toBe(
          "peach@mushroom-kingdom.gov"
        );
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();

        // TODO: we need to do a double join to check group member's profile properties.  The profiles returned are good, but not the total counts
        // expect(total).toBe(1)
      });

      test("returns case-insensitive matches when there is a search (group), returning searched property", async () => {
        connection.params = {
          csrfToken,
          groupGuid: group.guid,
          searchKey: "email",
          searchValue: "PEACH@MUSHroom-kingdom.gov",
        };
        const { error, profiles } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toBe(
          "peach@mushroom-kingdom.gov"
        );
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();

        // TODO: we need to do a double join to check group member's profile properties.  The profiles returned are good, but not the total counts
        // expect(total).toBe(1)
      });

      test("returns fuzzy matching profiles and counts when there is a search (all), returning searched property", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "%@mushroom-kingdom.gov",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(2);
        expect(total).toBe(2);
      });

      test("returns fuzzy matching profiles and counts when there is a search (all) ignoring case, returning searched property", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "%@MuShRoom-kingdom.GOV",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(2);
        expect(total).toBe(2);
      });

      test("returns fuzzy matching profiles and counts when there is no search (group), returning searched property", async () => {
        connection.params = {
          csrfToken,
          groupGuid: group.guid,
          searchKey: "email",
          searchValue: "%@mushroom-kingdom.gov",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toBe(
          "peach@mushroom-kingdom.gov"
        );
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();

        // TODO: we need to do a double join to check group member's profile properties.  The profiles returned are good, but not the total counts
        // expect(total).toBe(1)
      });

      test("without a search, profiles without properties are returned", async () => {
        const profile = await helper.factories.profile();

        connection.params = { csrfToken };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(5);
        expect(total).toBe(5);

        await profile.destroy();
      });

      test("returns matching profiles when null is the searchValue", async () => {
        connection.params = {
          csrfToken,
          searchKey: "ltv",
          searchValue: "null",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(4);
        expect(total).toBe(4);
      });

      test("returns all matching profiles when * is the searchValue (results)", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "*",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(0);
        expect(total).toBe(0);
      });

      test("returns all matching profiles when * is the searchValue (no results)", async () => {
        connection.params = {
          csrfToken,
          searchKey: "ltv",
          searchValue: "*",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(0);
        expect(total).toBe(0);
      });
    });
  });

  describe("reader signed in", () => {
    let connection;
    let teamGuid;
    let csrfToken;

    beforeAll(async () => {
      const profile = new Profile();
      await profile.save();
      await profile.addOrUpdateProperties({
        firstName: "Toad",
        email: "toad@example.com",
      });
      guid = profile.guid;

      const readOnlyTeam = new Team({
        name: "read only team",
      });
      await readOnlyTeam.save();
      teamGuid = readOnlyTeam.guid;

      const luigi = new TeamMember({
        teamGuid,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await luigi.save();
      await luigi.updatePassword("P@ssw0rd!");

      connection = await specHelper.buildConnection();
      connection.params = { email: "luigi@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader cannot create a new profile", async () => {
      connection.params = {
        csrfToken,
      };
      const { error } = await specHelper.runAction(
        "profile:create",
        connection
      );
      expect(error.message).toMatch(
        /not authorized for mode "write" on topic "profile"/
      );
    });

    test("a reader can list all the profiles", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, profiles } = await specHelper.runAction(
        "profiles:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(profiles.length).toBe(1);
    });

    test("a reader cannot edit a group", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error } = await specHelper.runAction("profile:edit", connection);
      expect(error.message).toMatch(
        /not authorized for mode "write" on topic "profile"/
      );
    });

    test("a reader can view a profile", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, profile } = await specHelper.runAction(
        "profile:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.guid).toBeTruthy();
      expect(simpleProfileValues(profile.properties)).toEqual({
        firstName: "Toad",
        email: "toad@example.com",
      });
    });

    test("a reader cannot destroy a profile", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const destroyResponse = await specHelper.runAction(
        "profile:destroy",
        connection
      );

      expect(destroyResponse.error.message).toMatch(
        /not authorized for mode "write" on topic "profile"/
      );
    });
  });
});
