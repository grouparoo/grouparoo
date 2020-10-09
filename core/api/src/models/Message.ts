import { Table, Column, AllowNull } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";

@Table({ tableName: "messages", paranoid: false })
export class Message extends LoggedModel<Message> {
  guidPrefix() {
    return "msg";
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
