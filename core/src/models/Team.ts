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
import {
  ActionPermissionTopic,
  ActionPermissionMode,
  Permission,
  PermissionTopics,
} from "./Permission";
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

  @Column
  locked: string;

  @Column
  permissionAllRead: boolean;

  @Column
  permissionAllWrite: boolean;

  @HasMany(() => TeamMember)
  teamMembers: TeamMember[];

  @HasMany(() => Permission, {
    foreignKey: "ownerId",
    scope: { ownerType: "team" },
  })
  permissions: Permission[];

  async apiData() {
    const membersCount = await this.$count("teamMembers");
    const permissions = await this.$get("permissions", {
      order: [["topic", "asc"]],
    });
    const permissionsApiData = await Promise.all(
      permissions.map((prm) => prm.apiData())
    );

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
      const permission: Permission = permissions.find(
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
  static async noUpdateIfLocked(instance: Team) {
    await LockableHelper.beforeSave(instance);
  }

  @AfterSave
  static async buildPermissions(instance: Team) {
    const permissionsWithStatus: {
      isNew: boolean;
      permission: Permission;
    }[] = [];

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
  static async noDestroyIfLocked(instance: Team) {
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
