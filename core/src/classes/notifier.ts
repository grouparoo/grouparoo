import { log } from "actionhero";
import { Notification } from "../models/Notification";
import { Op } from "sequelize";

export interface NotifierMessagePayload {
  subject: string;
  body: string;
  cta?: string;
  ctaLink?: string;
}

export abstract class Notifier {
  from: string; // who the notifications will be from
  messageLimit: number; // how many notifications from this sender to keep around

  /**
   * Generate the notification via `buildNotification` and store it
   * Also check if there are any notifications to remove with `pruneNotifications`
   */
  async run() {
    log(`running notifier: ${this.constructor.name}`);
    const notificationPayload = await this.buildNotification();

    if (!notificationPayload) return;

    await this.storeOrUpdateNotification(notificationPayload);
    await this.pruneNotifications();
  }

  /**
   * Generate the notification to store (or null)
   */
  abstract buildNotification(): Promise<NotifierMessagePayload>;

  async storeOrUpdateNotification(notificationPayload: NotifierMessagePayload) {
    // the combination of `from` + `subject` is the unique key for the notification
    let notification = await Notification.findOne({
      where: {
        from: this.from,
        subject: notificationPayload.subject,
      },
    });

    if (!notification) {
      notification = await Notification.create({
        from: this.from,
        subject: notificationPayload.subject,
        body: notificationPayload.body,
        cta: notificationPayload.cta,
        ctaLink: notificationPayload.ctaLink,
      });
    } else {
      // always update the message with new body content
      await notification.update({
        body: notificationPayload.body,
        cta: notificationPayload.cta,
        ctaLink: notificationPayload.ctaLink,
        updatedAt: new Date(), // always bump the `updatedAt`
      });
    }
  }

  /**
   * Remove all notifications from this notifier
   */
  async clearNotifications() {
    return Notification.destroy({
      where: { from: this.from },
    });
  }

  async pruneNotifications() {
    const oldNotifications = await Notification.findAll({
      where: { from: this.from },
      offset: this.messageLimit,
      order: [["createdAt", "desc"]],
    });

    if (oldNotifications.length === 0) return;

    await Notification.destroy({
      where: { id: { [Op.in]: oldNotifications.map((n) => n.id) } },
    });
  }
}
