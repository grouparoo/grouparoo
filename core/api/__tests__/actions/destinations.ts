import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Destination } from "./../../src/models/Destination";

let actionhero;
let app;
let guid;

describe("actions/destinations", () => {
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

    test("only one destination can be created for each app", async () => {
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
        'destination "test destination" is already using this app'
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
      expect(connectionApps.length).toBe(1);
      expect(connectionApps[0].app.guid).toBe(app.guid);
      expect(connectionApps[0].connection.name).toBe("test-plugin-export");
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

    test("an administrator can add a group to be tracked", async () => {
      const group = await helper.factories.group();

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
      expect(destination.destinationGroups.length).toBe(1);
      expect(destination.destinationGroups[0].guid).toBe(group.guid);
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
      expect(destination.destinationGroups.length).toBe(1);

      connection.params = {
        csrfToken,
        guid,
        groupGuid: destination.destinationGroups[0].guid,
      };
      const { error } = await specHelper.runAction(
        "destination:unTrackGroup",
        connection
      );
      expect(error).toBeUndefined();
    });

    test("an administrator can see connectionOptions", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { options } = await specHelper.runAction(
        "destination:connectionOptions",
        connection
      );
      expect(options).toEqual({
        table: { type: "list", options: ["users_out"] },
      });
    });

    test("an administrator cannot see a destination preview with no options set", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { preview } = await specHelper.runAction(
        "destination:preview",
        connection
      );
      expect(preview).toEqual([]);
    });

    test("an administrator cannot see a destination preview with options provided", async () => {
      connection.params = {
        csrfToken,
        guid,
        options: { table: "aaa", where: "aaa" },
      };
      const { preview } = await specHelper.runAction(
        "destination:preview",
        connection
      );
      expect(preview).toEqual([
        { fname: "mario", id: 1, lname: "mario" },
        { fname: "luigi", id: 2, lname: "mario" },
      ]);
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
