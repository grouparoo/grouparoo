import {
  Table,
  Column,
  AllowNull,
  BeforeSave,
  DataType,
  BeforeDestroy,
} from "sequelize-typescript";
import { ConfigWriter } from "../modules/configWriter";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";
import { SettingConfigurationObject } from "../classes/codeConfig";
import { CommonModel } from "../classes/commonModel";

export const settingTypes = ["string", "number", "boolean"] as const;

@Table({ tableName: "settings", paranoid: false })
export class Setting extends CommonModel<Setting> {
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

  @Column
  locked: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  variant: string;

  uniqueIdentifier = ["key", "pluginName"];

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
  static async noUpdateIfLocked(instance: Setting) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: Setting) {
    await LockableHelper.beforeDestroy(instance);
  }
}
