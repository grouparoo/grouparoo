import {
  Table,
  Model,
  Column,
  AllowNull,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  BelongsTo,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Property } from "./Property";

@Table({ tableName: "propertyFilters", paranoid: false })
export class PropertyFilter extends Model {
  idPrefix() {
    return "prf";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Property)
  @Column
  propertyId: string;

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

  async apiData() {
    return {
      id: this.id,
      propertyId: this.propertyId,
      key: this.key,
      position: this.position,
      match: this.match,
      op: this.op,
      relativeMatchNumber: this.relativeMatchNumber,
      relativeMatchUnit: this.relativeMatchUnit,
      relativeMatchDirection: this.relativeMatchDirection,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }
}
