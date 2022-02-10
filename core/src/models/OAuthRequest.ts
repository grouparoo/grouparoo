import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  DataType,
  Default,
} from "sequelize-typescript";
import Moment from "moment";
import { App } from "./App";
import { oAuthIdentity, oAuthType } from "../modules/oAuth";
import { CommonModel } from "../classes/commonModel";
import { Op } from "sequelize";

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

  @AllowNull(false)
  @Default(false)
  @Column
  consumed: boolean;

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
      consumed: this.consumed,
      provider: this.provider,
      token: this.consumed ? null : this.token,
      identities: this.consumed ? [] : this.identities,
      appId: this.appId,
      appOption: this.appOption,
    };
  }

  // --- Class Methods --- //

  static async sweep(limit: number) {
    const days = 1;
    const count = await OAuthRequest.destroy({
      where: {
        createdAt: { [Op.lt]: Moment().subtract(days, "days").toDate() },
      },
      limit,
    });

    return { count, days };
  }
}
