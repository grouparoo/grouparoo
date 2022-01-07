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
import {
  ActionPermissionTopic,
  ActionPermissionMode,
  Permission,
  PermissionTopics,
} from "./Permission";
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

  @Column
  locked: string;

  @Column
  permissionAllRead: boolean;

  @Column
  permissionAllWrite: boolean;

  @HasMany(() => Permission, {
    foreignKey: "ownerId",
    scope: { ownerType: "apiKey" },
  })
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
    const permissionsApiData = await Promise.all(
      permissions.map((prm) => prm.apiData())
    );

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

  async authorizeAction(
    topic: ActionPermissionTopic,
    mode: ActionPermissionMode
  ) {
    return Permission.authorizeAction(topic, mode, this);
  }

  async setPermissions(
    userPermissions: { topic: string; read: boolean; write: boolean }[]
  ) {
    const permissions = await this.$get("permissions");
    for (const userPermission of userPermissions) {
      const permission = permissions.find(
        (p) => p.topic === userPermission.topic
      );
      if (!permission) {
        throw new Error(
          `Cannot find permission for topic ${userPermission.topic}`
        );
      }

      permission.read =
        this.permissionAllRead !== null
          ? this.permissionAllRead
          : userPermission.read;
      permission.write =
        this.permissionAllWrite !== null
          ? this.permissionAllWrite
          : userPermission.write;

      await LockableHelper.beforeSave(permission);
      await permission.save();
    }
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async noUpdateIfLocked(instance: ApiKey) {
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
        await permission.update({ locked: instance.locked });
      }
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: ApiKey) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async deletePermissions(instance: ApiKey, {}) {
    return Permission.destroy({
      where: { ownerId: instance.id },
    });
  }
}
