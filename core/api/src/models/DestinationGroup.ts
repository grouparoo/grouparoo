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
    const group = await Group.findByGuid(instance.groupGuid);
    await group.run(true, instance.destinationGuid);
  }

  @AfterDestroy
  static async updateGroupMembersOnDestroy(instance: DestinationGroup) {
    try {
      const group = await Group.findByGuid(instance.groupGuid);
      await group.run(true, instance.destinationGuid);
    } catch (error) {
      // we may be in the after-hook of the group being deleted
      if (!error.toString().match(/cannot find Group/)) {
        throw error;
      }
    }
  }

  async apiData() {
    return {
      destinationGuid: this.destinationGuid,
      groupGuid: this.groupGuid,
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
