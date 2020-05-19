import { api } from "actionhero";
import {
  EventPrototype,
  EventDataPrototype,
  EventBackendPrototype,
} from "./events";
import { Op } from "sequelize";
import { SequelizeEvent } from "./eventBackendSequelize/SequelizeEvent";
import { SequelizeEventData } from "./eventBackendSequelize/SequelizeEventData";
import { ProfilePropertyRuleFiltersWithKey } from "../models/ProfilePropertyRule";

export class Event extends EventPrototype {
  /**
   * INSTANCE METHODS
   */

  async save() {
    const [sequelizeEvent] = await SequelizeEvent.findOrCreate({
      where: {
        guid: this.guid,
        type: this.type,
        producerGuid: this.producerGuid,
      },
    });
    Object.assign(sequelizeEvent, this);
    await sequelizeEvent.save();
    await sequelizeEvent.setData(this.data);
    return this;
  }

  async reload() {
    const _event = await Event.findByGuid(this.guid);
    for (const i in _event) {
      this[i] = _event[i];
    }
    return this;
  }

  async destroy() {
    const sequelizeEvent = await SequelizeEvent.findOne({
      where: { guid: this.guid },
    });

    if (sequelizeEvent) {
      await sequelizeEvent.destroy();
    }
  }

  /**
   * CLASS METHODS
   */

  static async findByGuid(guid: string) {
    const sequelizeEvent = await SequelizeEvent.findOne({
      where: { guid },
      include: [SequelizeEventData],
    });
    if (!sequelizeEvent) {
      throw new Error("cannot find event with guid " + guid);
    }

    return sequelizeEvent.toEvent();
  }

  static async findAll(
    options: {
      profileGuid?: string;
      ipAddress?: string;
      type?: string;
      data?: { [key: string]: any };
      associated?: boolean;
      limit?: number;
      offset?: number;
      order?: Array<[string, string]>;
      profilePropertyRuleFilters?: ProfilePropertyRuleFiltersWithKey[];
    } = {}
  ) {
    const {
      profileGuid,
      ipAddress,
      type,
      data,
      associated,
      limit,
      offset,
      order,
      profilePropertyRuleFilters,
    } = options;
    const where = {};
    const includeWhere = {};
    if (profileGuid) {
      where["profileGuid"] = profileGuid;
    }
    if (ipAddress) {
      where["ipAddress"] = profileGuid;
    }
    if (type) {
      where["type"] = type;
    }
    if (data) {
      for (const i in data) {
        includeWhere["key"] = i;
        includeWhere["value"] = data[i];
      }
    }
    if (associated === true) {
      where["profileGuid"] = { [Op.ne]: null };
    }
    if (associated === false) {
      where["profileGuid"] = { [Op.eq]: null };
    }

    if (profilePropertyRuleFilters) {
      applyProfilePropertyRuleFilters(
        where,
        includeWhere,
        profilePropertyRuleFilters
      );
    }

    const sequelizeEvents = await SequelizeEvent.findAll({
      include: [
        {
          model: SequelizeEventData,
          where: includeWhere,
          required: data ? true : false,
        },
      ],
      where,
      limit,
      offset,
      order: order || [["occurredAt", "asc"]],
    });
    return sequelizeEvents.map((sequelizeEvent) => sequelizeEvent.toEvent());
  }

  static async count(
    options: {
      profileGuid?: string;
      ipAddress?: string;
      type?: string;
      associated?: boolean;
      data?: { [key: string]: any };
    } = {}
  ) {
    const { profileGuid, ipAddress, type, associated, data } = options;
    const where = {};
    const includeWhere = {};
    if (profileGuid) {
      where["profileGuid"] = profileGuid;
    }
    if (ipAddress) {
      where["ipAddress"] = profileGuid;
    }
    if (type) {
      where["type"] = type;
    }
    if (data) {
      for (const i in data) {
        includeWhere["key"] = i;
        includeWhere["value"] = data[i];
      }
    }
    if (associated === true) {
      where["profileGuid"] = { [Op.ne]: null };
    }
    if (associated === false) {
      where["profileGuid"] = { [Op.eq]: null };
    }

    return SequelizeEvent.count({
      distinct: true,
      include: [
        {
          model: SequelizeEventData,
          where: includeWhere,
          required: data ? true : false,
        },
      ],
      where,
    });
  }

  static async types(
    options: {
      match?: string;
      limit?: number;
      offset?: number;
      order?: Array<[string, string]>;
    } = {}
  ) {
    const { match, limit, offset, order } = options;
    const where = {};
    if (match && match.length > 0) {
      where["type"] = { [Op.iLike]: `%${match}%` };
    }

    const events = await SequelizeEvent.findAll({
      attributes: [
        [api.sequelize.fn("DISTINCT", api.sequelize.col("type")), "type"],
      ],
      where,
      group: ["type"],
      limit,
      offset,
      order,
    });

    return events.map((event) => event.type);
  }

  static async dataKeys(type: string) {
    const results = await SequelizeEventData.findAll({
      attributes: [
        [api.sequelize.fn("DISTINCT", api.sequelize.col("key")), "key"],
      ],
      group: ["key"],
      include: [
        {
          model: SequelizeEvent,
          required: true,
          where: { type },
          attributes: [],
        },
      ],
    });

    return results.map((r) => r.key);
  }

