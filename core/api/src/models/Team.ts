import {
  Table,
  Column,
  AllowNull,
  Default,
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
import { Transaction } from "sequelize";
import { LockableHelper } from "../modules/lockableHelper";

@Table({ tableName: "teams", paranoid: false })
export class Team extends LoggedModel<Team> {
  guidPrefix() {
    return "tea";
  }

  @AllowNull(false)
  @Length({ min: 3, max: 191 })
  @Column
  name: string;

  @AllowNull(false)
  @Default(false)
  @Column
  locked: boolean;

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
    const permissionsApiData: AsyncReturnType<
      Permission["apiData"]
    >[] = await Promise.all(permissions.map((prm) => prm.apiData()));

    return {
      guid: this.guid,
      name: this.name,
      locked: this.locked,
      permissionAllRead: this.permissionAllRead,
      permissionAllWrite: this.permissionAllWrite,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      permissions: permissionsApiData,
      membersCount,
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
          `permission ${permissions[i].guid} not found for this team`
        );
      }

      if (!permission.locked) {
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

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
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

  @AfterSave
  static async buildPermissions(instance: Team) {
    const transaction: Transaction = await api.sequelize.transaction();
    const permissionsWithStatus: Array<{
      isNew: boolean;
      permission: Permission;
    }> = [];

    try {
      for (const i in PermissionTopics) {
        const topic = PermissionTopics[i];
        let isNew = false;
        let permission = await Permission.findOne({
          where: {
            topic,
            ownerGuid: instance.guid,
            ownerType: "team",
          },
          transaction,
        });

        if (!permission) {
          isNew = true;
          permission = await Permission.create(
            {
              topic,
              ownerGuid: instance.guid,
              ownerType: "team",
            },
            { transaction }
          );
        }

        if (isNew) {
          // default new teams to having full 'read' access
          await permission.update({ read: true }, { transaction });
        }

        if (instance.permissionAllRead !== null) {
          await permission.update(
            { read: instance.permissionAllRead },
            { transaction }
          );
        }
        if (instance.permissionAllWrite !== null) {
          await permission.update(
            { write: instance.permissionAllWrite },
            { transaction }
          );
        }

        permissionsWithStatus.push({ isNew, permission });
      }

      await transaction.commit();

      return permissionsWithStatus;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeDestroy
  static async ensureNoTeamMembers(instance: Team) {
    const teamMembersCount = await instance.$count("teamMembers");

    if (teamMembersCount > 0) {
      throw new Error("cannot delete a team that has members");
    }
  }

  @AfterDestroy
  static async deletePermissions(instance: Team, { transaction }) {
    return Permission.destroy({
      where: { ownerGuid: instance.guid },
      transaction,
    });
  }
}
