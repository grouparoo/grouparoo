import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  BeforeSave,
  DataType,
} from "sequelize-typescript";
import { Group } from "./Group";
import { Property } from "./Property";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";
import {
  GroupRuleOpType,
  RelativeMatchDirectionType,
  RelativeMatchUnitType,
} from "../modules/ruleOpsDictionary";

@Table({ tableName: "groupRules", paranoid: false })
export class GroupRule extends CommonModel<GroupRule> {
  idPrefix() {
    return "grr";
  }

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupId: string;

  @ForeignKey(() => Property)
  @Column
  propertyId: string;

  @Column
  recordColumn: string;

  @AllowNull(false)
  @Column
  position: number;

  @Column
  match: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  op: GroupRuleOpType;

  @Column
  relativeMatchNumber: number;

  @Column(DataType.STRING)
  relativeMatchUnit: RelativeMatchUnitType;

  @Column(DataType.STRING)
  relativeMatchDirection: RelativeMatchDirectionType;

  @BelongsTo(() => Group)
  schedule: Group;

  @BelongsTo(() => Property)
  property: Property;

  async apiData() {
    return {
      id: this.id,
      groupId: this.groupId,
      propertyId: this.propertyId,
      recordColumn: this.recordColumn,
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

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async ensureEitherPropertyOrRecordColumn(instance: GroupRule) {
    if (
      (!instance.propertyId && !instance.recordColumn) ||
      (instance.propertyId && instance.recordColumn)
    ) {
      throw new Error(
        "either propertyId or recordColumn is required for a GroupRule"
      );
    }
  }
}
