import {
  Model,
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
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";
import { LockableHelper } from "../modules/lockableHelper";

export const ModelTypes = ["profile"] as const;
export type ModelType = typeof ModelTypes[number];

@Table({ tableName: "models", paranoid: false })
export class GrouparooModel extends LoggedModel<Model> {
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

  async apiData() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      locked: this.locked,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateId(instance: GrouparooModel) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
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
