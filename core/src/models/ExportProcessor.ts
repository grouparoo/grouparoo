import {
  Table,
  Column,
  AllowNull,
  Is,
  BelongsTo,
  BeforeSave,
  ForeignKey,
  DataType,
  Default,
  HasMany,
} from "sequelize-typescript";
import { Op, QueryTypes } from "sequelize";
import { api, config } from "actionhero";
import { Destination } from "./Destination";
import { APIData } from "../modules/apiData";
import { StateMachine } from "../modules/stateMachine";
import { Export } from "./Export";
import { Errors } from "../modules/errors";
import { ExportProcessorOps } from "../modules/ops/exportProcessor";
import { Mapping } from "./Mapping";
import { Option } from "./Option";
import { CommonModel } from "../classes/commonModel";

export const ExportProcessorStates = [
  "pending", // waiting to be processed
  "failed", // something went wrong and we won't try again
  "complete", // OK!
] as const;

const STATE_TRANSITIONS = [
  { from: "pending", to: "failed", checks: [] },
  {
    from: "pending",
    to: "complete",
    checks: [
      (instance: ExportProcessor) => instance.ensureAllExportsProcessed(),
    ],
  },
];

@Table({ tableName: "exportProcessors", paranoid: false })
export class ExportProcessor extends CommonModel<ExportProcessor> {
  idPrefix() {
    return "prc";
  }

  @Column({ primaryKey: true })
  id: string;

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationId: string;

  @Column(DataType.TEXT)
  remoteKey: string;

  @AllowNull(false)
  @Default(ExportProcessor.defaultState)
  @Column(DataType.ENUM(...ExportProcessorStates))
  state: typeof ExportProcessorStates[number];

  @Column
  startedAt: Date;

  @Column
  processAt: Date;

  @Default(0)
  @Column
  retryCount: number;

  @Column
  completedAt: Date;

  @Column
  errorMessage: string;

  @HasMany(() => Export)
  exports: Export[];

  @Is("ofValidErrorLevel", (value) => {
    if (value && !Errors.ERROR_LEVELS.includes(value)) {
      throw new Error(
        `errorLevel must be one of: ${Errors.ERROR_LEVELS.join(",")}`
      );
    }
  })
  @Column(DataType.ENUM(...Errors.ERROR_LEVELS))
  errorLevel: Errors.ErrorLevel;

  @BelongsTo(() => Destination)
  destination: Destination;

  async setError(error: Error, retryDelay: number = config.tasks.timeout) {
    return ExportProcessorOps.setError(this, error, retryDelay);
  }

  async retry(
    retryDelay: number = config.tasks.timeout,
    skipCount: boolean = false
  ) {
    return ExportProcessorOps.retry(this, retryDelay, skipCount);
  }

  async complete() {
    this.errorMessage = null;
    this.errorLevel = null;
    this.completedAt = new Date();
    this.state = "complete";
    await this.save();
  }

  async apiData(includeDestination = true) {
    const exportsCount = await this.$count("exports");
    const destination = await this.$get("destination", {
      include: includeDestination ? [Option, Mapping] : undefined,
      scope: null,
    });

    return {
      id: this.id,
      destination:
        destination && includeDestination
          ? await destination.apiData(false, false)
          : null,
      destinationName: destination ? destination.name : null,
      state: this.state,
      createdAt: APIData.formatDate(this.createdAt),
      processAt: APIData.formatDate(this.processAt),
      startedAt: APIData.formatDate(this.startedAt),
      completedAt: APIData.formatDate(this.completedAt),
      remoteKey: this.remoteKey,
      exportsCount,
      retryCount: this.retryCount,
      errorMessage: this.errorMessage,
      errorLevel: this.errorLevel,
    };
  }

  async getExportsToProcess() {
    return ExportProcessorOps.getExportsToProcess(this);
  }

  async ensureAllExportsProcessed() {
    const pendingExportsCount = await this.$count("exports", {
      where: { state: { [Op.notIn]: ["complete", "failed"] } },
    });

    if (pendingExportsCount > 0) {
      throw new Error(
        "Cannot mark export processor as complete because some exports have not been processed"
      );
    }
  }

  // --- Class Methods --- //

  static defaultState = "pending";

  @BeforeSave
  static async updateState(instance: ExportProcessor) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static ensureErrorLevel(instance: ExportProcessor) {
    if (instance.errorMessage && !instance.errorLevel) {
      instance.errorLevel = "error";
    }
  }

  static async sweep(limit: number) {
    // delete export processors that don't have any exports
    const rowsWithNoExports: { id: string }[] = await api.sequelize.query(
      `
      DELETE FROM "exportProcessors"
      WHERE id IN (
        SELECT id FROM "exportProcessors"
        WHERE "state" <> 'pending'
        AND 0 = (
          SELECT COUNT(id)
          FROM exports
          WHERE
            exports."exportProcessorId" = "exportProcessors"."id"
        )
        LIMIT ${limit}
      )
     ${config.sequelize.dialect === "postgres" ? "RETURNING id" : ""}
      ;`,
      { type: QueryTypes.SELECT }
    );

    let responseCountWithNoExports = 0;
    if (config.sequelize.dialect === "sqlite") {
      const changesRows = await api.sequelize.query(
        "SELECT changes() as count;",
        { type: QueryTypes.SELECT }
      );
      responseCountWithNoExports = changesRows[0]["count"];
    }

    return config.sequelize.dialect === "sqlite"
      ? responseCountWithNoExports
      : rowsWithNoExports.length;
  }
}
