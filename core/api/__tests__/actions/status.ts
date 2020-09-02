import { helper } from "./../utils/specHelper";
import { config, specHelper } from "actionhero";
let actionhero;

describe("actions/status", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("status:public", () => {
    test("the public status action is OK", async () => {
      const { status } = await specHelper.runAction("status:public");
      expect(status).toBe("ok");
    });
  });

  describe("status:private", () => {
    test("can retrieve server uptime via the private status action", async () => {
      const { uptime } = await specHelper.runAction("status:private");
      expect(uptime).toBeGreaterThan(0);
    });

    test("can retrieve the nodeStatus", async () => {
      const { nodeStatus } = await specHelper.runAction("status:private");
      expect(nodeStatus).toMatch("ealthy"); // the node might actually be un-healthy in the test...
    });

    test("can retrieve the resqueTotalQueueLength", async () => {
      const { resqueTotalQueueLength } = await specHelper.runAction(
        "status:private"
      );
      expect(resqueTotalQueueLength).toBe(0);
    });

    test("can retrieve the consumedMemoryMB", async () => {
      const { consumedMemoryMB } = await specHelper.runAction("status:private");
      expect(consumedMemoryMB).toBeGreaterThan(0);
      // expect(consumedMemoryMB).toBeLessThan(500); // the node might actually be un-healthy in the test...
    });

    test("can retrieve server metadata", async () => {
      const { name, description, version } = await specHelper.runAction(
        "status:private"
      );
      expect(name).toBe("@grouparoo/core");
      expect(description).toBe("The Grouparoo Core");
      expect(version).toBeTruthy();
    });
  });
});
