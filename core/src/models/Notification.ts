import { Table, Column, AllowNull } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Transaction } from "sequelize";

@Table({ tableName: "notifications", paranoid: false })
export class Notification extends LoggedModel<Notification> {
  guidPrefix() {
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

  async apiData(transaction?: Transaction) {
    return {
      guid: this.guid,
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

  static async findByGuid(guid: string, transaction?: Transaction) {
    const instance = await this.scope(null).findOne({
      where: { guid },
      transaction,
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }
}
