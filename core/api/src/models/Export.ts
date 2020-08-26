import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BelongsTo,
  BelongsToMany,
  BeforeCreate,
  HasMany,
  ForeignKey,
  DataType,
  AfterDestroy,
  Default,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Import } from "./Import";
import { ExportImport } from "./ExportImport";
import { ExportRun } from "./ExportRun";
import { Destination } from "./Destination";
import { Profile } from "./Profile";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { Op } from "sequelize";
import { ExportOps } from "../modules/ops/export";

/**
 * The Profile Properties in their normal data types (string, boolean, date, etc)
 */
export interface ExportProfileProperties {
  [key: string]: any | any[];
}

/**
 * The Profile Properties as stringified rawValues + types
 */
export interface ExportProfilePropertiesWithType {
  [key: string]: { type: string; rawValue: string | string[] };
}

@Table({ tableName: "exports", paranoid: false })
export class Export extends Model<Export> {
  guidPrefix() {
    return "exp";
  }

  @Column({ primaryKey: true })
  guid: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationGuid: string;

  @AllowNull(false)
  @ForeignKey(() => Profile)
  @Column
  profileGuid: string;

  @Column
  startedAt: Date;

  @Column
  completedAt: Date;

  @Column
  errorMessage: string;

  @Column(DataType.TEXT)
  get oldProfileProperties(): ExportProfileProperties {
    return ExportOps.deserializeExportProfileProperties(
      //@ts-ignore
      this.getDataValue("oldProfileProperties")
    );
  }
  set oldProfileProperties(value: ExportProfileProperties) {
    //@ts-ignore
    this.setDataValue("oldProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newProfileProperties(): ExportProfileProperties {
    return ExportOps.deserializeExportProfileProperties(
      //@ts-ignore
      this.getDataValue("newProfileProperties")
    );
  }
  set newProfileProperties(value: ExportProfileProperties) {
    //@ts-ignore
    this.setDataValue("newProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get oldGroups(): string[] {
    try {
      //@ts-ignore
      return JSON.parse(this.getDataValue("oldGroups"));
    } catch (e) {
      return [];
    }
  }
  set oldGroups(value: string[]) {
    //@ts-ignore
    this.setDataValue("oldGroups", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newGroups(): string[] {
    try {
      //@ts-ignore
      return JSON.parse(this.getDataValue("newGroups"));
    } catch (e) {
      return [];
    }
  }
  set newGroups(value: string[]) {
    //@ts-ignore
    this.setDataValue("newGroups", JSON.stringify(value));
  }

  @Default(false)
  @AllowNull(false)
  @Column
  toDelete: boolean;

  @Default(false)
  @AllowNull(false)
  @Column
  hasChanges: boolean;

  @Default(false)
  @AllowNull(false)
  @Column
  mostRecent: boolean;

  @BelongsTo(() => Destination)
  destination: Destination;

  @HasMany(() => ExportImport)
  exportImports: ExportImport[];

  @BelongsToMany(() => Import, () => ExportImport)
  imports: Import[];

  @HasMany(() => ExportRun)
  exportRuns: ExportRun[];

  @BelongsTo(() => Profile)
  profile: Profile;

  async associateImports(imports: Array<Import>) {
    for (const i in imports) {
      const _import = imports[i];
      await ExportImport.create({
        importGuid: _import.guid,
        exportGuid: this.guid,
      });
    }
  }

  async markMostRecent() {
    const [count] = await Export.update(
      { mostRecent: false },
      {
        where: {
          profileGuid: this.profileGuid,
          destinationGuid: this.destinationGuid,
          guid: { [Op.not]: this.guid },
        },
      }
    );

    this.mostRecent = true;
    await this.save();

    return count;
  }

  async apiData() {
    const destination = await this.$get("destination", { scope: null });

    return {
      guid: this.guid,
      destination: destination ? await destination.apiData(false, false) : null,
      profileGuid: this.profileGuid,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      startedAt: this.startedAt ? this.startedAt.getTime() : null,
      completedAt: this.completedAt ? this.completedAt.getTime() : null,
      oldProfileProperties: this.oldProfileProperties,
      newProfileProperties: this.newProfileProperties,
      oldGroups: this.oldGroups,
      newGroups: this.newGroups,
      toDelete: this.toDelete,
      hasChanges: this.hasChanges,
      mostRecent: this.mostRecent,
      errorMessage: this.errorMessage,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @AfterDestroy
  static async destroyExportImports(instance: Export) {
    return ExportImport.destroy({
      where: { exportGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyExportRuns(instance: Export) {
    return ExportRun.destroy({
      where: { exportGuid: instance.guid },
    });
  }

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  static async sweep(limit: number) {
    const days = parseInt(
      (await plugin.readSetting("core", "sweeper-delete-old-exports-days"))
        .value
    );

    const _exports = await Export.findAll({
      where: {
        mostRecent: false,
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      order: [["createdAt", "desc"]],
      limit,
    });

    for (const i in _exports) {
      await _exports[i].destroy();
    }

    return { count: _exports.length, days };
  }
}
