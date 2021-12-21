import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Property } from "./Property";
import { Schedule } from "./Schedule";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "filters", paranoid: false })
export class Filter extends CommonModel<Filter> {
  idPrefix() {
    return "flt";
  }

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
}
