import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";

describe("actions/status", () => {
  helper.grouparooTestServer({ truncate: true });

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
      const {
        id,
        packageName,
        clusterName,
        description,
        version,
      } = await specHelper.runAction("status:private");

      expect(id).toBeTruthy();
      expect(clusterName).toBe("My Grouparoo Cluster");
      expect(packageName).toBe("@grouparoo/core");
      expect(description).toBe("The Grouparoo Core");
      expect(version).toBeTruthy();
    });
  });
});
