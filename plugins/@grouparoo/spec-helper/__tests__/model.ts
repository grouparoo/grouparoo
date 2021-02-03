import { helper } from "../src";
import { Log } from "@grouparoo/core";

describe("model/log", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("the Log model works", async () => {
    const log = await Log.create({
      topic: "test",
      verb: "create",
      data: {},
      ownerId: "test",
      message: "log test message",
    });

    const count = await Log.count();
    expect(count).toBeGreaterThan(0);

    await log.destroy();
  });
});
