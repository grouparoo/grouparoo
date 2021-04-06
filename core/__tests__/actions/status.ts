import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";

describe("actions/status", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  describe("signed out", () => {
    describe("status:public", () => {
      test("the public status action is OK", async () => {
        const { status } = await specHelper.runAction("status:public");
        expect(status).toBe("ok");
      });
    });

    describe("status:private", () => {
      test("cannot use status:private without being signed in", async () => {
        const { error, metrics } = await specHelper.runAction("status:private");
        expect(error.code).toBe("AUTHENTICATION_ERROR");
        expect(metrics).toBeUndefined();
      });
    });
  });

  describe("signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      await specHelper.runTask("system:status", {});
    });

    beforeAll(async () => {
      await specHelper.runAction("team:initialize", {
        firstName: "Mario",
        lastName: "Mario",
        password: "P@ssw0rd!",
        email: "mario@example.com",
      });
    });

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };
    });

    describe("status:public", () => {
      test("the public status action is OK", async () => {
        const { status } = await specHelper.runAction(
          "status:public",
          connection
        );
        expect(status).toBe("ok");
      });
    });

    describe("status:private", () => {
      test("can retrieve cluster name", async () => {
        const { clusterName } = await specHelper.runAction(
          "status:private",
          connection
        );
        expect(clusterName).toBe("My Grouparoo Cluster");
      });

      test("can retrieve server uptime via the private status action", async () => {
        const { uptime } = await specHelper.runAction(
          "status:private",
          connection
        );
        expect(uptime).toBeGreaterThan(0);
      });

      test("can retrieve server metadata", async () => {
        const {
          id,
          packageName,
          clusterName,
          description,
          version,
        } = await specHelper.runAction("status:private", connection);

        expect(id).toBeTruthy();
        expect(clusterName).toBe("My Grouparoo Cluster");
        expect(packageName).toBe("@grouparoo/core");
        expect(description).toBe("The Grouparoo Core");
        expect(version).toBeTruthy();
      });

      test("includes status metrics", async () => {
        const { metrics } = await specHelper.runAction(
          "status:private",
          connection
        );

        const nodeEnvMetric = metrics.find(
          (s) => s.collection === "cluster" && s.topic === "node_env"
        );
        expect(nodeEnvMetric.value).toBe("test");
      });
    });
  });
});
