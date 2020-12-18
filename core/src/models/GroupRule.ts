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
import { Transaction } from "sequelize";

@Table({ tableName: "groupRules", paranoid: false })
export class GroupRule extends Model<GroupRule> {
  guidPrefix() {
    return "grr";
  }

  @Column({ primaryKey: true })
  guid: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupGuid: string;

  @AllowNull(true)
  @ForeignKey(() => Property)
  @Column
  propertyGuid: string;

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
      guid: this.guid,
      groupGuid: this.groupGuid,
      propertyGuid: this.propertyGuid,
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

  static async findByGuid(guid: string, transaction?: Transaction) {
    const instance = await this.scope(null).findOne({
      where: { guid },
      transaction,
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeSave
  static async ensureEitherPropertyOrProfileColumn(instance: GroupRule) {
    if (
      (!instance.propertyGuid && !instance.profileColumn) ||
      (instance.propertyGuid && instance.profileColumn)
    ) {
      throw new Error(
        "either propertyGuid or profileColumn is required for a GroupRule"
      );
    }
  }
}