  static async countEventData(
    options: {
      profileGuid?: string;
      type?: string;
      key?: string;
      profilePropertyRuleFilters?: ProfilePropertyRuleFiltersWithKey[];
    } = {}
  ) {
    const { profileGuid, type, key, profilePropertyRuleFilters } = options;
    const where = { key };
    const includeWhere = {};

    if (type) {
      includeWhere["type"] = type;
    }

    if (profileGuid) {
      includeWhere["profileGuid"] = profileGuid;
    }

    if (profilePropertyRuleFilters) {
      applyProfilePropertyRuleFilters(
        includeWhere,
        where,
        profilePropertyRuleFilters
      );
    }

    const count = await SequelizeEventData.count({
      where,
      include: [
        {
          model: SequelizeEvent,
          required: true,
          where: includeWhere,
          attributes: [],
        },
      ],
    });

    return count;
  }

  static async aggregateEventData(
    options: {
      aggregation?: "average" | "sum" | "min" | "max";
      profileGuid?: string;
      type?: string;
      key?: string;
      profilePropertyRuleFilters?: ProfilePropertyRuleFiltersWithKey[];
    } = {}
  ) {
    let {
      aggregation,
      profileGuid,
      type,
      key,
      profilePropertyRuleFilters,
    } = options;
    const where = { key };
    const includeWhere = {};
    if (!aggregation) {
      throw new Error("aggregation is required");
    }

    if (type) {
      includeWhere["type"] = type;
    }

    if (profileGuid) {
      includeWhere["profileGuid"] = profileGuid;
    }

    if (profilePropertyRuleFilters) {
      applyProfilePropertyRuleFilters(
        includeWhere,
        where,
        profilePropertyRuleFilters
      );
    }

    const results = await SequelizeEventData.findAll({
      where,
      attributes: [
        [
          api.sequelize.fn(
            aggregation === "average" ? "avg" : aggregation,
            api.sequelize.cast(api.sequelize.col("value"), "float")
          ),
          "value",
        ],
      ],
      group: ["value"],
      include: [
        {
          model: SequelizeEvent,
          required: true,
          where: includeWhere,
          attributes: [],
        },
      ],
    });

    return results[0] ? results[0].value : 0;
  }

  static async destroyFor(
    options: {
      profileGuid?: string;
      type?: string;
      before?: Date;
    } = {}
  ) {
    const { profileGuid, type, before } = options;
    const where = {};
    if (profileGuid) {
      where["profileGuid"] = profileGuid;
    }
    if (type) {
      where["type"] = type;
    }
    if (before) {
      where["occurredAt"] = { [Op.lt]: before };
    }

    return SequelizeEvent.destroy({ where, cascade: true });
  }
}

export class EventData extends EventDataPrototype {
  async save() {
    let sequelizeEventData = await SequelizeEventData.findOne({
      where: {
        eventGuid: this.eventGuid,
        key: this.key,
      },
    });

    if (!sequelizeEventData) {
      sequelizeEventData = SequelizeEventData.build();
    }

    Object.assign(sequelizeEventData, this);
    await sequelizeEventData.save();
    return this;
  }

  async destroy() {
    const sequelizeEventData = await SequelizeEventData.findOne({
      where: { guid: this.guid },
    });

    if (sequelizeEventData) {
      await sequelizeEventData.destroy();
    }
  }
}

export class EventBackend extends EventBackendPrototype {
  async start() {
    api.sequelize.addModels([SequelizeEvent, SequelizeEventData]);
    await SequelizeEvent.sync();
    await SequelizeEventData.sync();
  }

  async stop() {}
}

function applyProfilePropertyRuleFilters(
  eventWhere: { [key: string]: any },
  eventDataWhere: { [key: string]: any },
  profilePropertyRuleFilters: ProfilePropertyRuleFiltersWithKey[]
) {
  for (const i in profilePropertyRuleFilters) {
    const filter = profilePropertyRuleFilters[i];
    let key = filter.key;
    if (key.match(/^\[data\]-/)) {
      key = key.replace(/^\[data\]-/, "");
    }

    let match = filter.match;
    let opSymbol: any; // symbol...
    switch (filter.op) {
      case "equals":
        opSymbol = Op["eq"];
        break;
      case "does not equal":
        opSymbol = Op["ne"];
        break;
      case "contains":
        opSymbol = Op["iLike"];
        match = `%${match.toString().toLowerCase()}%`;
        key = `LOWER("${key}")`;
        break;
      case "does not contain":
        opSymbol = Op["notILike"];
        match = `%${match.toString().toLowerCase()}%`;
        key = `LOWER("${key}")`;
        break;
      case "greater than":
        opSymbol = Op["gt"];
        break;
      case "less than":
        opSymbol = Op["lt"];
        break;
    }

    const localWhere = {};
    if (filter.key.match(/^\[data\]-/)) {
      localWhere[opSymbol] = match;
      eventDataWhere["value"] = localWhere;
    } else {
      localWhere[opSymbol] = match;
      eventWhere[key] = localWhere;
    }
  }
}
