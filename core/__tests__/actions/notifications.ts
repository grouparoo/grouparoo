import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Notification } from "../../src";

describe("actions/notifications", () => {
  helper.grouparooTestServer({ truncate: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  beforeAll(async () => {
    await helper.factories.notification();
    await helper.factories.notification();
    await helper.factories.notification();
  });

  describe("reader signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can view notifications", async () => {
      connection.params = { csrfToken };
      const { error, notifications, total, unreadCount } =
        await specHelper.runAction("notifications:list", connection);

      expect(error).toBeUndefined();
      expect(notifications.length).toBe(3);
      expect(total).toBe(3);
      expect(unreadCount).toBe(3);
    });

    test("a reader can read a notification and mark it as read", async () => {
      const notificationObject = await Notification.findOne();

      connection.params = { csrfToken, id: notificationObject.id };
      const { error, notification } = await specHelper.runAction(
        "notification:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(notification.from).toBeTruthy();
      expect(notification.subject).toBeTruthy();
      expect(notification.body).toBeTruthy();
      expect(notification.readAt).toBeTruthy();
      expect(notification.cta).toBeTruthy();
      expect(notification.ctaLink).toBeTruthy();
    });
  });
});
