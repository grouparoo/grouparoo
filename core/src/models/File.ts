import { api } from "actionhero";
import { Table, Column, AllowNull, BeforeSave } from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";

@Table({ tableName: "files", paranoid: false })
export class File extends LoggedModel<File> {
  idPrefix() {
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
      id: this.id,
      transport: this.transport,
      type: this.type,
      bucket: this.bucket,
      path: this.path,
      extension: this.extension,
      mime: this.mime,
      sizeBytes: this.sizeBytes,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async enureValidType(instance: File) {
    const validTypes: Array<string> = api.files.types;
    if (!validTypes.includes(instance.type)) {
      throw new Error(`${instance.type} is not a valid file type`);
    }
  }
}
