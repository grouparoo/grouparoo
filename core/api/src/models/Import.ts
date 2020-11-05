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
  DataType,
  AfterCreate,
  Default,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { task, config } from "actionhero";
import { Profile } from "./Profile";
import { Run } from "./Run";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { Op } from "sequelize";
import { ImportOps } from "../modules/ops/import";

export interface ImportData {
  [key: string]: any;
}

export interface ImportProfileProperties {
  [key: string]: any;
}

@Table({ tableName: "imports", paranoid: false })
export class Import extends Model<Import> {
  guidPrefix() {
    return "imp";
  }

  @Column({ primaryKey: true })
  guid: string;

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

  @AllowNull(false)
  @Default(false)
  @Column
  createdProfile: boolean;

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
      createdAt: this.createdAt.getTime(),
      createdProfile: this.createdProfile,
      profileAssociatedAt: this.profileAssociatedAt
        ? this.profileAssociatedAt.getTime()
        : null,
      profileUpdatedAt: this.profileUpdatedAt
        ? this.profileUpdatedAt.getTime()
        : null,
      groupsUpdatedAt: this.groupsUpdatedAt
        ? this.groupsUpdatedAt.getTime()
        : null,
      exportedAt: this.exportedAt ? this.exportedAt.getTime() : null,

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

  async setError(error: Error, step: string) {
    this.errorMessage = `Error on step ${step}: ${error.message}`;
    this.errorMetadata = JSON.stringify({
      step,
      message: error.message,
      stack: error.stack,
    });

    return this.save();
  }

  async associateProfile() {
    return ImportOps.associateProfile(this);
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

  @AfterCreate
  static async enqueueTask(instance: Import) {
    if (!instance.profileGuid) {
      await task.enqueueIn(
        config.tasks.timeout + 1,
        "import:associateProfile",
        {
          importGuid: instance.guid,
        }
      );
    }
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
