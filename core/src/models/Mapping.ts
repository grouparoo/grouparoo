import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  Length,
  BeforeSave,
} from "sequelize-typescript";
import { Op, Transaction } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Property } from "./Property";
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
  @ForeignKey(() => Property)
  @Column
  propertyGuid: string;

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
      guid: this.guid,
      ownerGuid: this.ownerGuid,
      ownerType: this.ownerType,
      propertyGuid: this.propertyGuid,
      remoteKey: this.remoteKey,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string, transaction?: Transaction) {
    const instance = await this.scope(null).findOne({
      where: { guid },
      transaction,
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async ensureOneOwnerPerProperty(
    instance: Mapping,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const existing = await Mapping.scope(null).findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        ownerGuid: instance.ownerGuid,
        propertyGuid: instance.propertyGuid,
      },
      transaction,
    });
    if (existing) {
      throw new Error(
        `There is already a Mapping for ${instance.ownerGuid} and ${instance.propertyGuid}`
      );
    }
  }

  @BeforeSave
  static async ensureOneOwnerPerRemoteKey(
    instance: Mapping,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const existing = await Mapping.scope(null).findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        ownerGuid: instance.ownerGuid,
        remoteKey: instance.remoteKey,
      },
      transaction,
    });
    if (existing) {
      throw new Error(
        `There is already a Mapping for to ${instance.ownerGuid} and ${instance.remoteKey}`
      );
    }
  }
}
