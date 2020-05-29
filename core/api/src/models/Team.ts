import {
  Table,
  Column,
  AllowNull,
  Default,
  Length,
  AfterCreate,
  AfterSave,
  BeforeDestroy,
  HasMany,
  AfterDestroy,
  BeforeSave,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { TeamMember } from "./TeamMember";
import { Permission } from "./Permission";
import { AsyncReturnType } from "type-fest";

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

  @BeforeSave
  static async checkLockedPermissions(instance: Team) {
    if (
      instance.locked &&
      !instance.isNewRecord &&
      (instance.permissionAllRead !== null ||
        instance.permissionAllWrite !== null)
    ) {
      throw new Error("locked teams cannot change permissions");
    }
  }

  @AfterSave
  static async buildPermissions(instance: Team) {
    const permissionsWithStatus: Array<{
      isNew: boolean;
      permission: Permission;
    }> = [];
    const topics = Permission.topics();
    for (const i in topics) {
      const topic = topics[i];
      const [permission, isNew] = await Permission.findOrCreate({
        where: {
          topic,
          ownerGuid: instance.guid,
          ownerType: "team",
        },
      });

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

      permissionsWithStatus.push({ isNew, permission });
    }

    return permissionsWithStatus;
  }

  @BeforeDestroy
  static async checkLocked(instance: Team) {
    if (instance.locked === true) {
      throw new Error("you cannot delete this team");
    }
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
    return Permission.destroy({ where: { ownerGuid: instance.guid } });
  }

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
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
