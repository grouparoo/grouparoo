import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  Length,
  BeforeSave,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { Property } from "./Property";
import { Destination } from "./Destination";
import { Source } from "./Source";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "mappings", paranoid: false })
export class Mapping extends CommonModel {
  idPrefix() {
    return "map";
  }

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @ForeignKey(() => Source)
  @Column
  ownerId: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @ForeignKey(() => Property)
  @Column
  propertyId: string;

  @AllowNull(false)
  @Length({ min: 1, max: 191 })
  @Column
  remoteKey: string;

  @BelongsTo(() => Destination)
  destination: Destination;

  @BelongsTo(() => Source)
  source: Source;

  @BelongsTo(() => Property)
  property: Property;

  async apiData() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      ownerType: this.ownerType,
      propertyId: this.propertyId,
      remoteKey: this.remoteKey,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  // --- Class Methods --- //

  @BeforeSave
  static async ensureOneOwnerPerProperty(instance: Mapping) {
    const existing = await Mapping.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        ownerId: instance.ownerId,
        ownerType: instance.ownerType,
        propertyId: instance.propertyId,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Mapping for ${instance.ownerId} (${instance.ownerType}) and ${instance.propertyId}`
      );
    }
  }

  @BeforeSave
  static async ensureOneOwnerPerRemoteKey(instance: Mapping) {
    const existing = await Mapping.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        ownerId: instance.ownerId,
        ownerType: instance.ownerType,
        remoteKey: instance.remoteKey,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Mapping for to ${instance.ownerId} (${instance.ownerType}) and ${instance.remoteKey}`
      );
    }
  }
}
