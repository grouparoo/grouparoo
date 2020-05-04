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
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { TeamMember } from "./TeamMember";
import { Permission } from "./Permission";

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
  @Default(true)
  @Column
  deletable: boolean;

  @HasMany(() => TeamMember)
  teamMembers: TeamMember[];

  @HasMany(() => Permission)
  permissions: Permission[];

  @AfterSave
  static async buildPermissions(instance: Team) {
    const topics = Permission.topics();
    for (const i in topics) {
      const topic = topics[i];
      await Permission.findOrCreate({
        where: {
          topic,
          ownerGuid: instance.guid,
          ownerType: "team",
        },
      });
    }
  }

  @BeforeDestroy
  static async ensureDeletable(instance: Team) {
    if (instance.deletable === false) {
      throw new Error("you cannot delete this team");
    }
  }

  @BeforeDestroy
  static async ensureNoTeamMembers(instance: Team) {
    const teamMembersCount = await instance.$count("teamMembers");

    if (teamMembersCount > 0) {
      throw new Error("you cannot delete a team that has members");
    }
  }

  @AfterDestroy
  static async deletePermissions(instance: Team) {
    return Permission.destroy({ where: { ownerGuid: instance.guid } });
  }

  async apiData() {
    const membersCount = await this.$count("teamMembers");
    const permissions = await this.$get("permissions");

    return {
      guid: this.guid,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      permissions: await Promise.all(permissions.map((prm) => prm.apiData())),
      membersCount,
    };
  }

  async authorizeAction(actionTopic, actionMode) {
    return Permission.authorizeAction(this.guid, actionTopic, actionMode);
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
