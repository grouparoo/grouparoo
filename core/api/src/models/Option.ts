import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { App } from "./App";
import { Source } from "./Source";
import { Destination } from "./Destination";

@Table({ tableName: "options", paranoid: false })
export class Option extends LoggedModel<Option> {
  guidPrefix() {
    return "opt";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  ownerGuid: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @Column
  key: string;

  @AllowNull(false)
  @Column
  value: string;

  @BelongsTo(() => App, "ownerGuid")
  app: App;

  @BelongsTo(() => Source, "ownerGuid")
  source: Source;

  @BelongsTo(() => Destination, "ownerGuid")
  destination: Destination;

  async apiData() {
    return {
      guid: this.guid,
      ownerGuid: this.ownerGuid,
      ownerType: this.ownerType,
      key: this.key,
      value: this.value,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }
}
