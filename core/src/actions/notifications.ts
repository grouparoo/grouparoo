import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Notification } from "../models/Notification";
import { Op } from "sequelize";
import { APIData } from "../modules/apiData";

export class NotificationsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "notifications:list";
    this.description = "list notification";
    this.outputExample = {};
    this.permission = { topic: "notification", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      order: {
        required: false,
        formatter: APIData.ensureObject,
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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const notification = await Notification.findById(params.id);
    await notification.update({ readAt: new Date() });
    return { notification: await notification.apiData() };
  }
}
