import {
  Table,
  Column,
  AllowNull,
  BelongsTo,
  ForeignKey,
  Length,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Group } from "./Group";
import { Destination } from "./Destination";

@Table({ tableName: "destinationGroupMemberships", paranoid: false })
export class DestinationGroupMembership extends LoggedModel<
  DestinationGroupMembership
> {
  guidPrefix() {
    return "dgm";
  }

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupGuid: string;

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationGuid: string;

  @AllowNull(false)
  @Length({ min: 1, max: 191 })
  @Column
  remoteKey: string;

  @BelongsTo(() => Group)
  group: Group;

  @BelongsTo(() => Destination)
  destination: Destination;

  async apiData() {
    return {
      destinationGuid: this.destinationGuid,
      groupGuid: this.groupGuid,
      remoteKey: this.remoteKey,
      createdAt: this.createdAt,
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
