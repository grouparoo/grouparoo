import {
  Table,
  Column,
  AllowNull,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BeforeCreate,
  AfterCreate,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import * as uuid from "uuid";
import Moment from "moment";
import { Op, Transaction } from "sequelize";
import { chatRoom } from "actionhero";

@Table({ tableName: "logs", paranoid: false })
export class Log extends Model<Log> {
  guidPrefix() {
    return "log";
  }

  @Column({ primaryKey: true })
  guid: string;

  @AllowNull(false)
  @Column
  topic: string;

  @AllowNull(false)
  @Column
  verb: string;

  // TODO: "whodoneit" is a powerful feature in rails/papertrail.  However, we don't have access to a global 'session' so it's harder to sort out in a generic way
  @Column
  who: string;

  @AllowNull(false)
  @Column(DataTypes.STRING)
  get data(): { [key: string]: any } {
    // @ts-ignore
    return JSON.parse(this.getDataValue("data"));
  }
  set data(value: { [key: string]: any }) {
    // @ts-ignore
    this.setDataValue("data", JSON.stringify(value));
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => {
    // need to load this dynamically to prevent cyclic load errors
    return require("./Profile").Profile;
  })
  ownerGuid: string;

  @AllowNull(false)
  @Column
  message: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  async apiData() {
    return {
      guid: this.guid,
      ownerGuid: this.ownerGuid,
      topic: this.topic,
      verb: this.verb,
      who: this.who,
      data: this.data,
      message: this.message,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
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

  @BeforeCreate
  static generateGuid(instance: Log) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeCreate
  static async determineOwnerGuid(instance: Log) {
    if (!instance.ownerGuid) {
      if (instance.data.guid) {
        instance.ownerGuid = instance.data.guid;
      } else if (instance.data.profileGuid) {
        instance.ownerGuid = instance.data.profileGuid;
      }
    }
  }

  @AfterCreate
  static async broadcast(instance: Log) {
    await chatRoom.broadcast({}, `model:log`, {
      model: await instance.apiData(),
      verb: "create",
    });
  }

  static async sweep() {
    // NOTE: we cannot use the plugin module as requiring it would create a cyclic loop (Setting->LoggedModel->Log)
    const Setting = require("./Setting").Setting;
    const setting = await Setting.findOne({
      where: { pluginName: "core", key: "sweeper-delete-old-logs-days" },
    });
    const days = parseInt(setting.value);

    const count = await Log.destroy({
      where: {
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      force: true,
    });

    return { count, days };
  }
}
