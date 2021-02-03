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
export class EventData extends Model {
  idPrefix() {
    return "evd";
  }

  @Column({ primaryKey: true })
  id: string;

  @AllowNull(false)
  @Column
  @Index
  eventId: string;

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

  @BelongsTo(() => Event, "eventId")
  event: Event;

  @BeforeCreate
  static generateId(instance: Event) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }
}
