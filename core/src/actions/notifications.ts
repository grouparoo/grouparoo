import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Notification } from "../models/Notification";
import { Op } from "sequelize";

export class NotificationsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "notifications:list";
    this.description = "list notification";
    this.outputExample = {};
    this.permission = { topic: "notification", mode: "read" };
    this.inputs = {
      limit: {
        required: true,
        default: 100,
        formatter: (p) => parseInt(p, 10),
      },
      offset: { required: true, default: 0, formatter: (p) => parseInt(p, 10) },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {},
    };

    const total = await Notification.count(search);
    const notifications = await Notification.findAll(search);
    const unreadCount = await Notification.count({
      where: { readAt: { [Op.eq]: null } },
    });

    return {
      total,
      unreadCount,
      notifications: await Promise.all(
        notifications.map((notification) => notification.apiData())
      ),
    };
  }
}

export class NotificationView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "notification:view";
    this.description = "view a notification";
    this.outputExample = {};
    this.permission = { topic: "notification", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const notification = await Notification.findByGuid(params.guid);
    await notification.update({ readAt: new Date() });
    return { notification: await notification.apiData() };
  }
}
