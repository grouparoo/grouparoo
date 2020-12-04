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
import { ProfilePropertyRule } from "./ProfilePropertyRule";

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
  @ForeignKey(() => ProfilePropertyRule)
  @Column
  profilePropertyRuleGuid: string;

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

  @BelongsTo(() => ProfilePropertyRule)
  profilePropertyRule: ProfilePropertyRule;

  async apiData() {
    return {
      guid: this.guid,
      groupGuid: this.groupGuid,
      profilePropertyRuleGuid: this.profilePropertyRuleGuid,
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

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
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
  static async ensureEitherProfilePropertyRuleOrProfileColumn(
    instance: GroupRule
  ) {
    if (
      (!instance.profilePropertyRuleGuid && !instance.profileColumn) ||
      (instance.profilePropertyRuleGuid && instance.profileColumn)
    ) {
      throw new Error(
        "either profilePropertyRuleGuid or profileColumn is required for a GroupRule"
      );
    }
  }
}
