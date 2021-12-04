import {
  Table,
  Column,
  Default,
  AllowNull,
  BeforeSave,
  DataType,
  BeforeDestroy,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { ConfigWriter } from "../modules/configWriter";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";
import { SettingConfigurationObject } from "../classes/codeConfig";

export const settingTypes = ["string", "number", "boolean"] as const;

@Table({ tableName: "settings", paranoid: false })
export class Setting extends LoggedModel<Setting> {
  idPrefix() {
    return "set";
  }

  @AllowNull(false)
  @Column
  pluginName: string;

  @AllowNull(false)
  @Column
  key: string;

  @Column
  get value(): string {
    const rawValue = this.getDataValue("value").toString();
    switch (this.type) {
      case "boolean":
        // SQLite returns booleans as numbers
        const booleanValue = rawValue === "true" || rawValue === "1";
        return booleanValue ? "true" : "false";
      default:
        return rawValue;
    }
  }
  set value(data) {
    this.setDataValue("value", data);
  }

  @AllowNull(false)
  @Column
  defaultValue: string;

  @AllowNull(false)
  @Column(DataType.ENUM(...settingTypes))
  type: typeof settingTypes[number];

  @AllowNull(true)
  @Default(null)
  @Column
  locked: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  variant: string;

  async apiData() {
    return {
      id: this.id,
      pluginName: this.pluginName,
      key: this.key,
      title: this.title,
      value: this.value,
      type: this.type,
      variant: this.variant,
      defaultValue: this.defaultValue,
      description: this.description,
      locked: this.locked,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.key) : this.id;
  }

  async getConfigObject(): Promise<SettingConfigurationObject> {
    const { pluginName, key, value } = this;

    return {
      id: this.getConfigId(),
      class: "Setting",
      pluginName,
      key,
      value,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async validateType(instance: Setting) {
    if (!settingTypes.includes(instance.type)) {
      throw new Error(`${instance.type} is not a valid Setting type`);
    }
  }

  @BeforeSave
  static validateValue(instance: Setting) {
    switch (instance.type) {
      case "boolean": {
        // already coerced by setter/getter
        break;
      }
      case "string": {
        // anything is fine
        break;
      }
      case "number": {
        const numberValue = parseFloat(instance.value);
        if (isNaN(numberValue)) {
          throw new Error(`${instance.value} is not a number`);
        }
        if (numberValue < 0) {
          throw new Error(`setting values cannot have negative numbers`);
        }
        break;
      }
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeSave
  static async ensureOneKeyPerPluginName(instance: Setting) {
    const existing = await Setting.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        pluginName: instance.pluginName,
        key: instance.key,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Setting for ${instance.pluginName} and ${instance.key}`
      );
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }
}
