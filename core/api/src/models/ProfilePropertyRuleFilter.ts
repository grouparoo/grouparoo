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
import { ProfilePropertyRule } from "./ProfilePropertyRule";

@Table({ tableName: "profilePropertyRuleFilters", paranoid: false })
export class ProfilePropertyRuleFilter extends Model<
  ProfilePropertyRuleFilter
> {
  guidPrefix() {
    return "prf";
  }

  @Column({ primaryKey: true })
  guid: string;

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => ProfilePropertyRule)
  @Column
  profilePropertyRuleGuid: string;

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

  @BelongsTo(() => ProfilePropertyRule)
  profilePropertyRule: ProfilePropertyRule;

  async apiData() {
    return {
      guid: this.guid,
      profilePropertyRuleGuid: this.profilePropertyRuleGuid,
      key: this.key,
      position: this.position,
      match: this.match,
      op: this.op,
      relativeMatchNumber: this.relativeMatchNumber,
      relativeMatchUnit: this.relativeMatchUnit,
      relativeMatchDirection: this.relativeMatchDirection,
      createdAt: this.createdAt ? this.createdAt.toString() : null,
      updatedAt: this.updatedAt ? this.updatedAt.toString() : null,
    };
  }
}
