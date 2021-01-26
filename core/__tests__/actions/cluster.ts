import { helper } from "@grouparoo/spec-helper";
import { cache, Connection, specHelper } from "actionhero";
import { App, Log, SetupStep } from "../../src";

describe("actions/cluster", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("cluster", () => {
    let connection: Connection;
    let csrfToken: string;

    beforeAll(async () => {
      await helper.factories.properties();
      await specHelper.runAction("team:initialize", {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      });
    });

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = {
        email: "mario@example.com",
        password: "P@ssw0rd!",
      };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    describe("cluster:clearCache", () => {
      test("the cache can be cleared", async () => {
        await cache.save("testKey", { k: "v" });
        const responseA = await cache.load("testKey");
        expect(responseA.value).toEqual({ k: "v" });

        connection.params = { csrfToken };
        const { success, error } = await specHelper.runAction(
          "cluster:clearCache",
          connection
        );
        expect(error).toBeFalsy();
        expect(success).toBe(true);

        await expect(cache.load("testKey")).rejects.toThrow(/not found/);
      });
    });

    describe("cluster:destroy", () => {
      test("the action will delete the data from most models", async () => {
        connection.params = { csrfToken };
        const { error, success, counts } = await specHelper.runAction(
          "cluster:destroy",
          connection
        );

        expect(error).toBeFalsy();
        expect(success).toBe(true);
        expect(counts).toEqual(expect.objectContaining({ Source: 1 }));
      });

      test("there are no apps", async () => {
        const apps = await App.scope(null).findAll();
        expect(apps.length).toBe(0);
      });

      test("all the SetupSteps will be set to incomplete", async () => {
        const completeSetupSteps = await SetupStep.count({
          where: { complete: true },
        });
        expect(completeSetupSteps).toBe(0);
      });

      test("teams still remain and the user is still logged in", async () => {
        connection.params = { csrfToken };
        const { teamMember, error } = await specHelper.runAction(
          "session:view",
          connection
        );

        expect(error).toBeUndefined();
        expect(teamMember.guid).toBeTruthy();
      });

      test("log messages were created", async () => {
        const logs = await Log.findAll({
          order: [["createdAt", "desc"]],
          limit: 2,
        });

        expect(logs[0].message).toEqual("Grouparoo Cluster Reset");
        expect(logs[0].topic).toEqual("cluster");
        expect(logs[1].message).toMatch(/erased \d* instances/);
        expect(logs[1].topic).toEqual("cluster");
      });
    });
  });
});
