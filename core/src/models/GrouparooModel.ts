import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
  DataType,
  BeforeSave,
  BeforeDestroy,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { ModelConfigurationObject } from "../classes/codeConfig";
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";
import { ConfigWriter } from "../modules/configWriter";
import { LockableHelper } from "../modules/lockableHelper";

export const ModelTypes = ["profile"] as const;
export type ModelType = typeof ModelTypes[number];

@Table({ tableName: "models", paranoid: false })
export class GrouparooModel extends LoggedModel<GrouparooModel> {
  idPrefix() {
    return "mod";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column(DataType.ENUM(...ModelTypes))
  type: ModelType;

  @AllowNull(true)
  @Column
  locked: string;

  getIcon() {
    switch (this.type) {
      case "profile":
        return "user";
      default:
        throw new Error(`no icon for ${this.type} model`);
    }
  }

  async apiData() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      locked: this.locked,
      icon: this.getIcon(),
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  async getConfigObject(): Promise<ModelConfigurationObject> {
    if (!this.name) return;

    return {
      class: "Model",
      id: this.getConfigId(),
      name: this.name,
      type: this.type,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  @BeforeSave
  static async ensureValidType(instance: GrouparooModel) {
    if (!ModelTypes.includes(instance.type)) {
      throw new Error(
        `${instance.type} is not a valid model type (${ModelTypes.join(", ")})`
      );
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }
}
