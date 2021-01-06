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
import { LoggedModel } from "../classes/loggedModel";
import { Group } from "./Group";
import { Destination } from "./Destination";

@Table({ tableName: "destinationGroupMemberships", paranoid: false })
export class DestinationGroupMembership extends LoggedModel<DestinationGroupMembership> {
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
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({
      where: { guid },
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async ensureOneDestinationPerGroup(
    instance: DestinationGroupMembership
  ) {
    const existing = await DestinationGroupMembership.scope(null).findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        destinationGuid: instance.destinationGuid,
        groupGuid: instance.groupGuid,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a DestinationGroupMembership for ${instance.destinationGuid} and ${instance.groupGuid}`
      );
    }
  }

  @BeforeSave
  static async ensureOneDestinationPerRemoteKey(
    instance: DestinationGroupMembership
  ) {
    const existing = await DestinationGroupMembership.scope(null).findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        destinationGuid: instance.destinationGuid,
        remoteKey: instance.remoteKey,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a DestinationGroupMembership for ${instance.destinationGuid} and ${instance.remoteKey}`
      );
    }
  }
}
