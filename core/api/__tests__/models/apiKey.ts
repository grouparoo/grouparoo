import { helper } from "./../utils/specHelper";
import { ApiKey } from "./../../src/models/ApiKey";
import { Log } from "./../../src/models/Log";
import { Permission } from "./../../src/models/Permission";

let actionhero;

describe("models/apiKey", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("an apiKey can be created", async () => {
    const apiKey = new ApiKey({ name: "test key" });
    await apiKey.save();

    expect(apiKey.guid.length).toBe(40);
    expect(apiKey.createdAt).toBeTruthy();
    expect(apiKey.updatedAt).toBeTruthy();
  });

  test("creating an apiKey creates a log entry", async () => {
    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "apiKey" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("destroying an apiKey creates a log entry", async () => {
    const apiKey = await ApiKey.findOne();
    await apiKey.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "destroy", topic: "apiKey" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("apiKeys are created with neither read no write permissions for each topic", async () => {
    const apiKey = await ApiKey.create({ name: "permission key" });
    const permissions = await apiKey.$get("permissions");

    permissions.forEach((permission) => {
      expect(permission.read).toBe(false);
      expect(permission.write).toBe(false);
    });

    await apiKey.destroy();
  });

  test("permissions are deleted along with the apiKey", async () => {
    let count = await Permission.count();
    expect(count).toEqual(0);

    const apiKey = await ApiKey.create({ name: "permission apiKey" });
    count = await Permission.count();
    expect(count).toBeGreaterThan(0);

    await apiKey.destroy();
    count = await Permission.count();
    expect(count).toEqual(0);
  });

  describe("validations", () => {
    test("apiKey names are unique", async () => {
      await ApiKey.create({ name: "test key" });
      const apiKey = new ApiKey({ name: "test key" });
      await expect(apiKey.save()).rejects.toThrow(/Validation error/);
    });

    test("apiKey names must be longer than 3 characters", async () => {
      const apiKey = new ApiKey({ name: "a" });
      await expect(apiKey.save()).rejects.toThrow(/Validation error/);
    });

    test("apiKey apiKeys are unique", async () => {
      const originalKey = await ApiKey.create({ name: "key 1" });
      const apiKey = await ApiKey.create({ name: "key 2" });
      await expect(
        apiKey.update({ apiKey: originalKey.apiKey })
      ).rejects.toThrow(/Validation error/);
    });
  });
});
