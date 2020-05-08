import {
  Table,
  Model,
  Column,
  Index,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  HasMany,
  AfterDestroy,
} from "sequelize-typescript";
import { SequelizeEventData } from "./SequelizeEventData";
import { Event, EventData } from "../eventBackendSequelize";

@Table({ tableName: "events", paranoid: false })
export class SequelizeEvent extends Model<SequelizeEvent> {
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

  async setData(data: { [key: string]: any }) {
    for (const key in data) {
      const eventData = new EventData({
        eventGuid: this.guid,
        key,
        value: data[key].toString(),
      });
      await eventData.save();
    }
  }

  toEvent() {
    const event = new Event({
      guid: this.guid,
      producerGuid: this.producerGuid,
      profileGuid: this.profileGuid,
      ipAddress: this.ipAddress,
      type: this.type,
      userId: this.userId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      occurredAt: this.occurredAt,
    });

    event.data = {};
    this.sequelizeEventData.map((_data) => {
      event.data[_data.key] = _data.value;
    });

    return event;
  }
}
