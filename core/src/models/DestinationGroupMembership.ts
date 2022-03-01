import {
  Table,
  Column,
  AllowNull,
  BelongsTo,
  ForeignKey,
  Length,
  BeforeSave,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { Group } from "./Group";
import { Destination } from "./Destination";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "destinationGroupMemberships", paranoid: false })
export class DestinationGroupMembership extends CommonModel<DestinationGroupMembership> {
  idPrefix() {
    return "dgm";
  }

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupId: string;

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationId: string;

  @AllowNull(false)
  @Length({ min: 1, max: 191 })
  @Column
  remoteKey: string;

  @BelongsTo(() => Group)
  group: Group;

  @BelongsTo(() => Destination)
  destination: Destination;

  uniqueIdentifier = ["groupId", "destinationId", "remoteKey"];

  async apiData() {
    return {
      destinationId: this.destinationId,
      groupId: this.groupId,
      remoteKey: this.remoteKey,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }
}
