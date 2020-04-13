import { helper } from "./../utils/specHelper";
import { specHelper } from "actionhero";
import { Source } from "./../../src/models/Source";
import { Option } from "./../../src/models/Option";
import { App } from "./../../src/models/App";

let actionhero;
let app;
let guid;
let profilePropertyRuleGuid;

describe("actions/sources", () => {
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

    app = await App.create({
      name: "test app",
      type: "test-plugin-app",
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
    });

    test("an administrator can create a new source from an app", async () => {
      connection.params = {
        csrfToken,
        name: "test source",
        type: "test-plugin-import",
        appGuid: app.guid,
        options: { table: "users" },
      };
      const { error, source } = await specHelper.runAction(
        "source:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.guid).toBeTruthy();
      expect(source.app.guid).toBe(app.guid);
      expect(source.app.name).toBe("test app");
      expect(source.state).toBe("draft");

      guid = source.guid;
    });

    test("an administrator can list all the sources", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, sources, total } = await specHelper.runAction(
        "sources:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(sources.length).toBe(1);
      expect(sources[0].app.name).toBe("test app");
      expect(total).toBe(1);
    });

    test("a source can be bootstrapped with a profile property rule", async () => {
      connection.params = {
        csrfToken,
        guid,
        key: "userId",
        type: "integer",
        mappedColumn: "id",
      };
      const { profilePropertyRule, error } = await specHelper.runAction(
        "source:bootstrapUniqueProfilePropertyRule",
        connection
      );
      expect(error).toBeUndefined();
      expect(profilePropertyRule.guid).toBeTruthy();
      profilePropertyRuleGuid = profilePropertyRule.guid;
    });

    test("an administrator can list the connection + app pairs available for a new connection", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, connectionApps } = await specHelper.runAction(
        "sources:connectionApps",
        connection
      );
      expect(error).toBeUndefined();
      expect(connectionApps.length).toBe(1);
      expect(connectionApps[0].app.guid).toBe(app.guid);
      expect(connectionApps[0].connection.app).toBe("test-plugin-app");
    });

    test("an administrator can enumerate the source connection options", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, options } = await specHelper.runAction(
        "source:connectionOptions",
        connection
      );
      expect(error).toBeUndefined();
      expect(options).toEqual({ table: { options: ["users"], type: "list" } });
    });

    test("a source with no options will see an empty preview", async () => {
      const options = await Option.findAll({ where: { ownerGuid: guid } });
      await Promise.all(options.map((o) => o.destroy()));

      connection.params = {
        csrfToken,
        guid,
      };
      const { error, preview } = await specHelper.runAction(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview).toEqual([]);
    });

    test("a source can provide options to a preview", async () => {
      connection.params = {
        csrfToken,
        guid,
        options: { table: "users" },
      };
      const { error, preview } = await specHelper.runAction(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
    });

    test("a source can have options set", async () => {
      connection.params = {
        csrfToken,
        guid,
        options: { table: "users" },
      };
      const { error, source } = await specHelper.runAction(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.options).toEqual({ table: "users" });
    });

    test("a source with options set will return a preview", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, preview } = await specHelper.runAction(
        "source:preview",
        connection
      );
      expect(error).toBeUndefined();
      expect(preview).toEqual([
        { id: 1, fname: "mario", lname: "mario" },
        { id: 2, fname: "luigi", lname: "mario" },
      ]);
    });

    test("a source can have mapping set", async () => {
      connection.params = {
        csrfToken,
        guid,
        mapping: { id: "userId" },
      };
      const { error, source } = await specHelper.runAction(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.mapping).toEqual({ id: "userId" });
    });

    test("a source can be made active", async () => {
      connection.params = {
        csrfToken,
        guid,
        state: "ready",
      };
      const { error, source } = await specHelper.runAction(
        "source:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(source.state).toBe("ready");
    });

    test("an administrator can view a source", async () => {
      connection.params = {
        csrfToken,
        guid,
      };
      const { error, source } = await specHelper.runAction(
        "source:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(source.guid).toBeTruthy();
      expect(source.app.name).toBe("test app");
    });

    test("an administrator can destroy a source", async () => {
      connection.params = {
        csrfToken,
        guid,
        mapping: {},
      };
      const editResponse = await specHelper.runAction(
        "source:edit",
        connection
      );
      expect(editResponse.error).toBeUndefined();

      connection.params = {
        csrfToken,
        guid: profilePropertyRuleGuid,
      };
      const deleteRuleResponse = await specHelper.runAction(
        "profilePropertyRule:destroy",
        connection
      );
      expect(deleteRuleResponse.error).toBeUndefined();

      connection.params = {
        csrfToken,
        guid,
      };
      const destroyResponse = await specHelper.runAction(
        "source:destroy",
        connection
      );
      expect(destroyResponse.error).toBeUndefined();
      expect(destroyResponse.success).toBe(true);

      const count = await Source.count();
      expect(count).toBe(0);
    });
  });
});
