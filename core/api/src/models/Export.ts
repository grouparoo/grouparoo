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
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Import } from "./Import";
import { ExportImport } from "./ExportImport";
import { Destination } from "./Destination";
import { Profile } from "./Profile";
import { Run } from "./Run";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { Op } from "sequelize";

interface ExportProfileProperties {
  [key: string]: any;
}

@Table({ tableName: "exports", paranoid: false })
export class Export extends Model<Export> {
  guidPrefix() {
    return "exp";
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
    try {
      //@ts-ignore
      return JSON.parse(this.getDataValue("oldProfileProperties"));
    } catch (e) {
      return {};
    }
  }
  set oldProfileProperties(value: ExportProfileProperties) {
    //@ts-ignore
    this.setDataValue("oldProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newProfileProperties(): ExportProfileProperties {
    try {
      //@ts-ignore
      return JSON.parse(this.getDataValue("newProfileProperties"));
    } catch (e) {
      return {};
    }
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

  @Column
  toDelete: boolean;

  @Column
  mostRecent: boolean;

  @BelongsTo(() => Destination)
  destination: Destination;

  @HasMany(() => ExportImport)
  exportImports: ExportImport[];

  @BelongsToMany(() => Import, () => ExportImport)
  imports: Import[];

  @BelongsToMany(() => Run, () => Import, "importGuid")
  runs: Run[];

  @BelongsTo(() => Profile)
  profile: Profile;

  @AfterDestroy
  static async destroyExportImports(instance: Export) {
    return ExportImport.destroy({
      where: {
        exportGuid: instance.guid,
      },
    });
  }

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
    const destination = await this.$get("destination");
    // const app = await destination.$get("app");

    return {
      guid: this.guid,
      destination: destination ? await destination.apiData() : null,
      // destinationGuid: this.destinationGuid,
      profileGuid: this.profileGuid,
      startedAt: this.startedAt,
      completedAt: this.completedAt,
      oldProfileProperties: this.oldProfileProperties,
      newProfileProperties: this.newProfileProperties,
      oldGroups: this.oldGroups,
      newGroups: this.newGroups,
      toDelete: this.toDelete,
      mostRecent: this.mostRecent,
      errorMessage: this.errorMessage,
    };
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
