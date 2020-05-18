import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Import } from "./Import";
import { Export } from "./Export";

@Table({ tableName: "exportImports", paranoid: false })
export class ExportImport extends Model<ExportImport> {
  guidPrefix() {
    return "exi";
  }

  @Column({ primaryKey: true })
  guid: string;

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Export)
  @Column
  exportGuid: string;

  @AllowNull(false)
  @ForeignKey(() => Import)
  @Column
  importGuid: string;

  @BelongsTo(() => Export)
  export: Export;

  @BelongsTo(() => Import)
  import: Import;

  async apiData() {
    return {
      exportGuid: this.exportGuid,
      importGuid: this.importGuid,
      createdAt: this.createdAt ? this.createdAt.toString() : null,
      updatedAt: this.updatedAt ? this.updatedAt.toString() : null,
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
