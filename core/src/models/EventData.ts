import {
  Table,
  Model,
  Column,
  Index,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BelongsTo,
  BeforeCreate,
} from "sequelize-typescript";
import { Event } from "./Event";
import * as uuid from "uuid";

@Table({ tableName: "eventData", paranoid: false })
export class EventData extends Model<EventData> {
  guidPrefix() {
    return "evd";
  }

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

  @BelongsTo(() => Event, "eventGuid")
  event: Event;

  @BeforeCreate
  static generateGuid(instance: Event) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }
}
