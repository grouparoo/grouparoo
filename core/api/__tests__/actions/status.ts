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

  test("should have booted into the test env", () => {
    expect(process.env.NODE_ENV).toEqual("test");
    expect(config.process.env).toEqual("test");
    expect(config.process.id).toBeTruthy();
  });

  test("can retrieve server uptime via the status action", async () => {
    const { uptime } = await specHelper.runAction("status");
    expect(uptime).toBeGreaterThan(0);
  });
});
