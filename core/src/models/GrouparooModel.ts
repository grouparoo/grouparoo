import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { LoggedModel } from "../classes/loggedModel";

import { APIData } from "../modules/apiData";

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
  @Column
  type: string;

  async apiData() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
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
}
