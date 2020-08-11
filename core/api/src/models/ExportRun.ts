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
import { Run } from "./Run";
import { Export } from "./Export";

@Table({ tableName: "exportRuns", paranoid: false })
export class ExportRun extends Model<ExportRun> {
  guidPrefix() {
    return "exr";
  }

  @Column({ primaryKey: true })
  guid: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Export)
  @Column
  exportGuid: string;

  @AllowNull(false)
  @ForeignKey(() => Run)
  @Column
  runGuid: string;

  @BelongsTo(() => Export)
  export: Export;

  @BelongsTo(() => Run)
  run: Run;

  async apiData() {
    return {
      exportGuid: this.exportGuid,
      runGuid: this.runGuid,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }
}
