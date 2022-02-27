import { Table, Column, AllowNull } from "sequelize-typescript";
import { CommonModel } from "../classes/commonModel";
import { APIData } from "../modules/apiData";

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
}
