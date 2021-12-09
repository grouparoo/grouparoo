import {
  Table,
  Column,
  BeforeCreate,
  AllowNull,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import * as UUID from "uuid";
import { App } from "./App";
import { oAuthIdentity, oAuthType } from "../modules/oAuth";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "oAuthRequests", paranoid: false })
export class OAuthRequest extends CommonModel<OAuthRequest> {
  idPrefix() {
    return "req";
  }

  @AllowNull(false)
  @Column
  provider: string;

  @AllowNull(false)
  @Column("string")
  type: oAuthType;

  @Column(DataType.TEXT)
  get identities(): oAuthIdentity[] {
    return JSON.parse(this.getDataValue("identities") ?? "[]");
  }
  set identities(value: oAuthIdentity[]) {
    this.setDataValue("identities", JSON.stringify(value ?? "[]"));
  }

  @AllowNull(true)
  @Column
  token: string;

  @AllowNull(true)
  @ForeignKey(() => App)
  @Column
  appId: string;

  @AllowNull(true)
  @Column
  appOption: string;

  @BelongsTo(() => App)
  telemetryCustomer: App;

  async apiData() {
    return {
      id: this.id,
      type: this.type,
      provider: this.provider,
      identities: this.identities,
      appId: this.appId,
      appOption: this.appOption,
    };
  }

  // --- Class Methods --- //

  @BeforeCreate
  static generateId(instance: OAuthRequest) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${UUID.v4()}`;
    }
  }

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }
}
