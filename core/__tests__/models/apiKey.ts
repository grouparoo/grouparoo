import { helper } from "@grouparoo/spec-helper";
import { ApiKey, Permission } from "../../src";

describe("models/apiKey", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("an apiKey can be created", async () => {
    const apiKey = new ApiKey({ name: "test key" });
    await apiKey.save();

    expect(apiKey.id.length).toBe(40);
    expect(apiKey.createdAt).toBeTruthy();
    expect(apiKey.updatedAt).toBeTruthy();

    await apiKey.destroy();
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
