import { helper } from "./../utils/specHelper";
import { Log } from "./../../src/models/Log";

let actionhero;

describe("models/log", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("a log entry can be created and data saved to JSON", async () => {
    const log = await Log.create({
      topic: "profile",
      verb: "create",
      message: "hello",
      data: {
        key: "value",
      },
    });

    expect(log.guid).toMatch(/^log_/);
    expect(log.guid.length).toBe(40);

    await log.reload();
    expect(log.data["key"]).toBe("value");

    await log.destroy();
  });

  test("old entries can be swept away", async () => {
    const oldLog = await Log.create({
      topic: "profile",
      verb: "create",
      message: "",
      data: {},
    });

    oldLog.set({ createdAt: new Date(0) }, { raw: true });
    oldLog.changed("createdAt", true);
    await oldLog.save({
      silent: true,
      fields: ["createdAt"],
    });

    let count = await Log.count();
    expect(count).toBe(1);

    await Log.sweep();

    const remaining = await Log.findAll();
    expect(remaining.length).toBe(0);
  });
});
