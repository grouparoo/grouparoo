import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import { Source } from "./../../src/models/Source";

let actionhero;
let guid;
let source: Source;

describe("actions/profilePropertyRules", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

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

    await ProfilePropertyRule.truncate();

    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.bootstrapUniqueProfilePropertyRule("userId", "integer", "id");
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });
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
        "boolean",
        "date",
        "email",
        "float",
        "integer",
        "phoneNumber",
        "string",
        "url",
      ]);
    });

    test("an administrator cannot make a new profilePropertyRule that is both unique and an array", async () => {
      connection.params = {
        csrfToken,
        sourceGuid: source.guid,
        key: "email",
        type: "string",
        unique: "true",
        isArray: "true",
      };

      const { error } = await specHelper.runAction(
        "profilePropertyRule:create",
        connection
      );

      expect(error.message).toMatch(
        /unique profile properties cannot be arrays/
      );
    });

    test("an administrator can create a new profilePropertyRule", async () => {
      connection.params = {
        csrfToken,
        sourceGuid: source.guid,
        key: "email",
        type: "string",
        unique: "true",
      };

      const {
        error,
        profilePropertyRule,
        pluginOptions,
      } = await specHelper.runAction("profilePropertyRule:create", connection);

      expect(error).toBeUndefined();
      expect(profilePropertyRule.guid).toBeTruthy();
      expect(profilePropertyRule.key).toBe("email");
      expect(profilePropertyRule.unique).toBe(true);
      expect(profilePropertyRule.isArray).toBe(false);
      expect(profilePropertyRule.state).toBe("draft");
      expect(profilePropertyRule.sourceGuid).toBe(source.guid);
      expect(pluginOptions[0].key).toBe("column");

      guid = profilePropertyRule.guid;
    });

    test("an administrator can view a profilePropertyRule", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, profilePropertyRule } = await specHelper.runAction(
        "profilePropertyRule:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(profilePropertyRule.key).toBe("email");
      expect(profilePropertyRule.isArray).toBe(false);
      expect(profilePropertyRule.unique).toBe(true);
      expect(profilePropertyRule.sourceGuid).toBe(source.guid);
    });

    test("an administrator can view a profilePropertyRule's plugin options", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, pluginOptions } = await specHelper.runAction(
        "profilePropertyRule:pluginOptions",
        connection
      );

      expect(error).toBeUndefined();
      expect(pluginOptions[0].key).toBe("column");
    });

    test("an administrator can view the filter options for a profile property rule", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, options } = await specHelper.runAction(
        "profilePropertyRule:filterOptions",
        connection
      );

      expect(error).toBeUndefined();
      expect(options).toEqual([
        {
          key: "id",
          ops: ["greater than", "less than"],
          canHaveRelativeMatch: false,
        },
      ]);
    });

    test("an administrator can set the filters for a profile property rule", async () => {
      connection.params = {
        csrfToken,
        guid,
        filters: [{ key: "id", op: "greater than", match: 6 }],
      };
      const { error, profilePropertyRule } = await specHelper.runAction(
        "profilePropertyRule:edit",
        connection
      );

      expect(error).toBeUndefined();
      expect(profilePropertyRule.filters).toEqual([
        {
          key: "id",
          match: "6",
          op: "greater than",
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
        },
      ]);
    });

    test("an administrator can make a rule ready", async () => {
      connection.params = {
        csrfToken,
        guid,
        options: { column: "email" },
        state: "ready",
      };
      const { error, profilePropertyRule } = await specHelper.runAction(
        "profilePropertyRule:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(profilePropertyRule.state).toBe("ready");
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
      await profile.addOrUpdateProperties({ email: ["person@example.com"] });

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
      expect(profilePropertyRules.length).toBe(2); // this + userId
      expect(profilePropertyRules[1].sourceGuid).toBe(source.guid);
      expect(profilePropertyRules[1].type).toBe("integer");
      expect(profilePropertyRules[1].unique).toBe(true);
      expect(profilePropertyRules[0].type).toBe("string");
      expect(profilePropertyRules[0].unique).toBe(true);
      expect(total).toBe(2);

      expect(examples[profilePropertyRules[0].guid]).toEqual([
        "person@example.com",
      ]);

      await profile.destroy();
    });

    test("an administrator can list rules in a certain state", async () => {
      connection.params = {
        state: "ready",
        csrfToken,
      };
      const { error, profilePropertyRules } = await specHelper.runAction(
        "profilePropertyRules:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(profilePropertyRules.length).toBe(2); // userId + email
    });

    test("an administrator can list unique rules", async () => {
      connection.params = {
        unique: "true",
        csrfToken,
      };
      const { error, profilePropertyRules } = await specHelper.runAction(
        "profilePropertyRules:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(profilePropertyRules.length).toBe(2); // userId + email
    });

    test("an administrator can see groups which rely on a profilePropertyRule", async () => {
      const group = await helper.factories.group({ type: "calculated" });
      await group.setRules([
        {
          key: "email",
          operation: { op: "like" },
          match: "%@%",
        },
      ]);
      await group.update({ state: "ready" });

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

    test("an administrator can see a profile preview of a profile property rule", async () => {
      const _profile = await helper.factories.profile();
      await _profile.addOrUpdateProperties({ userId: [1001] });

      const originalProperties = _profile.properties();
      expect(originalProperties["email"]).toBeFalsy();

      connection.params = {
        csrfToken,
        guid,
      };
      const { error, profile } = await specHelper.runAction(
        "profilePropertyRule:profilePreview",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.guid).toBe(_profile.guid);
      expect(profile.properties["email"].values).toBeTruthy();

      await _profile.destroy();
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
