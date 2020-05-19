import { Table, Column, AllowNull } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";

@Table({ tableName: "settings", paranoid: false })
export class Setting extends LoggedModel<Setting> {
  guidPrefix() {
    return "set";
  }

  @AllowNull(false)
  @Column
  pluginName: string;

  @AllowNull(false)
  @Column
  key: string;

  @Column
  value: string;

  @AllowNull(false)
  @Column
  defaultValue: string;

  @Column
  description: string;

  async apiData() {
    return {
      guid: this.guid,
      pluginName: this.pluginName,
      key: this.key,
      value: this.value,
      defaultValue: this.defaultValue,
      description: this.description,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
