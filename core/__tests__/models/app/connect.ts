import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { App } from "../../../src";
import { AppOps } from "../../../src/modules/ops/app";

describe("AppOps", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  it("should always return a connection object when given a connect method, even when run multiple times", async () => {
    const app = new App({
      name: "test app",
      type: "test-plugin-app",
    });
    await app.save();

    for (let i = 0; i < 8; i++) {
      expect(await AppOps.connect(app)).toBe(true);
    }
  });
});
