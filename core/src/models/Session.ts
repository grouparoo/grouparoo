import { Table, Column, AllowNull, ForeignKey } from "sequelize-typescript";
import { TeamMember } from "./TeamMember";
import { APIData } from "../modules/apiData";
import { Op } from "sequelize";
import { api } from "actionhero";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "sessions", paranoid: false })
export class Session extends CommonModel {
  idPrefix() {
    return "ses";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => TeamMember)
  teamMemberId: string;

  @AllowNull(false)
  @Column
  fingerprint: string;

  @AllowNull(false)
  @Column
  expiresAt: Date;

  async apiData() {
    return {
      id: this.id,
      teamMemberId: this.teamMemberId,
      fingerprint: this.fingerprint,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      expiresAt: APIData.formatDate(this.expiresAt),
    };
  }

  // --- Class Methods --- //

  static async sweep() {
    const now = new Date();
    const count = await Session.destroy({
      where: { expiresAt: { [Op.lt]: now } },
      force: true,
    });

    const days = api.session.ttl / 1000 / 60 / 60 / 24;

    return { count, days };
  }
}
