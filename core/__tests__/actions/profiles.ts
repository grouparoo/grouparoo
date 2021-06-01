import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Profile, Group, Team, TeamMember, Property, Run } from "../../src";
import { ConfigWriter } from "../../src/modules/configWriter";

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].values;
  });
  return simpleProfileProperties;
}

describe("actions/profiles", () => {
  const mockedConfigWriterRun = jest.fn();

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;

  beforeAll(async () => {
    await helper.factories.properties();
    helper.disableTestPluginImport();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    ConfigWriter.run = mockedConfigWriterRun;
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
      expect(profile.id).toBeTruthy();
      expect(profile.state).toBe("pending");
      expect(simpleProfileValues(profile.properties)).toEqual({
        userId: [123],
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        isVIP: [null],
        lastLoginAt: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
      });

      expect(profile.properties["userId"].state).toBe("ready");
      expect(profile.properties["email"].state).toBe("ready");
      expect(profile.properties["purchases"].state).toBe("pending");

      id = profile.id;
    });

    test("when a profile is created, config writers will be run", async () => {
      mockedConfigWriterRun.mockReset();

      connection.params = {
        csrfToken,
        properties: {
          userId: 12,
          email: "wario@example.com",
          firstName: "Wario",
          lastName: "Waluigio",
        },
      };

      const { profile: profileData } = await specHelper.runAction(
        "profile:create",
        connection
      );

      expect(mockedConfigWriterRun).toHaveBeenCalledTimes(1);

      const profile = await Profile.findOne({ where: { id: profileData.id } });
      await profile.destroy();
    });

    test("a writer can edit a property of a profile", async () => {
      connection.params = {
        csrfToken,
        id,
        properties: { userId: 999 },
      };
      const { error, profile } = await specHelper.runAction(
        "profile:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(simpleProfileValues(profile.properties).userId).toEqual([999]);
    });

    test("a writer can add a new property to a profile", async () => {
      connection.params = {
        csrfToken,
        id,
        properties: {
          ltv: 123.45,
        },
      };
      const { error, profile } = await specHelper.runAction(
        "profile:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.id).toBeTruthy();
      expect(profile.state).toBe("ready");
      expect(simpleProfileValues(profile.properties)).toEqual({
        userId: [999],
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        ltv: [123.45],
        isVIP: [null],
        lastLoginAt: [null],
        purchaseAmounts: [null],
        purchases: [null],
      });
    });

    test("a writer can remove a new property from a profile", async () => {
      connection.params = {
        csrfToken,
        id,
        removedProperties: ["ltv"],
      };
      const { error, profile } = await specHelper.runAction(
        "profile:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.id).toBeTruthy();
      expect(profile.state).toBe("ready");
      expect(simpleProfileValues(profile.properties)).toEqual({
        userId: [999],
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        isVIP: [null],
        ltv: [null],
        lastLoginAt: [null],
        purchaseAmounts: [null],
        purchases: [null],
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
      expect(simpleProfileValues(profiles[0].properties).userId).toEqual([999]);
      expect(total).toBe(1);
    });

    test("a writer can list all the profiles with a certain state", async () => {
      connection.params = {
        csrfToken,
        state: "pending",
      };
      const { profiles: pendingProfiles, total: pendingTotal } =
        await specHelper.runAction("profiles:list", connection);
      expect(pendingProfiles.length).toBe(0);
      expect(pendingTotal).toBe(0);

      connection.params = {
        csrfToken,
        state: "ready",
      };
      const { profiles: readyProfiles, total: readyTotal } =
        await specHelper.runAction("profiles:list", connection);
      expect(readyProfiles.length).toBe(1);
      expect(readyTotal).toBe(1);
    });

    test("a writer can get autocomplete results from properties", async () => {
      const emailProperty = await Property.findOne({
        where: { key: "email" },
      });

      connection.params = {
        csrfToken,
        propertyId: emailProperty.id,
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
      expect(run.id).toBeTruthy();

      const runningRuns = await Run.findAll({
        where: { state: "running", creatorType: "teamMember" },
      });
      expect(runningRuns.length).toBe(1);
    });

    test("a writer can destroy a profile", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, success } = await specHelper.runAction(
        "profile:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });

    test("when a profile is destroyed, config writers will be run", async () => {
      mockedConfigWriterRun.mockReset();
      const profile = await helper.factories.profile();

      connection.params = {
        csrfToken,
        id: profile.id,
      };

      const { success } = await specHelper.runAction(
        "profile:destroy",
        connection
      );
      expect(success).toBe(true);
      expect(mockedConfigWriterRun).toHaveBeenCalledTimes(1);
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
          id: group.id,
          profileId: profile.id,
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
          id: calculatedGroup.id,
          profileId: profile.id,
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
          id: profile.id,
        };
        const { error, groups } = await specHelper.runAction(
          "profile:view",
          connection
        );
        expect(error).toBeUndefined();
        expect(groups.length).toBe(1);
        expect(groups[0].id).toBeTruthy();
        expect(groups[0].name).toBe("new group");
      });

      test("the profiles in the group can be listed, and then include when the profile joined the group", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
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
          id: group.id,
          profileId: profile.id,
        };
        const { error, success } = await specHelper.runAction(
          "group:removeProfile",
          connection
        );
        expect(error).toBeUndefined();
        expect(success).toBeTruthy();

        connection.params = {
          csrfToken,
          id: profile.id,
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
      let mario: Profile;
      let luigi: Profile;
      let peach: Profile;
      let toad: Profile;
      let group: Group;

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
          id: group.id,
          profileId: mario.id,
        };
        await specHelper.runAction("group:addProfile", connection);

        connection.params = {
          csrfToken,
          id: group.id,
          profileId: peach.id,
        };
        await specHelper.runAction("group:addProfile", connection);
      }, 10 * 1000);

      afterAll(async () => {
        const profiles = [mario, luigi, toad, peach];
        for (const i in profiles) {
          connection.params = {
            csrfToken,
            id: profiles[i].id,
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
        expect(simpleProfileValues(profiles[0].properties).email).toEqual([
          "mario@example.com",
        ]);
        expect(simpleProfileValues(profiles[0].properties).userId).toEqual([1]);
        expect(simpleProfileValues(profiles[1].properties).email).toEqual([
          "luigi@example.com",
        ]);
        expect(simpleProfileValues(profiles[1].properties).userId).toEqual([2]);
        expect(simpleProfileValues(profiles[2].properties).email).toEqual([
          "toad@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(profiles[2].properties).userId).toEqual([3]);
        expect(simpleProfileValues(profiles[3].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(profiles[3].properties).userId).toEqual([4]);
        expect(total).toBe(4);
      });

      test("returns all profiles and counts when there is no search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(2);
        expect(simpleProfileValues(profiles[0].properties).email).toEqual([
          "mario@example.com",
        ]);
        expect(simpleProfileValues(profiles[0].properties).userId).toEqual([1]);
        expect(simpleProfileValues(profiles[1].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(profiles[1].properties).userId).toEqual([4]);
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
        expect(simpleProfileValues(profiles[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(profiles[0].properties).userId).toEqual([4]);
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
        expect(simpleProfileValues(profiles[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(profiles[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);
      });

      test("returns exact matches when there is a search (group), returning searched property", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "peach@mushroom-kingdom.gov",
        };
        const { error, profiles } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();

        // TODO: we need to do a double join to check group member's properties.  The profiles returned are good, but not the total counts
        // expect(total).toBe(1)
      });

      test("returns case-insensitive matches when there is a search (group), returning searched property", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "PEACH@MUSHroom-kingdom.gov",
        };
        const { error, profiles } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();

        // TODO: we need to do a double join to check group member's properties.  The profiles returned are good, but not the total counts
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
          groupId: group.id,
          searchKey: "email",
          searchValue: "%@mushroom-kingdom.gov",
        };
        const { error, profiles, total } = await specHelper.runAction(
          "profiles:list",
          connection
        );
        expect(error).toBeUndefined();
        expect(profiles.length).toBe(1);
        expect(simpleProfileValues(profiles[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(
          simpleProfileValues(profiles[0].properties).userId
        ).toBeUndefined();

        // TODO: we need to do a double join to check group member's properties.  The profiles returned are good, but not the total counts
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
    let teamId;
    let csrfToken;

    beforeAll(async () => {
      const profile = new Profile();
      await profile.save();
      await profile.addOrUpdateProperties({
        firstName: ["Toad"],
        email: ["toad@example.com"],
      });
      id = profile.id;

      const readOnlyTeam = new Team({
        name: "read only team",
      });
      await readOnlyTeam.save();
      teamId = readOnlyTeam.id;

      const luigi = new TeamMember({
        teamId,
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
      expect(error.code).toBe("AUTHORIZATION_ERROR");
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
        id,
      };
      const { error } = await specHelper.runAction("profile:edit", connection);
      expect(error.code).toBe("AUTHORIZATION_ERROR");
    });

    test("a reader can view a profile", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, profile } = await specHelper.runAction(
        "profile:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.id).toBeTruthy();
      expect(simpleProfileValues(profile.properties)).toEqual({
        firstName: ["Toad"],
        email: ["toad@example.com"],
        isVIP: [null],
        lastLoginAt: [null],
        lastName: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
        userId: [null],
      });
    });

    test("a reader cannot destroy a profile", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const destroyResponse = await specHelper.runAction(
        "profile:destroy",
        connection
      );

      expect(destroyResponse.error.code).toBe("AUTHORIZATION_ERROR");
    });
  });
});
