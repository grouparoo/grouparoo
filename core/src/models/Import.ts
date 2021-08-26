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
  BeforeBulkCreate,
  AfterBulkCreate,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { config } from "actionhero";
import { CLS } from "../modules/cls";
import { Profile } from "./Profile";
import { Run } from "./Run";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { Op } from "sequelize";
import { ImportOps } from "../modules/ops/import";
import { APIData } from "../modules/apiData";

export interface ImportData {
  [key: string]: any;
}

export interface ImportProfileProperties {
  [key: string]: any;
}

const IMPORT_CREATORS = ["run"] as const;

@Table({ tableName: "imports", paranoid: false })
export class Import extends Model {
  idPrefix() {
    return "imp";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @Column(DataType.ENUM(...IMPORT_CREATORS))
  creatorType: typeof IMPORT_CREATORS[number];

  @AllowNull(false)
  @ForeignKey(() => Run)
  @Column
  creatorId: string;

  @Column(DataType.TEXT)
  // data: string;
  get data(): ImportData {
    //@ts-ignore
    return JSON.parse(this.getDataValue("data") || "{}");
  }
  set data(value: ImportData) {
    //@ts-ignore
    this.setDataValue("data", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  // rawData: string;
  get rawData(): ImportData {
    //@ts-ignore
    return JSON.parse(this.getDataValue("rawData") || "{}");
  }
  set rawData(value: ImportData) {
    //@ts-ignore
    this.setDataValue("rawData", JSON.stringify(value));
  }

  @ForeignKey(() => Profile)
  @Column
  profileId: string;

  @BelongsTo(() => Profile)
  profile: Profile;

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

  @Column(DataType.TEXT)
  // oldGroupIds: string;
  get oldGroupIds(): string[] {
    //@ts-ignore
    return JSON.parse(this.getDataValue("oldGroupIds") || "[]");
  }
  set oldGroupIds(value: string[]) {
    //@ts-ignore
    this.setDataValue("oldGroupIds", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  // newGroupIds: string;
  get newGroupIds(): string[] {
    //@ts-ignore
    return JSON.parse(this.getDataValue("newGroupIds") || "[]");
  }
  set newGroupIds(value: string[]) {
    //@ts-ignore
    this.setDataValue("newGroupIds", JSON.stringify(value));
  }

  @Column
  startedAt: Date;

  @Column
  profileAssociatedAt: Date;

  @Column
  profileUpdatedAt: Date;

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
      id: this.id,
      creatorType: this.creatorType,
      creatorId: this.creatorId,
      profileId: this.profileId,

      //data
      data,
      rawData,

      // lifecycle timestamps
      createdAt: APIData.formatDate(this.createdAt),
      startedAt: APIData.formatDate(this.startedAt),
      profileAssociatedAt: APIData.formatDate(this.profileAssociatedAt),
      profileUpdatedAt: APIData.formatDate(this.profileUpdatedAt),
      groupsUpdatedAt: APIData.formatDate(this.groupsUpdatedAt),
      exportedAt: APIData.formatDate(this.exportedAt),

      // data before and after
      createdProfile: this.createdProfile,
      oldProfileProperties: this.oldProfileProperties,
      newProfileProperties: this.newProfileProperties,
      oldGroupIds: this.oldGroupIds,
      newGroupIds: this.newGroupIds,

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

    await this.save();

    if (this.creatorType === "run") {
      const run = await Run.findOne({ where: { id: this.creatorId } });
      if (run && run.state === "complete") await run.buildErrorMessage();
    }
  }

  async associateProfile() {
    return ImportOps.associateProfile(this);
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateId(instance: Import) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeBulkCreate
  static generateIds(instances: Import[]) {
    instances.forEach((instance) => this.generateId(instance));
  }

  @AfterCreate
  static async enqueueTask(instance: Import) {
    if (!instance.profileId) {
      await CLS.enqueueTaskIn(
        config.tasks.timeout + 1,
        "import:associateProfile",
        { importId: instance.id }
      );
    }
  }

  @AfterBulkCreate
  static async enqueueTasks(instances: Import[]) {
    for (const instance of instances) await Import.enqueueTask(instance);
  }

  static async sweep(limit: number) {
    const days = parseInt(
      (await plugin.readSetting("core", "sweeper-delete-old-imports-days"))
        .value
    );

    const count = await Import.destroy({
      where: {
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      force: true,
      limit,
    });

    return { count, days };
  }
}
