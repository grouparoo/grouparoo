import { helper } from "../src";
import { specHelper } from "actionhero";

describe("actions/status", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("the public status action is OK", async () => {
    const { status } = await specHelper.runAction("status:public");
    expect(status).toBe("ok");
  });
});
