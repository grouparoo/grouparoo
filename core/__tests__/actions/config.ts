import { helper } from "@grouparoo/spec-helper";
import { Connection, specHelper, rebuildConfig } from "actionhero";
import { ConfigUserCreate } from "../../src/actions/config";
import os from "os";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/configUser/config`;

process.env.GROUPAROO_CONFIG_DIR = configDir;

describe("actions/config", () => {
  let connection: Connection;

  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  beforeAll(async () => {
    connection = await specHelper.buildConnection();
    connection.params = {
      email: "mario@example.com",
      subscribed: false,
      company: "Nintendo",
    };
  });

  beforeAll(async () => {
    await helper.resetSettings();
  });

  beforeEach(async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";
    rebuildConfig();
  });

  afterEach(async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
    rebuildConfig();
  });

  test("throws an error unless in config mode", async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
    rebuildConfig();
    const { error } = await specHelper.runAction(
      "config:user:create",
      connection
    );
    expect(error.message).toEqual("Action only available in config mode.");
  });

  test("does not throw an error in config mode", async () => {
    const { error, user } = await specHelper.runAction<ConfigUserCreate>(
      "config:user:create",
      connection
    );
    expect(error).toBeUndefined();
    expect(user.email).toEqual(true);
  });
});
