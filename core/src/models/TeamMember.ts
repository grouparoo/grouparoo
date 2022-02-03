import {
  Table,
  Column,
  AllowNull,
  IsEmail,
  BelongsTo,
  BeforeSave,
  ForeignKey,
  IsLowercase,
  BeforeValidate,
  BeforeDestroy,
  AfterCreate,
} from "sequelize-typescript";
import { Team } from "./Team";
import { TeamMemberOps } from "../modules/ops/teamMember";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";
import { CLS } from "../modules/cls";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "teamMembers", paranoid: false })
export class TeamMember extends CommonModel {
  idPrefix() {
    return "tem";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => Team)
  teamId: string;

  @Column
  locked: string;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @IsEmail
  @IsLowercase
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
      id: this.id,
      teamId: this.teamId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      locked: this.locked,
      lastLoginAt: this.lastLoginAt,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  async updatePassword(password: string) {
    return TeamMemberOps.updatePassword(this, password);
  }

  async checkPassword(password: string) {
    return TeamMemberOps.checkPassword(this, password);
  }

  // --- Class Methods --- //

  @BeforeValidate
  static lowercaseEmail(instance: TeamMember) {
    if (instance.email) instance.email = instance.email.toLocaleLowerCase();
  }

  @BeforeSave
  static async ensureTeamExists(instance: TeamMember) {
    const team = await instance.$get("team");
    if (!team) throw new Error("team not found");
  }

  @BeforeSave
  static async noUpdateIfLocked(instance: TeamMember) {
    await LockableHelper.beforeSave(instance, ["lastLoginAt"]);
  }

  @AfterCreate
  static async sendTelemetry() {
    await CLS.enqueueTask("telemetry:adHoc", { trigger: "team" });
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: TeamMember) {
    await LockableHelper.beforeDestroy(instance);
  }
}
