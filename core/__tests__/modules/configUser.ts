import fs from "fs";
import os from "os";
import { helper } from "@grouparoo/spec-helper";
import { ConfigUser } from "../../src/modules/configUser";
import * as GrouparooSubscriptionModule from "../../src/modules/grouparooSubscription";
import { Setting, plugin } from "../../src";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/configUser/config`;

process.env.GROUPAROO_CONFIG_DIR = configDir;

describe("modules/ConfigUser", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let grouparooSubscription: jest.SpyInstance;

  beforeEach(async () => {
    process.env.GROUPAROO_RUN_MODE = "cli:config";

    grouparooSubscription = jest
      .spyOn(GrouparooSubscriptionModule, "GrouparooSubscription")
      .mockImplementation(() => undefined);

    const localFile = await ConfigUser.localUserFilePath();
    if (fs.existsSync(localFile)) fs.rmSync(localFile);
  });

  afterEach(async () => {
    process.env.GROUPAROO_RUN_MODE = undefined;
    grouparooSubscription.mockRestore();
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
    const setting = await Setting.findOne({ where: { key: "cluster-name" } });
    expect(setting.value).not.toEqual("Grouparoo, Inc");

    await ConfigUser.create({
      email: "demo@grouparoo.com",
      company: "Grouparoo, Inc",
    });

    await setting.reload();
    expect(setting.value).toEqual("Grouparoo, Inc");
  });

  test("records that the user subscribed to the grouparoo newsletter", async () => {
    await ConfigUser.create({
      email: "demo@grouparoo.com",
      company: "My Company",
      subscribed: true,
    });

    expect(grouparooSubscription).toHaveBeenCalledTimes(1);
    expect(grouparooSubscription).toHaveBeenCalledWith({
      email: "demo@grouparoo.com",
      subscribed: true,
    });
  });

  test("records that the user did not subscribe to the grouparoo newsletter", async () => {
    await ConfigUser.create({
      email: "demo@grouparoo.com",
      company: "My Company",
      subscribed: false,
    });

    expect(grouparooSubscription).toHaveBeenCalledTimes(1);
    expect(grouparooSubscription).toHaveBeenCalledWith({
      email: "demo@grouparoo.com",
      subscribed: false,
    });
  });

  describe("customerId", () => {
    test("saves the customerId to .local/user.json", async () => {
      const filePath = await ConfigUser.localUserFilePath();
      expect(fs.existsSync(filePath)).toEqual(false);

      const setting = await plugin.readSetting("telemetry", "customer-id");
      await ConfigUser.loadOrStoreCustomerId();

      expect(fs.existsSync(filePath)).toEqual(true);
      const user = await ConfigUser.get();
      expect(Object.keys(user)).toEqual(["customerId"]);
      expect(user.customerId).toEqual(setting.value);
    });

    test("loads the customerId from .local/user.json", async () => {
      const filePath = await ConfigUser.localUserFilePath();
      expect(fs.existsSync(filePath)).toEqual(false);
      fs.writeFileSync(
        filePath,
        JSON.stringify({ customerId: "my-customer-id" })
      );

      const setting = await plugin.readSetting("telemetry", "customer-id");
      expect(setting.value).not.toEqual("my-customer-id");

      await ConfigUser.loadOrStoreCustomerId();

      await setting.reload();
      expect(setting.value).toEqual("my-customer-id");
    });
  });
});
