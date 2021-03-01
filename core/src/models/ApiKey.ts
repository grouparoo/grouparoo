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
import { APIData } from "../modules/apiData";

@Table({ tableName: "apiKeys", paranoid: false })
export class ApiKey extends LoggedModel<ApiKey> {
  idPrefix() {
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
      id: this.id,
      name: this.name,
      apiKey: this.apiKey,
      locked: this.locked,
      permissionAllRead: this.permissionAllRead,
      permissionAllWrite: this.permissionAllWrite,
      permissions: permissionsApiData,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  async authorizeAction(topic: string, mode: "read" | "write") {
    return Permission.authorizeAction(this.id, topic, mode);
  }

  async setPermissions(
    permissions: Array<{ id: string; read: boolean; write: boolean }>
  ) {
    for (const i in permissions) {
      const permission = await Permission.findOne({
        where: { ownerId: this.id, id: permissions[i].id },
      });
      if (!permission) {
        throw new Error(
          `permission ${permissions[i].id} not found for this apiKey`
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

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
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
          ownerId: instance.id,
          ownerType: "apiKey",
        },
      });

      if (!permission) {
        permission = await Permission.create({
          topic,
          ownerId: instance.id,
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
      where: { ownerId: instance.id },
    });
  }
}
