import { api } from "actionhero";
import {
  EventPrototype,
  EventDataPrototype,
  EventBackendPrototype,
} from "./events";
import { SequelizeEvent } from "./eventBackendSequelize/SequelizeEvent";
import { SequelizeEventData } from "./eventBackendSequelize/SequelizeEventData";

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

  static async findAll(options: {
    profileGuid?: string;
    ipAddress?: string;
    type?: string;
    data?: { [key: string]: any };
    limit?: number;
    offset?: number;
    order: ["occurredAt", "desc"];
  }) {
    const { profileGuid, ipAddress, type, data, limit, offset, order } =
      options || {};
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
        includeWhere[i] = data[i];
      }
    }

    const sequelizeEvents = await SequelizeEvent.findAll({
      include: [
        {
          model: SequelizeEventData,
          where: includeWhere,
          required: false,
        },
      ],
      where,
      limit,
      offset,
      order,
    });
    return sequelizeEvents.map((sequelizeEvent) => sequelizeEvent.toEvent());
  }

  static async count(options: {
    profileGuid?: string;
    ipAddress?: string;
    type?: string;
    data?: { [key: string]: any };
  }) {
    const { profileGuid, ipAddress, type, data } = options || {};
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
        includeWhere[i] = data[i];
      }
    }

    return await SequelizeEvent.count({
      include: [
        {
          model: SequelizeEventData,
          where: includeWhere,
          required: false,
        },
      ],
      where,
    });
  }
}

export class EventData extends EventDataPrototype {
  async save() {
    const [sequelizeEventData] = await SequelizeEventData.findOrCreate({
      where: {
        eventGuid: this.eventGuid,
        guid: this.guid,
        key: this.key,
        value: this.value,
      },
    });
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
