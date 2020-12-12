import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Destination } from "./../../src/models/Destination";
import { Group } from "./../../src/models/Group";
import { Profile } from "./../../src/models/Profile";
import { Property } from "./../../src/models/Property";
import { Source } from "./../../src/models/Source";

let actionhero;
let app;
let guid;

describe("actions/destinations", () => {
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
    await helper.factories.properties();
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

      app = await helper.factories.app();
      await app.update({ name: "test app" });
    });

    test("an administrator can create a new destination from an app", async () => {
      connection.params = {
        csrfToken,
        name: "test destination",
        type: "test-plugin-export",
        appGuid: app.guid,
      };
      const { error, destination } = await specHelper.runAction(
        "destination:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(destination.guid).toBeTruthy();
      expect(destination.app.guid).toBe(app.guid);
      expect(destination.app.name).toBe("test app");

      guid = destination.guid;
    });

    test("only one destination can be created for each app with the same options", async () => {
      connection.params = {
        csrfToken,
        name: "test destination again",
        type: "test-plugin-export",
        appGuid: app.guid,
      };
      const { error } = await specHelper.runAction(
        "destination:create",
        connection
      );

      expect(error.message).toMatch(
        /destination "test destination" .* is already using this app with the same options/
      );
    });

    test("an administrator can see the combinations of apps and connections available for a new destination", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, connectionApps } = await specHelper.runAction(
        "destinations:connectionApps",
        connection
      );
      expect(error).toBeUndefined();
      expect(connectionApps.length).toBe(4); // (this one + the app created for the properties ) * export & export-batch
      expect(connectionApps[0].connection.name).toBe("test-plugin-export");
    });

    describe("options from environment variables", () => {
      beforeAll(() => {
        process.env.GROUPAROO_OPTION__DESTINATION__TEST_OPTION = "abc123";
      });

      test("options for a new destination will include the names of options included in environment variables", async () => {
        connection.params = { csrfToken };
        const { environmentVariableOptions } = await specHelper.runAction(
          "destinations:connectionApps",
          connection
        );
        expect(environmentVariableOptions).toEqual(["TEST_OPTION"]);
      });

      afterAll(() => {
        process.env.GROUPAROO_OPTION__APP__TEST_OPTION = undefined;
      });
    });

    test("an administrator can list all the destinations", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, destinations, total } = await specHelper.runAction(
        "destinations:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(destinations.length).toBe(1);
      expect(destinations[0].name).toBe("test destination");
      expect(destinations[0].app.name).toBe("test app");
      expect(total).toBe(1);
    });

    test("an administrator can view a destination", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, destination } = await specHelper.runAction(
        "destination:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(destination.guid).toBeTruthy();
      expect(destination.name).toBe("test destination");
      expect(destination.app.name).toBe("test app");
    });

    test("an administrator can see connectionOptions", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { options, error } = await specHelper.runAction(
        "destination:connectionOptions",
        connection
      );
      expect(error).toBeFalsy();
      expect(options).toEqual({
        table: { type: "list", options: ["users_out"] },
      });
    });

    test("an administrator can see mappingOptions", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const {
        options,
        destinationTypeConversions: _destinationTypeConversions,
        error,
      } = await specHelper.runAction("destination:mappingOptions", connection);
      expect(error).toBeFalsy();
      expect(options).toEqual({
        labels: {
          group: {
            singular: "list",
            plural: "lists",
          },
          property: {
            singular: "var",
            plural: "vars",
          },
        },
        properties: {
          required: [{ key: "primary-id", type: "integer" }],
          known: [
            { key: "secondary-id", type: "any" },
            { key: "string-property", type: "string" },
          ],
          allowOptionalFromProperties: true,
        },
      });
      expect(_destinationTypeConversions).toEqual({
        boolean: ["any", "string", "boolean", "number"],
        date: ["any", "float", "integer", "string", "date", "number"],
        email: ["any", "string", "email"],
        float: ["any", "float", "string", "number"],
        integer: ["any", "float", "integer", "string", "number"],
        phoneNumber: ["any", "string", "phoneNumber"],
        string: ["any", "string"],
        url: ["any", "string", "url"],
      });
    });

    test("an administrator can set the mapping with valid mappings", async () => {
      connection.params = {
        csrfToken,
        guid,
        mapping: {
          "primary-id": "userId",
          "something-else": "email",
        },
      };
      const { destination, error } = await specHelper.runAction(
        "destination:edit",
        connection
      );
      expect(error).toBeFalsy();
      expect(destination.mapping).toEqual({
        "primary-id": "userId",
        "something-else": "email",
      });
    });

    test("an administrator cannot set the mapping with invalid mappings", async () => {
      connection.params = {
        csrfToken,
        guid,
        mapping: {
          "something-else": "email",
        },
      };
      const { error } = await specHelper.runAction(
        "destination:edit",
        connection
      );
      expect(error.message).toMatch(
        /primary-id is a required destination mapping option/
      );
    });

    test("an administrator can see the exportArrayProperties for this destination", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, exportArrayProperties } = await specHelper.runAction(
        "destination:exportArrayProperties",
        connection
      );
      expect(error).toBeUndefined();
      expect(exportArrayProperties).toEqual([]);
    });

    test("an administrator cannot set a mapping for an array profile property if it is not allowed by the exportArrayProperties", async () => {
      connection.params = {
        csrfToken,
        guid,
        mapping: { "primary-id": "userId", purchases: "purchases" },
      };
      const { error } = await specHelper.runAction(
        "destination:edit",
        connection
      );
      expect(error.message).toMatch(
        /purchases is an array profile property that .* cannot support/
      );
    });

    describe("with group", () => {
      let group: Group;
      let profile: Profile;
      beforeAll(async () => {
        profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
        });

        group = await helper.factories.group();
        await group.addProfile(profile);
      });

      test("an administrator can add a group to be tracked", async () => {
        connection.params = {
          csrfToken,
          guid,
          groupGuid: group.guid,
        };
        const { error } = await specHelper.runAction(
          "destination:trackGroup",
          connection
        );
        expect(error).toBeUndefined();

        connection.params = {
          csrfToken,
          guid,
        };
        const { destination } = await specHelper.runAction(
          "destination:view",
          connection
        );
        expect(destination.destinationGroup.guid).toBe(group.guid);
      });

      test("an administrator can set the destination group memberships", async () => {
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = "remote-group-tag";

        connection.params = {
          csrfToken,
          guid,
          destinationGroupMemberships,
        };
        const { destination, error } = await specHelper.runAction(
          "destination:edit",
          connection
        );
        expect(error).toBeFalsy();
        expect(destination.destinationGroupMemberships).toEqual([
          {
            groupGuid: group.guid,
            groupName: group.name,
            remoteKey: "remote-group-tag",
          },
        ]);
      });

      test("an administrator can get a preview of a profile to be exported to a destination, existing mapping & destinationGroupMemberships + no profile", async () => {
        connection.params = {
          csrfToken,
          guid,
          groupGuid: group.guid,
        };
        const { error, profile: _profile } = await specHelper.runAction(
          "destination:profilePreview",
          connection
        );
        expect(error).toBeUndefined();
        expect(_profile.properties["primary-id"].values).toEqual([1]);
        expect(_profile.properties["something-else"].values).toEqual([
          "yoshi@example.com",
        ]);
        expect(_profile.groupNames).toEqual(["remote-group-tag"]);
      });

      test("an administrator can get a preview of a profile to be exported to a destination, existing mapping & destinationGroupMemberships + profile", async () => {
        connection.params = {
          csrfToken,
          guid,
          profileGuid: profile.guid,
        };
        const { error, profile: _profile } = await specHelper.runAction(
          "destination:profilePreview",
          connection
        );
        expect(error).toBeUndefined();
        expect(_profile.properties["primary-id"].values).toEqual([1]);
        expect(_profile.properties["something-else"].values).toEqual([
          "yoshi@example.com",
        ]);
        expect(_profile.groupNames).toEqual(["remote-group-tag"]);
      });

      test("an administrator can get a preview of a profile to be exported to a destination, updated mapping & destinationGroupMemberships", async () => {
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.guid] = "another-group-tag";

        connection.params = {
          csrfToken,
          guid,
          profileGuid: profile.guid,
          destinationGroupMemberships,
          mapping: {
            "primary-id": "userId",
            email: "email",
          },
        };
        const { error, profile: _profile } = await specHelper.runAction(
          "destination:profilePreview",
          connection
        );
        expect(error).toBeUndefined();
        expect(_profile.properties["primary-id"].values).toEqual([1]);
        expect(_profile.properties["email"].values).toEqual([
          "yoshi@example.com",
        ]);
        expect(_profile.groupNames).toEqual(["another-group-tag"]);
      });

      test("destination:profilePreview will not fail if a new profile property has just been created or there are missing properties", async () => {
        const source = await Source.findOne({ where: { state: "ready" } });
        const colorRule = await Property.create({
          key: "color",
          type: "string",
          sourceGuid: source.guid,
        });
        await colorRule.setOptions({ column: "new_rule" });
        await colorRule.update({ state: "ready" });

        connection.params = {
          csrfToken,
          guid,
          groupGuid: group.guid,
          mapping: {
            "primary-id": "userId",
            color: "color",
          },
        };
        const { error, profile: _profile } = await specHelper.runAction(
          "destination:profilePreview",
          connection
        );
        expect(error).toBeUndefined();
        expect(_profile.properties["primary-id"].values).toEqual([1]);
        expect(_profile.properties["color"].values).toEqual([null]);

        await colorRule.destroy();
      });

      test("an administrator can list and remove a tracked group", async () => {
        connection.params = {
          csrfToken,
          guid,
        };
        const { destination } = await specHelper.runAction(
          "destination:view",
          connection
        );
        expect(destination.destinationGroup.guid).toBe(group.guid);

        connection.params = {
          csrfToken,
          guid,
          groupGuid: destination.destinationGroup.guid,
        };
        const { error } = await specHelper.runAction(
          "destination:unTrackGroup",
          connection
        );
        expect(error).toBeUndefined();
      });

      test("an administrator can export the members of a destination with a forced group run", async () => {
        await specHelper.runAction("destination:trackGroup", connection);

        connection.params = {
          csrfToken,
          guid,
        };
        const { success, error } = await specHelper.runAction(
          "destination:export",
          connection
        );

        expect(error).toBeFalsy();
        expect(success).toBeTruthy();

        const { destination } = await specHelper.runAction(
          "destination:view",
          connection
        );

        const foundTasks = await specHelper.findEnqueuedTasks("group:run");
        expect(foundTasks.length).toBe(1);
        expect(foundTasks[0].args[0]).toEqual({
          destinationGuid: guid,
          groupGuid: destination.destinationGroup.guid,
          force: true,
        });

        await specHelper.runAction("destination:unTrackGroup", connection);
      });
    });

    test("an administrator can destroy a destination", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const destroyResponse = await specHelper.runAction(
        "destination:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      const count = await Destination.count();
      expect(count).toBe(0);
    });
  });
});
