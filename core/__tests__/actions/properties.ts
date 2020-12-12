import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Property } from "../../src/models/Property";
import { Source } from "../../src/models/Source";

let actionhero;
let guid;
let source: Source;

describe("actions/properties", () => {
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

    await Property.truncate();

    source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.bootstrapUniqueProperty("userId", "integer", "id");
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

    test("the options to create a new property can be requested", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, types } = await specHelper.runAction(
        "properties:options",
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

    test("an administrator cannot make a new property that is both unique and an array", async () => {
      connection.params = {
        csrfToken,
        sourceGuid: source.guid,
        key: "email",
        type: "string",
        unique: "true",
        isArray: "true",
      };

      const { error } = await specHelper.runAction(
        "property:create",
        connection
      );

      expect(error.message).toMatch(
        /unique profile properties cannot be arrays/
      );
    });

    test("an administrator can create a new property", async () => {
      connection.params = {
        csrfToken,
        sourceGuid: source.guid,
        key: "email",
        type: "string",
        unique: "true",
      };

      const { error, property, pluginOptions } = await specHelper.runAction(
        "property:create",
        connection
      );

      expect(error).toBeUndefined();
      expect(property.guid).toBeTruthy();
      expect(property.key).toBe("email");
      expect(property.unique).toBe(true);
      expect(property.isArray).toBe(false);
      expect(property.state).toBe("draft");
      expect(property.sourceGuid).toBe(source.guid);
      expect(pluginOptions[0].key).toBe("column");

      guid = property.guid;
    });

    test("an administrator can view a property", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, property } = await specHelper.runAction(
        "property:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(property.key).toBe("email");
      expect(property.isArray).toBe(false);
      expect(property.unique).toBe(true);
      expect(property.sourceGuid).toBe(source.guid);
    });

    test("an administrator can view a property's plugin options", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, pluginOptions } = await specHelper.runAction(
        "property:pluginOptions",
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
        "property:filterOptions",
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
      const { error, property } = await specHelper.runAction(
        "property:edit",
        connection
      );

      expect(error).toBeUndefined();
      expect(property.filters).toEqual([
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
      const { error, property } = await specHelper.runAction(
        "property:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(property.state).toBe("ready");
    });

    test("an administrator can test a profile property rule", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, test } = await specHelper.runAction(
        "property:test",
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
      const { error, property } = await specHelper.runAction(
        "property:edit",
        connection
      );

      expect(error).toBeFalsy();
      expect(property.options).toEqual({
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
      const { error } = await specHelper.runAction("property:edit", connection);

      expect(error.message).toMatch("column is required");
    });

    test("a rule can be made identifying", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, property } = await specHelper.runAction(
        "property:makeIdentifying",
        connection
      );
      expect(error).toBeFalsy();
      expect(property.identifying).toEqual(true);
    });

    test("an administrator can list all the properties with examples", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["person@example.com"] });

      connection.params = {
        csrfToken,
      };
      const { error, properties, examples, total } = await specHelper.runAction(
        "properties:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(properties.length).toBe(2); // this + userId
      expect(properties[1].sourceGuid).toBe(source.guid);
      expect(properties[1].type).toBe("integer");
      expect(properties[1].unique).toBe(true);
      expect(properties[0].type).toBe("string");
      expect(properties[0].unique).toBe(true);
      expect(total).toBe(2);

      expect(examples[properties[0].guid]).toEqual(["person@example.com"]);

      await profile.destroy();
    });

    test("an administrator can list rules in a certain state", async () => {
      connection.params = {
        state: "ready",
        csrfToken,
      };
      const { error, properties } = await specHelper.runAction(
        "properties:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(properties.length).toBe(2); // userId + email
    });

    test("an administrator can list unique rules", async () => {
      connection.params = {
        unique: "true",
        csrfToken,
      };
      const { error, properties } = await specHelper.runAction(
        "properties:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(properties.length).toBe(2); // userId + email
    });

    test("an administrator can see groups which rely on a property", async () => {
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
        "property:groups",
        connection
      );
      expect(error).toBeUndefined();
      expect(groups.length).toBe(1);
      expect(groups[0].guid).toBe(group.guid);

      await group.destroy();
    });

    test("an administrator can edit a property", async () => {
      connection.params = {
        csrfToken,
        guid,
        unique: true,
      };
      const { error, property } = await specHelper.runAction(
        "property:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(property.unique).toBe(true);
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
        "property:profilePreview",
        connection
      );
      expect(error).toBeUndefined();
      expect(profile.guid).toBe(_profile.guid);
      expect(profile.properties["email"].values).toBeTruthy();

      await _profile.destroy();
    });

    test("an administrator can remove a property", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, success } = await specHelper.runAction(
        "property:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });
  });
});
