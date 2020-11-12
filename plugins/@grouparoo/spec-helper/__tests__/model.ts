import { helper } from "../src";
import { Log } from "@grouparoo/core";
let actionhero;

describe("model/log", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("the Log model works", async () => {
    const log = await Log.create({
      topic: "test",
      verb: "create",
      data: {},
      ownerGuid: "test",
      message: "log test message",
    });

    const count = await Log.count();
    expect(count).toBeGreaterThan(0);

    await log.destroy();
  });
});
