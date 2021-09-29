import {
  Table,
  Model,
  Column,
  AllowNull,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  BeforeCreate,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Property } from "./Property";
import { Schedule } from "./Schedule";
import { APIData } from "../modules/apiData";

@Table({ tableName: "filters", paranoid: false })
export class Filter extends Model {
  idPrefix() {
    return "flt";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Property)
  @ForeignKey(() => Schedule)
  @Column
  ownerId: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @Column
  key: string;

  @AllowNull(false)
  @Column
  position: number;

  @Column
  match: string;

  @AllowNull(false)
  @Column
  op: string;

  @Column
  relativeMatchNumber: number;

  @Column
  relativeMatchUnit: string;

  @Column
  relativeMatchDirection: string;

  @BelongsTo(() => Property)
  property: Property;

  @BelongsTo(() => Schedule)
  schedule: Schedule;

  async apiData() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      ownerType: this.ownerType,
      key: this.key,
      position: this.position,
      match: this.match,
      op: this.op,
      relativeMatchNumber: this.relativeMatchNumber,
      relativeMatchUnit: this.relativeMatchUnit,
      relativeMatchDirection: this.relativeMatchDirection,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  // --- Class Methods --- //

  @BeforeCreate
  static generateId(instance: Filter) {
    if (!instance.id) instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
  }
}
