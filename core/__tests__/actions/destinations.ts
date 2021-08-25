import { helper } from "@grouparoo/spec-helper";
import { specHelper, api } from "actionhero";
import {
  Destination,
  Group,
  GrouparooRecord,
  Source,
  Run,
  App,
  Property,
} from "../../src";
import {
  DestinationConnectionApps,
  DestinationConnectionOptions,
  DestinationCreate,
  DestinationDestroy,
  DestinationEdit,
  DestinationExport,
  DestinationExportArrayProperties,
  DestinationMappingOptions,
  DestinationRecordPreview,
  DestinationsList,
  DestinationView,
} from "../../src/actions/destinations";
import { SessionCreate } from "../../src/actions/session";

describe("actions/destinations", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let app: App;
  let id: string;

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
    await helper.factories.properties();
    await api.resque.queue.connection.redis.flushdb();
  });

  describe("administrator signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
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
        appId: app.id,
        syncMode: "sync",
      };
      const { error, destination } =
        await specHelper.runAction<DestinationCreate>(
          "destination:create",
          connection
        );
      expect(error).toBeUndefined();
      expect(destination.id).toBeTruthy();
      expect(destination.app.id).toBe(app.id);
      expect(destination.app.name).toBe("test app");
      expect(destination.syncMode).toBe("sync");

      id = destination.id;
    });

    test("only one destination can be created for each app with the same options and group", async () => {
      connection.params = {
        csrfToken,
        name: "test destination again",
        type: "test-plugin-export",
        appId: app.id,
        syncMode: "sync",
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
      const { error, connectionApps } =
        await specHelper.runAction<DestinationConnectionApps>(
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
        const { environmentVariableOptions } =
          await specHelper.runAction<DestinationConnectionApps>(
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
      const { error, destinations, total } =
        await specHelper.runAction<DestinationsList>(
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
        id,
      };
      const { error, destination } =
        await specHelper.runAction<DestinationView>(
          "destination:view",
          connection
        );

      expect(error).toBeUndefined();
      expect(destination.id).toBeTruthy();
      expect(destination.name).toBe("test destination");
      expect(destination.syncMode).toBe("sync");
      expect(destination.app.name).toBe("test app");
    });

    test("an administrator can see connectionOptions", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { options, error } =
        await specHelper.runAction<DestinationConnectionOptions>(
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
        id,
      };
      const {
        options,
        destinationTypeConversions: _destinationTypeConversions,
        error,
      } = await specHelper.runAction<DestinationMappingOptions>(
        "destination:mappingOptions",
        connection
      );
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
        id,
        mapping: {
          "primary-id": "userId",
          "something-else": "email",
        },
      };
      const { destination, error } =
        await specHelper.runAction<DestinationEdit>(
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
        id,
        mapping: {
          "something-else": "email",
        },
      };
      const { error } = await specHelper.runAction<DestinationEdit>(
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
        id,
      };
      const { error, exportArrayProperties } =
        await specHelper.runAction<DestinationExportArrayProperties>(
          "destination:exportArrayProperties",
          connection
        );
      expect(error).toBeUndefined();
      expect(exportArrayProperties).toEqual([]);
    });

    test("an administrator cannot set a mapping for an array record property if it is not allowed by the exportArrayProperties", async () => {
      connection.params = {
        csrfToken,
        id,
        mapping: { "primary-id": "userId", purchases: "purchases" },
      };
      const { error } = await specHelper.runAction<DestinationEdit>(
        "destination:edit",
        connection
      );
      expect(error.message).toMatch(
        /purchases is an array record property that .* cannot support/
      );
    });

    test("an administrator can set the sync mode", async () => {
      connection.params = {
        csrfToken,
        id,
        syncMode: "enrich",
      };
      const { destination, error } =
        await specHelper.runAction<DestinationEdit>(
          "destination:edit",
          connection
        );
      expect(error).toBeFalsy();
      expect(destination.syncMode).toBe("enrich");
    });

    describe("with group", () => {
      let group: Group;
      let record: GrouparooRecord;
      beforeAll(async () => {
        record = await helper.factories.record();
        await record.addOrUpdateProperties({
          userId: [1],
          email: ["yoshi@example.com"],
        });

        group = await helper.factories.group();
        await group.addRecord(record);
      });

      test("an administrator can add a group to be tracked", async () => {
        connection.params = {
          csrfToken,
          id,
          trackedGroupId: group.id,
        };

        const { destination, run, error } =
          await specHelper.runAction<DestinationEdit>(
            "destination:edit",
            connection
          );
        expect(error).toBeFalsy();
        expect(destination.destinationGroup.id).toBe(group.id);
        expect(run.creatorId).toBe(group.id);
        expect(run.force).toBe(true);
        expect(run.state).toBe("running");
      });

      test("an administrator can set the destination group memberships", async () => {
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = "remote-group-tag";

        connection.params = {
          csrfToken,
          id,
          destinationGroupMemberships,
        };
        const { destination, error } =
          await specHelper.runAction<DestinationEdit>(
            "destination:edit",
            connection
          );
        expect(error).toBeFalsy();
        expect(destination.destinationGroup.id).toBe(group.id);
        expect(destination.destinationGroupMemberships).toEqual([
          {
            groupId: group.id,
            groupName: group.name,
            remoteKey: "remote-group-tag",
          },
        ]);
      });

      test("an administrator can get a preview of a record to be exported to a destination, existing mapping & destinationGroupMemberships + no record", async () => {
        connection.params = {
          csrfToken,
          id,
          groupId: group.id,
        };
        const { error, record: _record } =
          await specHelper.runAction<DestinationRecordPreview>(
            "destination:recordPreview",
            connection
          );
        expect(error).toBeUndefined();
        expect(_record.properties["primary-id"].values).toEqual([1]);
        expect(_record.properties["something-else"].values).toEqual([
          "yoshi@example.com",
        ]);
        expect(_record.groupNames).toEqual(["remote-group-tag"]);
      });

      test("an administrator can get a preview of a record to be exported to a destination, existing mapping & destinationGroupMemberships + record", async () => {
        connection.params = {
          csrfToken,
          id,
          recordId: record.id,
        };
        const { error, record: _record } =
          await specHelper.runAction<DestinationRecordPreview>(
            "destination:recordPreview",
            connection
          );
        expect(error).toBeUndefined();
        expect(_record.properties["primary-id"].values).toEqual([1]);
        expect(_record.properties["something-else"].values).toEqual([
          "yoshi@example.com",
        ]);
        expect(_record.groupNames).toEqual(["remote-group-tag"]);
      });

      test("an administrator can get a preview of a record to be exported to a destination, updated mapping & destinationGroupMemberships", async () => {
        const destinationGroupMemberships = {};
        destinationGroupMemberships[group.id] = "another-group-tag";

        connection.params = {
          csrfToken,
          id,
          recordId: record.id,
          destinationGroupMemberships,
          mapping: {
            "primary-id": "userId",
            email: "email",
          },
        };
        const { error, record: _profile } =
          await specHelper.runAction<DestinationRecordPreview>(
            "destination:recordPreview",
            connection
          );
        expect(error).toBeUndefined();
        expect(_profile.properties["primary-id"].values).toEqual([1]);
        expect(_profile.properties["email"].values).toEqual([
          "yoshi@example.com",
        ]);
        expect(_profile.groupNames).toEqual(["another-group-tag"]);
      });

      test("an administrator can get a preview of a record to be exported to a destination, with an un-set optional property", async () => {
        connection.params = {
          csrfToken,
          id,
          recordId: record.id,
          mapping: {
            "primary-id": "userId",
            "something-new-null": null,
            "something-new-undefined": undefined,
            "something-new-string": "",
          },
        };
        const { error, record: _profile } =
          await specHelper.runAction<DestinationRecordPreview>(
            "destination:recordPreview",
            connection
          );
        expect(error).toBeUndefined();
        expect(_profile.properties["primary-id"].values).toEqual([1]);
        expect(_profile.properties["something-new-null"]).toBeFalsy();
        expect(_profile.properties["something-new-undefined"]).toBeFalsy();
        expect(_profile.properties["something-new-string"]).toBeFalsy();
      });

      test("destination:recordPreview will not fail if a new record property has just been created or there are missing properties", async () => {
        const source = await Source.findOne({ where: { state: "ready" } });
        const colorProperty = await Property.create({
          key: "color",
          type: "string",
          sourceId: source.id,
        });
        await colorProperty.setOptions({ column: "new_rule" });
        await colorProperty.update({ state: "ready" });

        connection.params = {
          csrfToken,
          id,
          groupId: group.id,
          mapping: {
            "primary-id": "userId",
            color: "color",
          },
        };
        const { error, record: _profile } =
          await specHelper.runAction<DestinationRecordPreview>(
            "destination:recordPreview",
            connection
          );
        expect(error).toBeUndefined();
        expect(_profile.properties["primary-id"].values).toEqual([1]);
        expect(_profile.properties["color"].values).toEqual([null]);

        await colorProperty.destroy();
      });

      test("an administrator can list and remove a tracked group", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { destination } = await specHelper.runAction<DestinationView>(
          "destination:view",
          connection
        );
        expect(destination.destinationGroup.id).toBe(group.id);

        connection.params = {
          csrfToken,
          id,
          trackedGroupId: null,
        };
        const {
          destination: updatedDestination,
          run,
          error,
        } = await specHelper.runAction<DestinationEdit>(
          "destination:edit",
          connection
        );
        expect(error).toBeFalsy();
        expect(run.creatorId).toBe(group.id);
        expect(run.force).toBe(false);
        expect(run.state).toBe("running");
        expect(updatedDestination.destinationGroup).toBe(null);
      });

      test("update the tracked group", async () => {
        connection.params = {
          csrfToken,
          id,
          trackedGroupId: group.id,
        };
        const { destination: _destination } =
          await specHelper.runAction<DestinationEdit>(
            "destination:edit",
            connection
          );
        expect(_destination.destinationGroup.id).toBe(group.id);

        const runningRuns = await Run.findAll({
          where: { state: "running", creatorType: "group" },
        });
        expect(runningRuns.length).toBe(1);
        expect(runningRuns[0]).toEqual(
          expect.objectContaining({
            destinationId: id,
            creatorId: group.id,
            force: true,
          })
        );

        await runningRuns[0].stop();
      });

      test("an administrator can trigger an export while updating a destination", async () => {
        let runningRuns = await Run.findAll({
          where: { state: "running", creatorType: "group" },
        });
        expect(runningRuns).toHaveLength(0);

        connection.params = {
          csrfToken,
          id,
          name: "the test destination",
          triggerExport: true,
        };
        const { error, destination: destination } =
          await specHelper.runAction<DestinationEdit>(
            "destination:edit",
            connection
          );
        expect(error).toBeFalsy();
        expect(destination.name).toBe("the test destination");

        runningRuns = await Run.findAll({
          where: { state: "running", creatorType: "group" },
        });

        expect(runningRuns.length).toBe(1);
        expect(runningRuns[0]).toEqual(
          expect.objectContaining({
            destinationId: id,
            creatorId: destination.destinationGroup.id,
            force: true,
          })
        );

        await runningRuns[0].stop();
      });

      test("an administator will not trigger an export by default when updating a destination", async () => {
        connection.params = {
          csrfToken,
          id,
          name: "test destination",
        };
        const { error, destination: destination } =
          await specHelper.runAction<DestinationEdit>(
            "destination:edit",
            connection
          );
        expect(error).toBeFalsy();
        expect(destination.name).toBe("test destination");

        const runningRuns = await Run.findAll({
          where: { state: "running", creatorType: "group" },
        });

        expect(runningRuns.length).toBe(0);
      });

      test("an administrator can export the members of a destination with a forced group run", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { success, error } =
          await specHelper.runAction<DestinationExport>(
            "destination:export",
            connection
          );

        expect(error).toBeFalsy();
        expect(success).toBeTruthy();

        const { destination } = await specHelper.runAction<DestinationView>(
          "destination:view",
          connection
        );

        const runningRuns = await Run.findAll({
          where: { state: "running", creatorType: "group" },
        });

        expect(runningRuns.length).toBe(1);
        expect(runningRuns[0]).toEqual(
          expect.objectContaining({
            destinationId: id,
            creatorId: destination.destinationGroup.id,
            force: true,
          })
        );
      });
    });

    test("remove the tracked group", async () => {
      connection.params = {
        csrfToken,
        id,
        trackedGroupId: "_none",
      };
      const { destination } = await specHelper.runAction<DestinationEdit>(
        "destination:edit",
        connection
      );
      expect(destination.destinationGroup).toBe(null);
    });

    test("an administrator can destroy a destination (soft)", async () => {
      connection.params = {
        csrfToken,
        force: false,
        id,
      };
      const destroyResponse = await specHelper.runAction<DestinationDestroy>(
        "destination:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      const destination = await Destination.scope(null).findOne({
        where: { id },
      });
      expect(destination.state).toBe("deleted");
    });

    test("an administrator can destroy a destination (force)", async () => {
      connection.params = {
        csrfToken,
        force: true,
        id,
      };
      const destroyResponse = await specHelper.runAction<DestinationDestroy>(
        "destination:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      const destination = await Destination.scope(null).findOne({
        where: { id },
      });
      expect(destination).toBeFalsy();
    });
  });
});
