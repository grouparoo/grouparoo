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

const IMPORT_CREATORS = ["run", "group"] as const;

const STATES = [
  "associating",
  "importing",
  "processing",
  "failed",
  "complete",
] as const;

const STATE_TRANSITIONS: StateMachine.StateTransition[] = [
  { from: "associating", to: "failed", checks: [] },
  { from: "associating", to: "importing", checks: [] },
  { from: "importing", to: "failed", checks: [] },
  { from: "importing", to: "complete", checks: [] },
  { from: "importing", to: "processing", checks: [] },
  { from: "processing", to: "failed", checks: [] },
  { from: "processing", to: "complete", checks: [] },
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

  @ForeignKey(() => GrouparooRecord)
  @Column
  recordId: string;

  @BelongsTo(() => GrouparooRecord)
  record: GrouparooRecord;

  @AllowNull(false)
  @Default(false)
  @Column
  createdRecord: boolean;

  @Column
  startedAt: Date;

  @Column
  recordAssociatedAt: Date;

  @Column
  importedAt: Date;

  @Column
  processedAt: Date;

  @Column
  errorMessage: string;

  @Column
  errorMetadata: string;

  @BelongsTo(() => Run)
  run: Run;

  async apiData() {
    const data = this.data || {};

    delete data._meta;

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

      // lifecycle timestamps
      createdAt: APIData.formatDate(this.createdAt),
      startedAt: APIData.formatDate(this.startedAt),
      recordAssociatedAt: APIData.formatDate(this.recordAssociatedAt),
      importedAt: APIData.formatDate(this.importedAt),
      processedAt: APIData.formatDate(this.processedAt),

      createdRecord: this.createdRecord,

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

  // --- Class Methods --- //
  static defaultState: typeof STATES[number] = "associating";

  @BeforeSave
  static async updateState(instance: Import) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
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
