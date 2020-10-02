import {
  Table,
  Column,
  AllowNull,
  BeforeSave,
  DataType,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";

export const settingTypes = ["string", "number", "boolean"] as const;

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

  @AllowNull(false)
  @Column(DataType.ENUM(...settingTypes))
  type: typeof settingTypes[number];

  @Column
  title: string;

  @Column
  description: string;

  @Column
  variant: string;

  async apiData() {
    return {
      guid: this.guid,
      pluginName: this.pluginName,
      key: this.key,
      title: this.title,
      value: this.value,
      type: this.type,
      variant: this.variant,
      defaultValue: this.defaultValue,
      description: this.description,
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

  @BeforeSave
  static async validateType(instance: Setting) {
    if (!settingTypes.includes(instance.type)) {
      throw new Error(`${instance.type} is not a valid Setting type`);
    }
  }
}
