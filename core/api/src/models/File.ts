import { Table, Column, AllowNull } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";

@Table({ tableName: "files", paranoid: false })
export class File extends LoggedModel<File> {
  guidPrefix() {
    return "fil";
  }

  @AllowNull(false)
  @Column
  transport: string;

  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(false)
  @Column
  bucket: string;

  @AllowNull(false)
  @Column
  path: string;

  @AllowNull(false)
  @Column
  extension: string;

  @AllowNull(false)
  @Column
  mime: string;

  @AllowNull(false)
  @Column
  sizeBytes: number;

  async apiData() {
    return {
      guid: this.guid,
      transport: this.transport,
      type: this.type,
      bucket: this.bucket,
      path: this.path,
      extension: this.extension,
      mime: this.mime,
      sizeBytes: this.sizeBytes,
      createdAt: this.createdAt,
    };
  }
}
