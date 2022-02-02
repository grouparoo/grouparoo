import { helper } from "../src";
import { GrouparooRecord } from "@grouparoo/core";

describe("model/log", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("the GrouparooRecord model works", async () => {
    const record = await helper.factories.record();

    const count = await GrouparooRecord.count();
    expect(count).toBe(1);

    await record.destroy();
  });
});
