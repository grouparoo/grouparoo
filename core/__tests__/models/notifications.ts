import { helper } from "@grouparoo/spec-helper";
import { Notification } from "../../src";

describe("models/notification", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

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
