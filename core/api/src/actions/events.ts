import { AuthenticatedAction } from "../classes/authenticatedAction";
import { api } from "actionhero";
import { Event } from "../models/Event";
import { EventData } from "../models/EventData";
import { Op } from "sequelize";
import Moment from "moment";

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
      associated: { required: false },
      data: { required: false },
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [["occurredAt", "desc"]],
      },
    };
  }

  async run({ params, response }) {
    const where = {};
    const includeWhere = {};

    if (params.type) {
      where["type"] = params.type;
    }

    if (params.profileGuid) {
      where["profileGuid"] = params.profileGuid;
    } else if (params.associated === false) {
      where["profileGuid"] = null;
    } else if (params.associated === true) {
      where["profileGuid"] = { [Op.ne]: null };
    }

    let data = {};
    if (params.data) {
      try {
        data = JSON.parse(params.data);
      } catch (error) {
        data = params.data;
      }
      for (const i in data) {
        includeWhere["key"] = i;
        includeWhere["value"] = data[i];
      }
    }

    const events = await Event.findAll({
      where,
      include: [
        {
          model: EventData,
          where: includeWhere,
          required: params.data ? true : false,
        },
      ],
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    const total = await Event.count({
      distinct: true,
      where,
      include: [
        {
          model: EventData,
          where: includeWhere,
          required: params.data ? true : false,
        },
      ],
    });

    response.events = await Promise.all(events.map((e) => e.apiData()));
    response.total = total;
  }
}

export class EventsCounts extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "events:counts";
    this.description =
      "count the occurrences of events by type, per hour, in a range";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "read" };
    this.inputs = {
      type: { required: false },
      dateTrunc: { required: true, default: "day" },
      startTime: {
        required: true,
        default: Moment().subtract(1, "month").toDate().getTime(),
        formatter: parseInt,
      },
      endTime: {
        required: true,
        default: Moment().add(1, "day").toDate().getTime(),
        formatter: parseInt,
      },
      limit: { required: true, default: 100 },
    };
  }

  async run({ params, response }) {
    const where = {
      occurredAt: {
        [Op.gte]: params.startTime,
        [Op.lt]: params.endTime,
      },
    };

    if (params.type) {
      where["type"] = params.type;
    }

    const counts = await Event.findAll({
      attributes: [
        "type",
        [
          api.sequelize.fn(
            "date_trunc",
            params.dateTrunc,
            api.sequelize.col("occurredAt")
          ),
          "time",
        ],
        [api.sequelize.fn("COUNT", "guid"), "count"],
      ],
      where,
      group: ["type", api.sequelize.literal("time")],
      order: [
        [api.sequelize.literal("time"), "asc"],
        ["type", "desc"],
      ],
      limit: params.limit,
    });

    const formattedCounts = counts.map((c) => {
      return {
        type: c.getDataValue("type"),
        // @ts-ignore
        time: c.getDataValue("time").getTime(),
        // @ts-ignore
        count: c.getDataValue("count"),
      };
    });

    response.counts = formattedCounts;
    response.total = await Event.count({ where });
  }
}

export class EventsTypes extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "events:types";
    this.description = "return all the event types and basic stats";
    this.outputExample = {};
    this.permission = { topic: "event", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100 },
      offset: { required: true, default: 0 },
    };
  }

  async run({ params, response }) {
    const types = await Event.findAll({
      attributes: [
        "type",
        [api.sequelize.fn("COUNT", "guid"), "count"],
        [api.sequelize.fn("MIN", api.sequelize.col("occurredAt")), "min"],
        [api.sequelize.fn("MAX", api.sequelize.col("occurredAt")), "max"],
      ],
      limit: params.limit,
      offset: params.offset,
      group: ["type"],
      order: [["count", "desc"]],
    });

    response.types = [];
    for (const i in types) {
      const t = types[i];
      const example = await Event.findOne({ where: { type: t.type } });
      response.types.push({
        type: t.type,
        // @ts-ignore
        count: t.getDataValue("count"),
        // @ts-ignore
        min: t.getDataValue("min").getTime(),
        // @ts-ignore
        max: t.getDataValue("max").getTime(),
        example: await example.apiData(),
      });
    }

    response.total = await Event.count({
      col: "type",
      distinct: true,
    });
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

    const event = await Event.create({
      producerGuid: producerGuid,
      type: params.type,
      userId: params.userId,
      anonymousId: params.anonymousId,
      ipAddress: connection.remoteIP,
      occurredAt,
    });

    if (params.data) {
      await event.setData(params.data);
    }

    response.event = await event.apiData();
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
    const where = {};
    if (params.match) {
      where["type"] = { [Op.iLike]: `%${params.match}%` };
    }

    response.types = await Event.getTypes(
      where,
      params.limit,
      params.offset,
      params.order
    );
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
    const event = await Event.findByGuid(params.guid);
    response.event = await event.apiData();
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
    const event = await Event.findByGuid(params.guid);
    await event.destroy();
    response.success = true;
  }
}
