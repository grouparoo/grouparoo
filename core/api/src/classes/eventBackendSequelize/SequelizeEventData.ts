import {
  Table,
  Model,
  Column,
  Index,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BelongsTo,
} from "sequelize-typescript";
import { SequelizeEvent } from "./SequelizeEvent";

@Table({ tableName: "eventData", paranoid: false })
export class SequelizeEventData extends Model<SequelizeEventData> {
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
