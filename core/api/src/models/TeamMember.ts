import {
  Table,
  Column,
  AllowNull,
  IsEmail,
  BelongsTo,
  BeforeSave,
  ForeignKey,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Team } from "./Team";
import { TeamMemberOps } from "../modules/ops/teamMember";

@Table({ tableName: "teamMembers", paranoid: false })
export class TeamMember extends LoggedModel<TeamMember> {
  guidPrefix() {
    return "tem";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => Team)
  teamGuid: string;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @IsEmail
  @Column
  email: string;

  @Column
  passwordHash: string;

  @Column
  lastLoginAt: Date;

  @BelongsTo(() => Team)
  team: Team;

  async apiData() {
    return {
      guid: this.guid,
      teamGuid: this.teamGuid,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      lastLoginAt: this.lastLoginAt,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  async updatePassword(password: string, transaction = undefined) {
    return TeamMemberOps.updatePassword(this, password, transaction);
  }

  async checkPassword(password: string) {
    return TeamMemberOps.checkPassword(this, password);
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async ensureTeamExists(instance: TeamMember) {
    const team = await instance.$get("team");
    if (!team) throw new Error("team not found");
  }
}
