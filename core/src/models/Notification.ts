import { Table, Column, AllowNull } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";

@Table({ tableName: "notifications", paranoid: false })
export class Notification extends LoggedModel<Notification> {
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

  @AllowNull(true)
  @Column
  cta: string;

  @AllowNull(true)
  @Column
  ctaLink: string;

  @AllowNull(true)
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
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      readAt: this.readAt ? this.readAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }
}
