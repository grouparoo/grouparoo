import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Notification } from "../models/Notification";
import { Op, WhereAttributeHash } from "sequelize";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class NotificationsList extends AuthenticatedAction {
  name = "notifications:list";
  description = "list notification";
  outputExample = {};
  permission: ActionPermission = { topic: "notification", mode: "read" };
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [["createdAt", "desc"]],
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<NotificationsList>;
  }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {} as WhereAttributeHash,
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
  name = "notification:view";
  description = "view a notification";
  outputExample = {};
  permission: ActionPermission = { topic: "notification", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<NotificationView>;
  }) {
    const notification = await Notification.findById(params.id);
    await notification.update({ readAt: new Date() });
    return { notification: await notification.apiData() };
  }
}
