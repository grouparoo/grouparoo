import {
  Table,
  Model,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  Length,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Schedule } from "./Schedule";
import { Source } from "./Source";

@Table({ tableName: "mappings", paranoid: false })
export class Mapping extends Model<Mapping> {
  guidPrefix() {
    return "map";
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
  @Column
  ownerGuid: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @ForeignKey(() => ProfilePropertyRule)
  @Column
  profilePropertyRuleGuid: string;

  @AllowNull(false)
  @Length({ min: 1, max: 191 })
  @Column
  remoteKey: string;

  @BelongsTo(() => ProfilePropertyRule)
  profilePropertyRule: ProfilePropertyRule;

  async apiData() {
    return {
      guid: this.guid,
      ownerGuid: this.ownerGuid,
      ownerType: this.ownerType,
      profilePropertyRuleGuid: this.profilePropertyRuleGuid,
      remoteKey: this.remoteKey,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
