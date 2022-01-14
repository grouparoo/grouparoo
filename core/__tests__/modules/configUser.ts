import fs from "fs";
import os from "os";
import { helper } from "@grouparoo/spec-helper";
import { ConfigUser } from "../../src/modules/configUser";
import { Setting, plugin } from "../../src";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/configUser/config`;

process.env.GROUPAROO_CONFIG_DIR = configDir;

describe("modules/ConfigUser", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";

    const localFile = await ConfigUser.localUserFilePath();
    if (fs.existsSync(localFile)) fs.rmSync(localFile);
    await Setting.truncate();
  });

  afterEach(async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
    const localFile = await ConfigUser.localUserFilePath();
    if (fs.existsSync(localFile)) fs.rmSync(localFile);
  });

  test("does nothing unless in cli:config mode", async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
    expect(fs.existsSync(await ConfigUser.localUserFilePath())).toEqual(false);
    await ConfigUser.create({
      email: "demo@grouparoo.com",
      company: "My Company",
    });
    expect(fs.existsSync(await ConfigUser.localUserFilePath())).toEqual(false);
    const user = await ConfigUser.get();
    expect(user).toEqual(null);
  });

  // also tests the get() method
  test("writes a file to .local/user.json", async () => {
    expect(fs.existsSync(await ConfigUser.localUserFilePath())).toEqual(false);
    await ConfigUser.create({
      email: "demo@grouparoo.com",
      company: "My Company",
    });
    expect(fs.existsSync(await ConfigUser.localUserFilePath())).toEqual(true);
    const user = await ConfigUser.get();
    expect(Object.keys(user)).toEqual(["email"]);
    expect(user.email).toEqual(true);
  });

  test("stores the company as the cluster name", async () => {
    await plugin.registerSetting(
      "testPlugin",
      "cluster-name",
      "My Grouparoo Cluster",
      "My Grouparoo Cluster",
      "Name of the cluster",
      "string"
    );
    await ConfigUser.create({
      email: "demo@grouparoo.com",
      company: "My Company",
    });
    const setting = await Setting.findOne({ where: { key: "cluster-name" } });
    expect(setting.value).toEqual("My Company");
  });
});
