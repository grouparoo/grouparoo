import {
  Table,
  Column,
  AllowNull,
  Default,
  Length,
  BeforeDestroy,
  HasMany,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { TeamMember } from "./TeamMember";

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
  read: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  write: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  administer: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  deletable: boolean;

  @HasMany(() => TeamMember)
  teamMembers: TeamMember[];

  async apiData() {
    const membersCount = await this.$count("teamMembers");

    return {
      guid: this.guid,
      name: this.name,
      read: this.read,
      write: this.write,
      administer: this.administer,
      deletable: this.deletable,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      membersCount,
    };
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
}
