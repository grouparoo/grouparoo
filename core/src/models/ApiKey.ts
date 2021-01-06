import {
  Table,
  Column,
  AllowNull,
  Length,
  HasMany,
  AfterSave,
  AfterDestroy,
  BeforeValidate,
  BeforeSave,
  BeforeDestroy,
} from "sequelize-typescript";
import * as UUID from "uuid";
import { LoggedModel } from "../classes/loggedModel";
import { Permission, PermissionTopics } from "./Permission";
import { AsyncReturnType } from "type-fest";
import { LockableHelper } from "../modules/lockableHelper";

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

  @AllowNull(true)
  @Column
  locked: string;

  @AllowNull(true)
  @Column
  permissionAllRead: boolean;

  @AllowNull(true)
  @Column
  permissionAllWrite: boolean;

  @HasMany(() => Permission)
  permissions: Permission[];

  @BeforeValidate
  static async buildApiKey(instance: ApiKey) {
    if (!instance.apiKey) {
      instance.apiKey = UUID.v4()
        .replace(/-/g, "")
        .replace(/_/g, "")
        .toLowerCase();
    }
  }

  async apiData() {
    const permissions = await this.$get("permissions", {
      order: [["topic", "asc"]],
    });
    const permissionsApiData: AsyncReturnType<
      Permission["apiData"]
    >[] = await Promise.all(permissions.map((prm) => prm.apiData()));

    return {
      guid: this.guid,
      name: this.name,
      apiKey: this.apiKey,
      locked: this.locked,
      permissionAllRead: this.permissionAllRead,
      permissionAllWrite: this.permissionAllWrite,
      permissions: permissionsApiData,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
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

      if (permission.locked === null) {
        permission.read =
          this.permissionAllRead !== null
            ? this.permissionAllRead
            : permissions[i].read;
        permission.write =
          this.permissionAllWrite !== null
            ? this.permissionAllWrite
            : permissions[i].write;

        await permission.save({});
      }
    }
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({
      where: { guid },
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @AfterSave
  static async buildPermissions(instance: ApiKey) {
    for (const i in PermissionTopics) {
      const topic = PermissionTopics[i];
      let permission = await Permission.findOne({
        where: {
          topic,
          ownerGuid: instance.guid,
          ownerType: "apiKey",
        },
      });

      if (!permission) {
        permission = await Permission.create({
          topic,
          ownerGuid: instance.guid,
          ownerType: "apiKey",
        });
      }

      if (instance.permissionAllRead !== null) {
        await permission.update({ read: instance.permissionAllRead });
      }
      if (instance.permissionAllWrite !== null) {
        await permission.update({ write: instance.permissionAllWrite });
      }
      if (instance.locked && !permission.locked) {
        await permission.update({ locked: instance.locked }, {});
      }
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async deletePermissions(instance: ApiKey, {}) {
    return Permission.destroy({
      where: { ownerGuid: instance.guid },
    });
  }
}
