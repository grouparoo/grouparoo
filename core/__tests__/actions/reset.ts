import { helper } from "@grouparoo/spec-helper";
import { cache, Connection, specHelper } from "actionhero";
import { Profile, Import, Export, App, Property } from "../../src";

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

    describe("reset:cache", () => {
      test("the cache can be reset", async () => {
        await cache.save("testKey", { k: "v" });
        const responseA = await cache.load("testKey");
        expect(responseA.value).toEqual({ k: "v" });

        connection.params = { csrfToken };
        const { success, error } = await specHelper.runAction(
          "reset:cache",
          connection
        );
        expect(error).toBeFalsy();
        expect(success).toBe(true);

        await expect(cache.load("testKey")).rejects.toThrow(/not found/);
      });
    });

    describe("reset:data", () => {
      test("the data can be reset", async () => {
        await helper.factories.profile();
        await helper.factories.import();
        await helper.factories.export();

        connection.params = { csrfToken };
        const { success, error } = await specHelper.runAction(
          "reset:data",
          connection
        );
        expect(error).toBeFalsy();
        expect(success).toBe(true);

        // removed data models
        expect(await Profile.count()).toBe(0);
        expect(await Import.count()).toBe(0);
        expect(await Export.count()).toBe(0);

        // kept config models
        expect(await App.count()).toBeGreaterThan(0);
        expect(await Property.count()).toBeGreaterThan(0);
      });
    });

    describe("reset:cluster", () => {
      test("the cluster can be reset", async () => {
        await helper.factories.profile();

        connection.params = { csrfToken };
        const { success, counts, error } = await specHelper.runAction(
          "reset:cluster",
          connection
        );
        expect(error).toBeFalsy();
        expect(success).toBe(true);

        // removed most models
        expect(counts.Profile).toBeGreaterThan(0);
        expect(counts.Source).toBeGreaterThan(0);
        expect(counts.Property).toBeGreaterThan(0);
        expect(counts.App).toBeGreaterThan(0);

        // did not remove teams
        expect(counts.TeamMember).toBeFalsy();
        expect(counts.Team).toBeFalsy();
      });

      test("the user is still signed in", async () => {
        connection.params = { csrfToken };
        const { teamMember, error } = await specHelper.runAction(
          "session:view",
          connection
        );

        expect(error).toBeUndefined();
        expect(teamMember.id).toBeTruthy();
      });
    });
  });
});
