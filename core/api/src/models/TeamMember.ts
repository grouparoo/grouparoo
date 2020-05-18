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
import bcrypt from "bcrypt";
import { Team } from "./Team";

@Table({ tableName: "teamMembers", paranoid: false })
export class TeamMember extends LoggedModel<TeamMember> {
  guidPrefix() {
    return "tem";
  }

  saltRounds = 10;

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

  @BeforeSave
  static async ensureTeamExists(instance: TeamMember) {
    const team = await instance.$get("team");
    if (!team) {
      throw new Error("team not found");
    }
  }

  async apiData() {
    return {
      guid: this.guid,
      teamGuid: this.teamGuid,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      lastLoginAt: this.lastLoginAt,
      createdAt: this.createdAt ? this.createdAt.toString() : null,
      updatedAt: this.updatedAt ? this.updatedAt.toString() : null,
    };
  }

  async updatePassword(password: string, transaction = undefined) {
    this.passwordHash = await bcrypt.hash(password, this.saltRounds);
    await this.save({ transaction });
  }

  async checkPassword(password: string) {
    if (!this.passwordHash) {
      throw new Error("password not set for this team member");
    }

    const match: boolean = await bcrypt.compare(password, this.passwordHash);
    return match;
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
