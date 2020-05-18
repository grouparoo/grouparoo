import {
  Table,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  Length,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import * as uuid from "uuid";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Destination } from "./Destination";
import { Source } from "./Source";

@Table({ tableName: "mappings", paranoid: false })
export class Mapping extends LoggedModel<Mapping> {
  guidPrefix() {
    return "map";
  }

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @ForeignKey(() => Source)
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

  @BelongsTo(() => Destination)
  destination: Destination;

  @BelongsTo(() => Source)
  source: Source;

  @BelongsTo(() => ProfilePropertyRule)
  profilePropertyRule: ProfilePropertyRule;

  async apiData() {
    return {
      guid: this.guid,
      ownerGuid: this.ownerGuid,
      ownerType: this.ownerType,
      profilePropertyRuleGuid: this.profilePropertyRuleGuid,
      remoteKey: this.remoteKey,
      createdAt: this.createdAt.toString(),
      updatedAt: this.updatedAt.toString(),
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
