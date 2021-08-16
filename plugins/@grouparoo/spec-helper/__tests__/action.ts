import { helper } from "../src";
import { specHelper } from "actionhero";
import { PublicStatus } from "@grouparoo/core/src/actions/status";

describe("actions/status", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("the public status action is OK", async () => {
    const { status } = await specHelper.runAction<PublicStatus>(
      "status:public"
    );
    expect(status).toBe("ok");
  });
});
