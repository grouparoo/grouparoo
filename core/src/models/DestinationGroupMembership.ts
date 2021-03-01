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
import { APIData } from "../modules/apiData";

@Table({ tableName: "destinationGroupMemberships", paranoid: false })
export class DestinationGroupMembership extends LoggedModel<DestinationGroupMembership> {
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

  async apiData() {
    return {
      destinationId: this.destinationId,
      groupId: this.groupId,
      remoteKey: this.remoteKey,
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
  static async ensureOneDestinationPerGroup(
    instance: DestinationGroupMembership
  ) {
    const existing = await DestinationGroupMembership.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        destinationId: instance.destinationId,
        groupId: instance.groupId,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a DestinationGroupMembership for ${instance.destinationId} and ${instance.groupId}`
      );
    }
  }

  @BeforeSave
  static async ensureOneDestinationPerRemoteKey(
    instance: DestinationGroupMembership
  ) {
    const existing = await DestinationGroupMembership.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        destinationId: instance.destinationId,
        remoteKey: instance.remoteKey,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a DestinationGroupMembership for ${instance.destinationId} and ${instance.remoteKey}`
      );
    }
  }
}
