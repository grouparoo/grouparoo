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
  BeforeBulkCreate,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import * as uuid from "uuid";
import Moment from "moment";
import { Op } from "sequelize";
import { chatRoom } from "actionhero";
import { APIData } from "../modules/apiData";

@Table({ tableName: "logs", paranoid: false })
export class Log extends Model {
  idPrefix() {
    return "log";
  }

  @Column({ primaryKey: true })
  id: string;

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
    return require("./GrouparooRecord").GrouparooRecord;
  })
  ownerId: string;

  @AllowNull(false)
  @Column
  message: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  async apiData() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      topic: this.topic,
      verb: this.verb,
      who: this.who,
      data: this.data,
      message: this.message,
      createdAt: APIData.formatDate(this.createdAt),
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateId(instance: Log) {
    if (!instance.id) instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
  }

  @BeforeBulkCreate
  static generateIds(instances: Log[]) {
    instances.forEach((instance) => this.generateId(instance));
  }

  @BeforeCreate
  static async determineownerId(instance: Log) {
    if (!instance.ownerId) {
      if (instance.data.id) {
        instance.ownerId = instance.data.id;
      } else if (instance.data.recordId) {
        instance.ownerId = instance.data.recordId;
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
