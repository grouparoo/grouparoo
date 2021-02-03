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
  BeforeSave,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Group } from "./Group";
import { Property } from "./Property";

@Table({ tableName: "groupRules", paranoid: false })
export class GroupRule extends Model {
  idPrefix() {
    return "grr";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupId: string;

  @AllowNull(true)
  @ForeignKey(() => Property)
  @Column
  propertyId: string;

  @AllowNull(true)
  @Column
  profileColumn: string;

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

  @BelongsTo(() => Group)
  schedule: Group;

  @BelongsTo(() => Property)
  property: Property;

  async apiData() {
    return {
      id: this.id,
      groupId: this.groupId,
      propertyId: this.propertyId,
      profileColumn: this.profileColumn,
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

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateId(instance) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeSave
  static async ensureEitherPropertyOrProfileColumn(instance: GroupRule) {
    if (
      (!instance.propertyId && !instance.profileColumn) ||
      (instance.propertyId && instance.profileColumn)
    ) {
      throw new Error(
        "either propertyId or profileColumn is required for a GroupRule"
      );
    }
  }
}
