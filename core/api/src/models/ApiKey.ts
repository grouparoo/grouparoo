import {
  Table,
  Column,
  AllowNull,
  Length,
  HasMany,
  AfterSave,
  AfterDestroy,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Permission } from "./Permission";

@Table({ tableName: "apiKey", paranoid: false })
export class ApiKey extends LoggedModel<ApiKey> {
  guidPrefix() {
    return "key";
  }

  @AllowNull(false)
  @Length({ min: 3, max: 191 })
  @Column
  name: string;

  @AllowNull(false)
  @Column
  apiKey: string;

  @HasMany(() => Permission)
  permissions: Permission[];

  @AfterSave
  static async buildPermissions(instance: ApiKey) {
    const topics = Permission.topics();
    for (const i in topics) {
      const topic = topics[i];
      await Permission.findOrCreate({
        where: {
          topic,
          ownerGuid: instance.guid,
          ownerType: "apiKey",
        },
      });
    }
  }

  @AfterDestroy
  static async deletePermissions(instance: ApiKey) {
    return Permission.destroy({ where: { ownerGuid: instance.guid } });
  }

  async apiData() {
    const permissions = await this.$get("permissions");

    return {
      guid: this.guid,
      name: this.name,
      permissions: await Promise.all(permissions.map((prm) => prm.apiData())),
    };
  }

  async authorizeAction(actionTopic, actionMode) {
    return Permission.authorizeAction(this.guid, actionTopic, actionMode);
  }

  // --- Class Methods --- //

  // TODO: Cache these like Profile Property Rules for faster lookup

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
