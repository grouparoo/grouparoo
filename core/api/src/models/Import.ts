import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType,
  AfterCreate,
  AfterDestroy,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { task } from "actionhero";
import { Profile } from "./Profile";
import { Run } from "./Run";
import { ExportImport } from "./ExportImport";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { Op } from "sequelize";

interface ImportData {
  [key: string]: any;
}

interface ImportProfileProperties {
  [key: string]: any;
}

@Table({ tableName: "imports", paranoid: false })
export class Import extends Model<Import> {
  guidPrefix() {
    return "imp";
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
  @Column
  creatorType: string;

  @AllowNull(false)
  @ForeignKey(() => Run)
  @Column
  creatorGuid: string;

  @Column(DataType.TEXT)
  // data: string;
  get data(): ImportData {
    //@ts-ignore
    return JSON.parse(this.getDataValue("data"));
  }
  set data(value: ImportData) {
    //@ts-ignore
    this.setDataValue("data", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  // rawData: string;
  get rawData(): ImportData {
    //@ts-ignore
    return JSON.parse(this.getDataValue("rawData"));
  }
  set rawData(value: ImportData) {
    //@ts-ignore
    this.setDataValue("rawData", JSON.stringify(value));
  }

  @ForeignKey(() => Profile)
  @Column
  profileGuid: string;

  @BelongsTo(() => Profile)
  profile: Profile;

  @Column
  profileAssociatedAt: Date;

  @Column(DataType.TEXT)
  // oldProfileProperties: string;
  get oldProfileProperties(): ImportProfileProperties {
    //@ts-ignore
    return JSON.parse(this.getDataValue("oldProfileProperties") || "{}");
  }
  set oldProfileProperties(value: ImportProfileProperties) {
    //@ts-ignore
    this.setDataValue("oldProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  // newProfileProperties: string;
  get newProfileProperties(): ImportProfileProperties {
    //@ts-ignore
    return JSON.parse(this.getDataValue("newProfileProperties") || "{}");
  }
  set newProfileProperties(value: ImportProfileProperties) {
    //@ts-ignore
    this.setDataValue("newProfileProperties", JSON.stringify(value));
  }

  @Column
  profileUpdatedAt: Date;

  @Column(DataType.TEXT)
  // oldGroupGuids: string;
  get oldGroupGuids(): string[] {
    //@ts-ignore
    return JSON.parse(this.getDataValue("oldGroupGuids") || "[]");
  }
  set oldGroupGuids(value: string[]) {
    //@ts-ignore
    this.setDataValue("oldGroupGuids", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  // newGroupGuids: string;
  get newGroupGuids(): string[] {
    //@ts-ignore
    return JSON.parse(this.getDataValue("newGroupGuids") || "[]");
  }
  set newGroupGuids(value: string[]) {
    //@ts-ignore
    this.setDataValue("newGroupGuids", JSON.stringify(value));
  }

  @Column
  groupsUpdatedAt: Date;

  @Column
  exportedAt: Date;

  @Column
  errorMessage: string;

  @Column
  errorMetadata: string;

  @BelongsTo(() => Run)
  run: Run;

  @HasMany(() => ExportImport)
  exportImports: ExportImport[];

  async apiData() {
    const data = this.data || {};
    const rawData = this.rawData || {};

    delete data._meta;
    delete rawData._meta;

    return {
      // IDs
      guid: this.guid,
      creatorType: this.creatorType,
      creatorGuid: this.creatorGuid,
      profileGuid: this.profileGuid,

      //data
      data,
      rawData,

      // lifecycle timestamps
      createdAt: this.createdAt.toString(),
      profileAssociatedAt: this.profileAssociatedAt.toString(),
      profileUpdatedAt: this.profileUpdatedAt.toString(),
      groupsUpdatedAt: this.groupsUpdatedAt.toString(),
      exportedAt: this.exportedAt.toString(),

      // data before and after
      oldProfileProperties: this.oldProfileProperties,
      newProfileProperties: this.newProfileProperties,
      oldGroupGuids: this.oldGroupGuids,
      newGroupGuids: this.newGroupGuids,

      // errors
      errorMessage: this.errorMessage,
      errorMetadata: this.errorMetadata,
    };
  }

  async associateProfile() {
    const {
      profile,
      isNew,
      // will throw if there are no unique profile properties
    } = await Profile.findOrCreateByUniqueProfileProperties(this.data);

    this.profileGuid = profile.guid;
    this.profileAssociatedAt = new Date();
    await this.save();

    return { profile, isNew };
  }

  async setError(error: Error, step: string) {
    this.errorMessage = `Error on step ${step}: ${error.message}`;
    this.errorMetadata = JSON.stringify({
      step,
      message: error.message,
      stack: error.stack,
    });

    return this.save();
  }

  @AfterDestroy
  static async deleteExportImports(instance: Import) {
    return ExportImport.destroy({
      where: { importGuid: instance.guid },
    });
  }

  @AfterCreate
  static async enqueueTask(instance: Import) {
    const taskDelay = 3001;
    // often imports are created in transactions. We need to allow time for them to commit
    if (!instance.profileGuid) {
      await task.enqueueIn(taskDelay, "import:associateProfile", {
        importGuid: instance.guid,
      });
    } else {
      try {
        await task.enqueueIn(taskDelay, "profile:importAndUpdate", {
          guid: instance.profileGuid,
        });
      } catch (error) {
        if (
          error
            .toString()
            .match(/already enqueued at this time with same arguments/)
        ) {
          // ok
        } else {
          throw error;
        }
      }
    }
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }

  static async sweep(limit: number) {
    const days = parseInt(
      (await plugin.readSetting("core", "sweeper-delete-old-imports-days"))
        .value
    );

    const imports = await Import.findAll({
      where: {
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      limit,
    });

    for (const i in imports) {
      await imports[i].destroy();
    }

    return { count: imports.length, days };
  }
}
