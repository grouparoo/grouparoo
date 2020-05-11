import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";

export class EventsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "events:list";
    this.description = "list many events";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "read" };
    this.inputs = {
      profileGuid: { required: false },
      type: { required: false },
      data: { required: false },
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [["occurredAt", "desc"]],
      },
    };
  }

  async run({ params, response }) {
    let data = {};
    if (params.data) {
      try {
        data = JSON.parse(params.data);
      } catch (error) {
        data = params.data;
      }
    }

    const events = await api.events.model.findAll({
      profileGuid: params.profileGuid,
      type: params.type,
      data: Object.keys(data).length > 0 ? data : undefined,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    const total = await api.events.model.count({
      profileGuid: params.profileGuid,
      type: params.type,
      data: Object.keys(data).length > 0 ? data : undefined,
    });

    response.events = events;
    response.total = total;
  }
}

export class EventCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "event:create";
    this.description = "create an event";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "write" };
    this.inputs = {
      type: { required: true },
      occurredAt: { required: false },
      userId: { required: false },
      anonymousId: { required: false },
      data: { required: false },
    };
  }

  async run({ session, connection, params, response }) {
    if (!params.userId && !params.anonymousId) {
      throw new Error(`either anonymousId or userId is required`);
    }

    let occurredAt = params.occurredAt;
    if (!occurredAt) {
      occurredAt = new Date();
    } else {
      try {
        occurredAt = new Date(occurredAt);
      } catch (error) {}
    }

    let data = params.data;
    try {
      data = JSON.parse(data);
    } catch (error) {}

    const producerGuid = session.teamMember
      ? session.teamMember.guid
      : session.apiKey.guid;

    const event = new api.events.model({
      producerGuid: producerGuid,
      type: params.type,
      userId: params.userId,
      anonymousId: params.anonymousId,
      ipAddress: connection.remoteIP,
      occurredAt,
      data,
    });

    await event.save();

    response.event = event;
  }
}

export class EventAutocompleteType extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "events:autocompleteType";
    this.description = "return matching event types";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "read" };
    this.inputs = {
      match: { required: false },
      limit: { required: false, default: 1000 },
      offset: { required: false, default: 0 },
      order: { required: false, default: [["type", "asc"]] },
    };
  }

  async run({ params, response }) {
    response.types = await api.events.model.types(params);
  }
}

export class EventView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "event:view";
    this.description = "view an event";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const event = await api.events.model.findByGuid(params.guid);
    response.event = event;
  }
}

export class EventDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "event:destroy";
    this.description = "destroy an event";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const event = await api.events.model.findByGuid(params.guid);
    await event.destroy();
    response.success = true;
  }
}

export class EventsDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "events:destroy";
    this.description = "destroy an event";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "write" };
    this.inputs = {
      profileGuid: { required: false },
      type: { required: false },
      before: { required: false },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const where = { profileGuid: params.profileGuid, type: params.type };
    if (params.before) {
      where["before"] = new Date(params.before);
    }
    response.count = await api.events.model.destroyFor(where);
    response.success = true;
  }
}
