import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Notification } from "../models/Notification";

export class NotificationsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "notifications:list";
    this.description = "list notification";
    this.outputExample = {};
    this.permission = { topic: "notification", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async run({ params }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {},
    };

    const total = await Notification.count(search);
    const notifications = await Notification.findAll(search);

    return {
      total,
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

  async run({ params }) {
    const notification = await Notification.findByGuid(params.guid);
    await notification.update({ readAt: new Date() });
    return { notification: await notification.apiData() };
  }
}
