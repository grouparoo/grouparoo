import { api } from "actionhero";
import { Table, Column, AllowNull, BeforeSave } from "sequelize-typescript";
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

  @BeforeSave
  static async enureValidType(instance: File) {
    const validTypes: Array<string> = api.files.types;
    if (!validTypes.includes(instance.type)) {
      throw new Error(`${instance.type} is not a valid file type`);
    }
  }

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

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
