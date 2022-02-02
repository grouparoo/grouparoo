import { Table, Column, AllowNull, AfterCreate } from "sequelize-typescript";
import { CommonModel } from "../classes/commonModel";
import { APIData } from "../modules/apiData";
import { broadcastModel } from "../modules/broadcastHelper";

@Table({ tableName: "notifications", paranoid: false })
export class Notification extends CommonModel<Notification> {
  idPrefix() {
    return "not";
  }

  @AllowNull(false)
  @Column
  from: string;

  @AllowNull(false)
  @Column
  subject: string;

  @AllowNull(false)
  @Column
  body: string;

  @Column
  cta: string;

  @Column
  ctaLink: string;

  @Column
  readAt: Date;

  async apiData() {
    return {
      id: this.id,
      from: this.from,
      subject: this.subject,
      body: this.body,
      cta: this.cta,
      ctaLink: this.ctaLink,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      readAt: APIData.formatDate(this.readAt),
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @AfterCreate
  static async broadcastAfterCreate(instance: Notification) {
    return broadcastModel(instance);
  }
}
