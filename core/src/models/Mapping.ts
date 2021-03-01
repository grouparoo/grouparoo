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
import { LoggedModel } from "../classes/loggedModel";
import { Property } from "./Property";
import { Destination } from "./Destination";
import { Source } from "./Source";
import { APIData } from "../modules/apiData";

@Table({ tableName: "mappings", paranoid: false })
export class Mapping extends LoggedModel<Mapping> {
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

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async ensureOneOwnerPerProperty(instance: Mapping) {
    const existing = await Mapping.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        ownerId: instance.ownerId,
        propertyId: instance.propertyId,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Mapping for ${instance.ownerId} and ${instance.propertyId}`
      );
    }
  }

  @BeforeSave
  static async ensureOneOwnerPerRemoteKey(instance: Mapping) {
    const existing = await Mapping.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        ownerId: instance.ownerId,
        remoteKey: instance.remoteKey,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Mapping for to ${instance.ownerId} and ${instance.remoteKey}`
      );
    }
  }
}
