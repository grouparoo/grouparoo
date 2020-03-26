import {
  Table,
  Column,
  AllowNull,
  BelongsTo,
  ForeignKey,
  AfterCreate,
  AfterDestroy,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Group } from "./Group";
import { Destination } from "./Destination";
import { task } from "actionhero";

@Table({ tableName: "destinationGroups", paranoid: false })
export class DestinationGroup extends LoggedModel<DestinationGroup> {
  guidPrefix() {
    return "dsg";
  }

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupGuid: string;

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationGuid: string;

  @BelongsTo(() => Group)
  group: Group;

  @BelongsTo(() => Destination)
  destination: Destination;

  @AfterCreate
  static async updateGroupMembersOnCreate(instance: DestinationGroup) {
    await task.enqueue("group:updateMembers", {
      groupGuid: instance.groupGuid,
    });
  }

  @AfterDestroy
  static async updateGroupMembersOnDestroy(instance: DestinationGroup) {
    await task.enqueue("group:updateMembers", {
      groupGuid: instance.groupGuid,
      destinationGuid: instance.destinationGuid,
    });
  }

  async apiData() {
    return {
      destinationGuid: this.destinationGuid,
      groupGuid: this.groupGuid,
      createdAt: this.createdAt,
    };
  }
}
