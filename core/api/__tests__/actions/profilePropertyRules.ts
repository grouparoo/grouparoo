import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
let actionhero;
let guid;
let source;

describe("actions/profilePropertyRules", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    await ProfilePropertyRule.destroy({ truncate: true });

    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
  });

  describe("administrator signed in", () => {
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

    test("the options to create a new profilePropertyRule can be requested", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, types } = await specHelper.runAction(
        "profilePropertyRules:options",
        connection
      );
      expect(error).toBeUndefined();
      expect(types).toEqual([
        "float",
        "integer",
        "date",
        "string",
        "boolean",
        "email",
      ]);
    });

    test("an administrator can create a new profilePropertyRule", async () => {
      connection.params = {
        csrfToken,
        sourceGuid: source.guid,
        key: "email",
        type: "string",
      };

      const {
        error,
        profilePropertyRule,
        pluginOptions,
      } = await specHelper.runAction("profilePropertyRule:create", connection);

      expect(error).toBeUndefined();
      expect(profilePropertyRule.guid).toBeTruthy();
      expect(profilePropertyRule.key).toBe("email");
      expect(profilePropertyRule.unique).toBe(false);
      expect(profilePropertyRule.passive).toBe(true);
      expect(profilePropertyRule.source.guid).toBe(source.guid);
      expect(pluginOptions[0].key).toBe("column");

      guid = profilePropertyRule.guid;
    });

    test("an administrator can view a profilePropertyRule", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const {
        error,
        profilePropertyRule,
        pluginOptions,
      } = await specHelper.runAction("profilePropertyRule:view", connection);

      expect(error).toBeUndefined();
      expect(profilePropertyRule.passive).toBe(true);
      expect(profilePropertyRule.key).toBe("email");
      expect(profilePropertyRule.unique).toBe(false);
      expect(profilePropertyRule.source.guid).toBe(source.guid);
      expect(pluginOptions[0].key).toBe("column");
    });

    test("an administrator can test a profile property rule", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, test } = await specHelper.runAction(
        "profilePropertyRule:test",
        connection
      );

      expect(error).toBeUndefined();
      expect(test).toBe(true);
    });

    test("an administrator can set options", async () => {
      connection.params = {
        csrfToken,
        guid,
        options: {
          column: "userId",
        },
      };
      const { error, profilePropertyRule } = await specHelper.runAction(
        "profilePropertyRule:edit",
        connection
      );

      expect(error).toBeFalsy();
      expect(profilePropertyRule.options).toEqual({
        column: "userId",
      });
    });

    test("options are validated", async () => {
      connection.params = {
        csrfToken,
        guid,
        options: {
          query: "select thing from stuff",
        },
      };
      const { error } = await specHelper.runAction(
        "profilePropertyRule:edit",
        connection
      );

      expect(error.message).toMatch("column is required");
    });

    test("an administrator can list all the profilePropertyRules with examples", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: "person@example.com" });

      connection.params = {
        csrfToken,
      };
      const {
        error,
        profilePropertyRules,
        examples,
        total,
      } = await specHelper.runAction("profilePropertyRules:list", connection);
      expect(error).toBeUndefined();
      expect(profilePropertyRules.length).toBe(1);
      expect(profilePropertyRules[0].source.guid).toBe(source.guid);
      expect(profilePropertyRules[0].type).toBe("string");
      expect(profilePropertyRules[0].unique).toBe(false);
      expect(total).toBe(1);

      expect(examples[profilePropertyRules[0].guid]).toEqual([
        "person@example.com",
      ]);

      await profile.destroy();
    });

    test("an administrator can see groups which rely on a profilePropertyRule", async () => {
      const group = await helper.factories.group({ type: "calculated" });
      await group.setRules([
        {
          key: "email",
          op: "iLike",
          match: "%@%",
        },
      ]);

      connection.params = {
        csrfToken,
        guid,
      };
      const { error, groups } = await specHelper.runAction(
        "profilePropertyRule:groups",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(1);
      expect(groups[0].guid).toBe(group.guid);

      await group.destroy();
    });

    test("an administrator can edit a profilePropertyRule", async () => {
      connection.params = {
        csrfToken,
        guid,
        unique: true,
      };
      const { error, profilePropertyRule } = await specHelper.runAction(
        "profilePropertyRule:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(profilePropertyRule.unique).toBe(true);
    });

    test("an administrator can remove a profilePropertyRule", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, success } = await specHelper.runAction(
        "profilePropertyRule:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });
  });
});
