import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Message } from "../models/Message";

export class MessagesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "messages:list";
    this.description = "list messages";
    this.outputExample = {};
    this.permission = { topic: "message", mode: "read" };
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

    const total = await Message.count(search);
    const messages = await Message.findAll(search);

    return {
      total,
      messages: await Promise.all(messages.map((message) => message.apiData())),
    };
  }
}

export class MessagesView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "message:view";
    this.description = "view a message";
    this.outputExample = {};
    this.permission = { topic: "message", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const message = await Message.findByGuid(params.guid);
    await message.update({ readAt: new Date() });
    return { message: await message.apiData() };
  }
}
