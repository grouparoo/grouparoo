import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { Notifier } from "../../src/classes/notifier";
import { Notification } from "../../src";

describe("modules/notifiers", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("it loaded the notifiers at boot", async () => {
    expect(api.notifiers.notifiers.length).toBeGreaterThanOrEqual(1);
  });

  describe("with test notifiers", () => {
    class TestNotifier extends Notifier {
      constructor() {
        super();
        this.from = "test notifier";
        this.messageLimit = 2;
      }

      async buildNotification() {
        return {
          subject: `the time is ${new Date().toISOString()}`,
          body: new Date().getTime().toString(),
          cta: "See what's new",
          ctaLink: "/about",
        };
      }
    }

    let notifier: Notifier;

    beforeAll(() => {
      notifier = new TestNotifier();
    });

    beforeEach(async () => {
      await Notification.truncate();
    });

    test("notifiers can create notifications", async () => {
      await notifier.run();

      const notifications = await Notification.findAll();
      expect(notifications.length).toBe(1);
      expect(notifications[0].from).toBe("test notifier");
      expect(notifications[0].subject).toMatch(/the time is/);
    });

    test("messageLimit can limit the number of messages stored for each sender", async () => {
      await notifier.run();
      const firstMessage = await Notification.findOne();

      await helper.sleep();
      await notifier.run();
      await helper.sleep();
      await notifier.run();

      const notifications = await Notification.findAll({
        order: [["createdAt", "desc"]],
      });

      expect(notifications.length).toBe(2);
      expect(notifications.map((n) => n.id)).not.toContain(firstMessage.id);
      expect(parseInt(notifications[0].body)).toBeGreaterThan(
        parseInt(notifications[1].body)
      );
    });

    test("notifiers will not add duplicate messages", async () => {
      const hackedNotifier = new TestNotifier();
      hackedNotifier.buildNotification = async () => {
        return {
          subject: `same message`,
          body: "hi there",
          cta: "See what's new",
          ctaLink: "/about",
        };
      };

      await hackedNotifier.run();
      await hackedNotifier.run();
      await hackedNotifier.run();

      const notifications = await Notification.findAll();
      expect(notifications.length).toBe(1);
    });

    test("notifiers can clear their messages", async () => {
      await notifier.run();
      let count = await Notification.count();
      expect(count).toBe(1);

      await notifier.clearNotifications();
      count = await Notification.count();
      expect(count).toBe(0);
    });

    test("notifiers can opt not to return a message by returning null", async () => {
      const hackedNotifier = new TestNotifier();
      hackedNotifier.buildNotification = async () => {
        return null;
      };

      await hackedNotifier.run();

      const notificationsCount = await Notification.count();
      expect(notificationsCount).toBe(0);
    });
  });
});
