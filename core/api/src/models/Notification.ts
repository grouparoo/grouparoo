import { Table, Column, AllowNull } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";

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
  readAt: Date;

  async apiData() {
    return {
      guid: this.guid,
      from: this.from,
      subject: this.subject,
      body: this.body,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      readAt: this.readAt ? this.readAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }
}
