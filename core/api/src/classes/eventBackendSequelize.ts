import { api } from "actionhero";
import { EventPrototype, EventBackendPrototype } from "./events";
import {
  Table,
  Model,
  Column,
  Index,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  HasMany,
  BelongsTo,
  AfterDestroy,
} from "sequelize-typescript";

export class Event extends EventPrototype {
  /**
   * INSTANCE METHODS
   */

  async save() {
    const [sequelizeEvent] = await SequelizeEvent.findOrCreate({
      where: { guid: this.guid },
    });
    Object.assign(sequelizeEvent, this);
    await sequelizeEvent.save();
    return this;
  }

  async reload() {
    return Event.findByGuid(this.guid);
  }

  async destroy() {
    const sequelizeEvent = await Event.findByGuid(this.guid);
    await sequelizeEvent.destroy();
    return true;
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
    const {
      profileGuid,
      ipAddress,
      type,
      data,
      limit,
      offset,
      order,
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
        includeWhere[i] = data[i];
      }
    }

    const sequelizeEvents = await SequelizeEvent.findAll({
      include: [{ model: SequelizeEventData, where: includeWhere }],
      where,
      limit,
      offset,
      order,
    });
    return sequelizeEvents.map((sequelizeEvent) => sequelizeEvent.toEvent());
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

// Internal Sequelize Classes for this connection //

@Table({ tableName: "events", paranoid: false })
class SequelizeEvent extends Model<SequelizeEvent> {
  @Column({ primaryKey: true })
  guid: string;

  @AllowNull(false)
  @Column
  producerGuid: string;

  @AllowNull(true)
  @Index
  @Column
  profileGuid: string;

  @AllowNull(true)
  @Index
  @Column
  ipAddress: string;

  @AllowNull(false)
  @Index
  @Column
  type: string;

  @AllowNull(true)
  @Column
  userId: string;

  @AllowNull(true)
  @Column
  anonymousId: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @UpdatedAt
  @Index
  occurredAt: Date;

  @HasMany(() => SequelizeEventData, "eventGuid")
  sequelizeEventData: Array<SequelizeEventData>;

  @AfterDestroy
  static async destroyOptions(instance: SequelizeEvent) {
    return SequelizeEventData.destroy({
      where: {
        eventGuid: instance.guid,
      },
    });
  }

  toEvent() {
    const event = new Event(this);
    this.sequelizeEventData.map((_data) => {
      event.data[_data.key] = _data.value;
    });

    return event;
  }
}

@Table({ tableName: "eventData", paranoid: false })
class SequelizeEventData extends Model<SequelizeEventData> {
  @Column({ primaryKey: true })
  guid: string;

  @AllowNull(false)
  @Column
  @Index
  eventGuid: string;

  @AllowNull(false)
  @Column
  key: string;

  @AllowNull(false)
  @Column
  value: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => SequelizeEvent, "eventGuid")
  sequelizeEvent: SequelizeEvent;
}
