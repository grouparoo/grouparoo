import {
  Table,
  Column,
  AllowNull,
  BeforeSave,
  DataType,
  BeforeDestroy,
} from "sequelize-typescript";
import { Op, Transaction } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { LockableHelper } from "../modules/lockableHelper";

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
      guid: this.guid,
      pluginName: this.pluginName,
      key: this.key,
      title: this.title,
      value: this.value,
      type: this.type,
      variant: this.variant,
      defaultValue: this.defaultValue,
      description: this.description,
      locked: this.locked,
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

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeSave
  static async ensureOneKeyPerPluginName(
    instance: Setting,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const existing = await Setting.findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        pluginName: instance.pluginName,
        key: instance.key,
      },
      transaction,
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
