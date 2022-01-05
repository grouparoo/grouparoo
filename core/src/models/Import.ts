import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  DataType,
  AfterCreate,
  Default,
  AfterBulkCreate,
  BeforeSave,
} from "sequelize-typescript";
import { config } from "actionhero";
import Moment from "moment";
import { Op } from "sequelize";
import { CLS } from "../modules/cls";
import { GrouparooRecord } from "./GrouparooRecord";
import { Run } from "./Run";
import { plugin } from "../modules/plugin";
import { ImportOps } from "../modules/ops/import";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";
import { StateMachine } from "../modules/stateMachine";

export interface ImportData {
  [key: string]: any;
}

export interface ImportRecordProperties {
  [key: string]: any;
}

const IMPORT_CREATORS = ["run"] as const;

const STATES = [
  "associating",
  "importing",
  "exporting",
  "failed",
  "complete",
] as const;

const STATE_TRANSITIONS = [
  { from: "associating", to: "failed", checks: [] },
  { from: "associating", to: "importing", checks: [] },
  { from: "importing", to: "failed", checks: [] },
  { from: "importing", to: "complete", checks: [] },
  { from: "importing", to: "exporting", checks: [] },
  { from: "exporting", to: "failed", checks: [] },
  { from: "exporting", to: "complete", checks: [] },
];

@Table({ tableName: "imports", paranoid: false })
export class Import extends CommonModel<Import> {
  idPrefix() {
    return "imp";
  }

  @AllowNull(false)
  @Default("associating")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

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

  @ForeignKey(() => GrouparooRecord)
  @Column
  recordId: string;

  @BelongsTo(() => GrouparooRecord)
  record: GrouparooRecord;

  @AllowNull(false)
  @Default(false)
  @Column
  createdRecord: boolean;

  @Column(DataType.TEXT)
  // oldRecordProperties: string;
  get oldRecordProperties(): ImportRecordProperties {
    //@ts-ignore
    return JSON.parse(this.getDataValue("oldRecordProperties") || "{}");
  }
  set oldRecordProperties(value: ImportRecordProperties) {
    //@ts-ignore
    this.setDataValue("oldRecordProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  // newRecordProperties: string;
  get newRecordProperties(): ImportRecordProperties {
    //@ts-ignore
    return JSON.parse(this.getDataValue("newRecordProperties") || "{}");
  }
  set newRecordProperties(value: ImportRecordProperties) {
    //@ts-ignore
    this.setDataValue("newRecordProperties", JSON.stringify(value));
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
  recordAssociatedAt: Date;

  @Column
  recordUpdatedAt: Date;

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

    const record = await this.$get("record");

    return {
      state: this.state,

      // IDs
      id: this.id,
      creatorType: this.creatorType,
      creatorId: this.creatorId,
      recordId: this.recordId,
      modelId: record?.modelId,

      //data
      data,
      rawData,

      // lifecycle timestamps
      createdAt: APIData.formatDate(this.createdAt),
      startedAt: APIData.formatDate(this.startedAt),
      recordAssociatedAt: APIData.formatDate(this.recordAssociatedAt),
      recordUpdatedAt: APIData.formatDate(this.recordUpdatedAt),
      groupsUpdatedAt: APIData.formatDate(this.groupsUpdatedAt),
      exportedAt: APIData.formatDate(this.exportedAt),

      // data before and after
      createdRecord: this.createdRecord,
      oldRecordProperties: this.oldRecordProperties,
      newRecordProperties: this.newRecordProperties,
      oldGroupIds: this.oldGroupIds,
      newGroupIds: this.newGroupIds,

      // errors
      errorMessage: this.errorMessage,
      errorMetadata: this.errorMetadata,
    };
  }

  async setError(error: Error, step: string) {
    this.state = "failed";
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

  async associateRecord() {
    return ImportOps.associateRecord(this);
  }

  // --- Class Methods --- //
  static defaultState: typeof STATES[number] = "associating";

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async updateState(instance: Import) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterCreate
  static async enqueueTask(instance: Import) {
    if (!instance.recordId) {
      await CLS.enqueueTaskIn(
        config.tasks.timeout + 1,
        "import:associateRecord",
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
