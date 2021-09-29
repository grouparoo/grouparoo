import {
  Model,
  Table,
  Column,
  AllowNull,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { TeamMember } from "./TeamMember";
import { APIData } from "../modules/apiData";
import { Op } from "sequelize";
import { api } from "actionhero";

@Table({ tableName: "sessions", paranoid: false })
export class Session extends Model {
  @Column({ primaryKey: true })
  id: string;

  idPrefix() {
    return "ses";
  }

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

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

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateId(instance: Session) {
    if (!instance.id) instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
  }

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
