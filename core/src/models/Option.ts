import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  BeforeSave,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { App } from "./App";
import { Source } from "./Source";
import { Destination } from "./Destination";

@Table({ tableName: "options", paranoid: false })
export class Option extends LoggedModel<Option> {
  idPrefix() {
    return "opt";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  ownerId: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @Column
  key: string;

  @AllowNull(false)
  @Column
  value: string;

  @BelongsTo(() => App, "ownerId")
  app: App;

  @BelongsTo(() => Source, "ownerId")
  source: Source;

  @BelongsTo(() => Destination, "ownerId")
  destination: Destination;

  async apiData() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      ownerType: this.ownerType,
      key: this.key,
      value: this.value,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async ensureOneOwnerGuidPerKey(instance: Option) {
    const existing = await Option.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        ownerId: instance.ownerId,
        key: instance.key,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Option for ${instance.ownerId} and ${instance.key}`
      );
    }
  }
}
