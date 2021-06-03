import {
  Table,
  Column,
  AllowNull,
  Length,
  AfterSave,
  BeforeDestroy,
  HasMany,
  AfterDestroy,
  BeforeSave,
} from "sequelize-typescript";
import { api } from "actionhero";
import { LoggedModel } from "../classes/loggedModel";
import { TeamMember } from "./TeamMember";
import { Permission, PermissionTopics } from "./Permission";
import { AsyncReturnType } from "type-fest";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";

@Table({ tableName: "teams", paranoid: false })
export class Team extends LoggedModel<Team> {
  idPrefix() {
    return "tea";
  }

  @AllowNull(false)
  @Length({ min: 3, max: 191 })
  @Column
  name: string;

  @AllowNull(true)
  @Column
  locked: string;

  @AllowNull(true)
  @Column
  permissionAllRead: boolean;

  @AllowNull(true)
  @Column
  permissionAllWrite: boolean;

  @HasMany(() => TeamMember)
  teamMembers: TeamMember[];

  @HasMany(() => Permission)
  permissions: Permission[];

  async apiData() {
    const membersCount = await this.$count("teamMembers");
    const permissions = await this.$get("permissions", {
      order: [["topic", "asc"]],
    });
    const permissionsApiData: AsyncReturnType<Permission["apiData"]>[] =
      await Promise.all(permissions.map((prm) => prm.apiData()));

    return {
      id: this.id,
      name: this.name,
      locked: this.locked,
      permissionAllRead: this.permissionAllRead,
      permissionAllWrite: this.permissionAllWrite,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      permissions: permissionsApiData,
      membersCount,
    };
  }

  async authorizeAction(topic: string, mode: "read" | "write") {
    return Permission.authorizeAction(topic, mode, this);
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
          `permission ${permissions[i].id} not found for this team`
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

        await permission.save();
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
  static async checkLockedPermissions(instance: Team) {
    if (
      instance.locked &&
      api.codeConfig.allowLockedModelChanges === false &&
      !instance.isNewRecord &&
      (instance.permissionAllRead !== null ||
        instance.permissionAllWrite !== null)
    ) {
      throw new Error("locked teams cannot change permissions");
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @AfterSave
  static async buildPermissions(instance: Team) {
    const permissionsWithStatus: Array<{
      isNew: boolean;
      permission: Permission;
    }> = [];

    for (const i in PermissionTopics) {
      const topic = PermissionTopics[i];
      let isNew = false;
      let permission = await Permission.findOne({
        where: {
          topic,
          ownerId: instance.id,
          ownerType: "team",
        },
      });

      if (!permission) {
        isNew = true;
        permission = await Permission.create({
          topic,
          ownerId: instance.id,
          ownerType: "team",
        });
      }

      if (isNew) {
        // default new teams to having full 'read' access
        await permission.update({ read: true });
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

      permissionsWithStatus.push({ isNew, permission });
    }
    return permissionsWithStatus;
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @BeforeDestroy
  static async ensureNoTeamMembers(instance: Team) {
    const teamMembersCount = await instance.$count("teamMembers");

    if (teamMembersCount > 0) {
      throw new Error("cannot delete a team that has members");
    }
  }

  @AfterDestroy
  static async deletePermissions(instance: Team) {
    return Permission.destroy({
      where: { ownerId: instance.id },
    });
  }
}
