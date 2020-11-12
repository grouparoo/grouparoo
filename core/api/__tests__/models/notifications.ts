import { helper } from "@grouparoo/spec-helper";
import { Notification } from "../../src/models/Notification";

let actionhero;

describe("models/notification", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("notifications can be created", async () => {
    const notification = await Notification.create({
      from: "test",
      subject: "test",
      body: "test",
    });

    expect(notification.readAt).toBeFalsy();
  });

  test("from, subject, and body are required", async () => {
    await expect(
      Notification.create({ from: "test", body: "test" })
    ).rejects.toThrow(/notNull Violation/);
    await expect(
      Notification.create({ from: "test", subject: "test" })
    ).rejects.toThrow(/notNull Violation/);
    await expect(
      Notification.create({ subject: "test", body: "test" })
    ).rejects.toThrow(/notNull Violation/);
  });
});
