import {
  Table,
  Column,
  AllowNull,
  Length,
  HasMany,
  AfterSave,
  AfterDestroy,
  BeforeValidate,
} from "sequelize-typescript";
import * as UUID from "uuid";
import { LoggedModel } from "../classes/loggedModel";
import { Permission } from "./Permission";

@Table({ tableName: "apiKeys", paranoid: false })
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

  @BeforeValidate
  static async buildApiKey(instance: ApiKey) {
    if (!instance.apiKey) {
      instance.apiKey = UUID.v4()
        .replace(/-/g, "")
        .replace(/_/g, "")
        .toLocaleLowerCase();
    }
  }

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
    const permissions = await this.$get("permissions", {
      order: [["topic", "asc"]],
    });

    return {
      guid: this.guid,
      name: this.name,
      apiKey: this.apiKey,
      permissions: await Promise.all(permissions.map((prm) => prm.apiData())),
    };
  }

  async authorizeAction(topic: string, mode: "read" | "write") {
    return Permission.authorizeAction(this.guid, topic, mode);
  }

  async setPermissions(
    permissions: Array<{ guid: string; read: boolean; write: boolean }>
  ) {
    for (const i in permissions) {
      const permission = await Permission.findOne({
        where: { ownerGuid: this.guid, guid: permissions[i].guid },
      });
      if (!permission) {
        throw new Error(
          `permission ${permissions[i].guid} not found for this apiKey`
        );
      }
      if (!permission.locked) {
        permission.read = permissions[i].read;
        permission.write = permissions[i].write;
        await permission.save();
      }
    }
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
