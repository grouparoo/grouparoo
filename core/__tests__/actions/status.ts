import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper, task } from "actionhero";
import os from "os";
import fs from "fs";
import { ConfigUser } from "../../src/modules/configUser";
import { Status } from "../../src/modules/status";
import { PrivateStatus, PublicStatus } from "../../src/actions/status";
import { SessionCreate } from "../../src/actions/session";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/configUser/config`;

process.env.GROUPAROO_CONFIG_DIR = configDir;

describe("actions/status", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("signed out", () => {
    describe("status:public", () => {
      test("the public status action is OK", async () => {
        const { status } = await specHelper.runAction<PublicStatus>(
          "status:public"
        );
        expect(status).toBe("ok");
      });
    });

    describe("status:private", () => {
      test("cannot use status:private without being signed in", async () => {
        const { error, metrics } = await specHelper.runAction<PrivateStatus>(
          "status:private"
        );
        expect(error.code).toBe("AUTHENTICATION_ERROR");
        expect(metrics).toBeUndefined();
      });

      describe("config mode", () => {
        let localFile: string;
        beforeAll(async () => {
          localFile = await ConfigUser.localUserFilePath();
        });

        beforeEach(async () => {
          process.env.GROUPAROO_RUN_MODE = "cli:config";

          await ConfigUser.create({
            email: "mario@example.com",
            company: "Nintendo",
          });
        });
        afterEach(async () => {
          process.env.GROUPAROO_RUN_MODE = undefined;
          if (fs.existsSync(localFile)) fs.rmSync(localFile);
          await helper.resetSettings();
        });

        test("cannot use status:private with a local users file in run mode", async () => {
          process.env.GROUPAROO_RUN_MODE = "cli:run";

          const { error, metrics } = await specHelper.runAction<PrivateStatus>(
            "status:private"
          );
          expect(error.code).toBe("AUTHENTICATION_ERROR");
          expect(metrics).toBeUndefined();
        });
        test("can use status:private with a local users file in run mode", async () => {
          const { error, metrics } = await specHelper.runAction<PrivateStatus>(
            "status:private"
          );
          expect(error).toBeUndefined();
          expect(metrics).toEqual({});
        });
      });
    });
  });

  describe("signed in", () => {
    let connection: Connection;
    let csrfToken: string;

    beforeAll(async () => {
      await specHelper.runTask("status", {});
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
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };
    });

    describe("status:public", () => {
      test("the public status action is OK", async () => {
        const { status } = await specHelper.runAction<PublicStatus>(
          "status:public",
          connection
        );
        expect(status).toBe("ok");
      });
    });

    describe("status:private", () => {
      let taskDetailMock: jest.SpyInstance;

      afterEach(() => {
        process.env.GROUPAROO_RUN_MODE = undefined;
      });

      beforeAll(() => {
        taskDetailMock = jest
          .spyOn(task, "details")
          .mockImplementation(async () => {
            return {
              queues: {},
              workers: {},
              stats: {},
              leader: "LEADER",
            };
          });
      });

      test("can retrieve cluster name", async () => {
        const { clusterName } = await specHelper.runAction<PrivateStatus>(
          "status:private",
          connection
        );
        expect(clusterName).toBe("My Grouparoo Cluster");
      });

      test("can retrieve server uptime via the private status action", async () => {
        const { uptime } = await specHelper.runAction<PrivateStatus>(
          "status:private",
          connection
        );
        expect(uptime).toBeGreaterThan(0);
      });

      test("can retrieve runMode", async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:start";
        const { error, runMode, leader } =
          await specHelper.runAction<PrivateStatus>(
            "status:private",
            connection
          );

        expect(error).toBeUndefined();
        expect(runMode).toEqual("cli:start");
        expect(leader).toEqual("LEADER");
        expect(taskDetailMock).toHaveBeenCalled();
      });

      test("can retrieve server metadata", async () => {
        const { id, packageName, clusterName, description, version } =
          await specHelper.runAction<PrivateStatus>(
            "status:private",
            connection
          );

        expect(id).toBeTruthy();
        expect(clusterName).toBe("My Grouparoo Cluster");
        expect(packageName).toBe("@grouparoo/core");
        expect(description).toBe("The Grouparoo Core");
        expect(version).toBeTruthy();
      });

      test("includes status metrics", async () => {
        await Status.setAll();

        const { metrics } = await specHelper.runAction<PrivateStatus>(
          "status:private",
          connection
        );

        expect(Object.keys(metrics).length).toBeGreaterThanOrEqual(1);
        const nodeEnvMetric = metrics["env"]["NODE_ENV"][0].metric;
        expect(nodeEnvMetric.value).toBe("test");
      });

      test("will throw with no leader in start mode", async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:start";
        taskDetailMock.mockRestore();

        const { error } = await specHelper.runAction<PrivateStatus>(
          "status:private",
          connection
        );

        expect(error.message).toBe(
          'no leader for this Grouparoo cluster "My Grouparoo Cluster" (cli:start)'
        );
      });

      test("will not throw with no leader in other modes", async () => {
        process.env.GROUPAROO_RUN_MODE = "cli:run";
        taskDetailMock.mockRestore();

        const { error, runMode, leader } =
          await specHelper.runAction<PrivateStatus>(
            "status:private",
            connection
          );

        expect(error).toBeUndefined();
        expect(runMode).toEqual("cli:run");
        expect(leader).toBeNull();
      });
    });
  });
});
